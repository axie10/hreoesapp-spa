import { useLocation, useNavigate } from "react-router";
import { useForm } from "../../shared/hooks/useForm";
import { HeroCard } from "../components/HeroCard"
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  console.log({location})

  // desestructuramos el query string para obtener el 
  // valor de la busqueda usando la libreria query-string
  const  { q = '' }  = queryString.parse(location.search);
  // console.log({q})

  const heroes = getHeroesByName(q);

  const { searchText , onInputChange, onResetForm } = useForm({
    searchText: q
  });

  // enviamos el valor de la busqueda al formulario
  const onSearchSubmit = (event) => {

    event.preventDefault();
    // if(searchText.trim().length < 1 ) return;
    // console.log({searchText})
    // NOTA:
    // Podemos navegar a la misma pagina con el valor de la busqueda, la ruta se actualizara
    // la ruta no hace falta poner todo el path, solo el query string ya que vamos a navegar a la misma pagina
    navigate(`?q=${ searchText }`);
  }

  return (
    <>
      <h1>Search Page</h1>
      <hr />

      <div className="row p-3">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />

              <form onSubmit={onSearchSubmit}>

                <input
                  type="text"
                  placeholder="Find your hero"
                  className="form-control"
                  name="searchText"
                  autoComplete="off"
                  value={ searchText }
                  onChange={ onInputChange }
                />

                <button type="submit" className="btn btn-outline-primary mt-2">Search</button>

              </form>

          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr />

            {/* AQUI HACEMOS EL CONDICIONAL PARA MOSTRAR LOS HEROES EN VEZ DE PONER LAS TRES PARTES QUE TENEMOS ABAJO */}
            {
              (q === '') 
                ? <div className="alert alert-info animate__animated animate__fadeIn">Search a hero</div>
                : heroes.length === 0 
                  ? <div className="alert alert-danger animate__animated animate__fadeIn">No hero with <b>{ q }</b></div>
                  : heroes.map(hero => (
                      <HeroCard key={ hero.id } { ...hero } />
                    ))
            }

          </div>
        
      </div>
    </>


  )
}
