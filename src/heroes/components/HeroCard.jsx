// import {} from '../../assets/heroes/ironman.jpg';

import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// creamos un componente para mostrar los personajes que no son el alter_ego
const CaracterByHero = ({ alter_ego, characters }) => {
    if (alter_ego === characters) return (<></>);
    return <p>{characters}</p>
};

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroesImages = `/assets/heroes/${id}.jpg`;
    // Hook para obtener la ruta actual de la aplicacion
    // y poder jugar si queremos que nuestra aplicacion
    // haga una cosa u otra en funcion de la ruta
    const location = useLocation();

    // const navigate = useNavigate();
    // const onNavigateBack = () => {
    //     navigate(`/`,{});
    // }


    return (

        <>
            <div className="card m-3 animate__animated animate__pulse" style={{ width: '18rem' }}>

                <div 
                    // NOTA INTERESANTE:
                    // Estamos aplicando diferentes animaciones en funcion de la ruta en la que esta nuestra aplicacion
                    className={ location.pathname === `/hero/${id}` ? 
                        'animate__animated animate__bounce' : 
                        'animate__animated animate__pulse' }>
                    <img
                        className="card-img-top"
                        src={heroesImages}
                        alt={`imagen de ${superhero}`}
                    />
                </div>

                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">{publisher}</p>
                    <p className="card-text">{alter_ego}</p>

                    {/* {
                        (alter_ego !== characters) && (<p className="card-text">{characters}</p>)
                    } */}

                    <CaracterByHero characters={characters} alter_ego={alter_ego} />

                    <p className="card-text">
                        <small>{first_appearance}</small>
                    </p>

                    {/* <Link to={`/hero/${id}`} className="btn btn-primary">Más Info</Link> */}

                    {/* NOTA INTERESANTE:
                     * Al utilizar la misma tarjeta para diferentes ventanas,
                        estoy colocando una condicion que en funcion de la ruta que
                        se encuentre, se muestra el boton de mas info o no. 
                    */}
                    
                    {
                        location.pathname === `/hero/${id}` ? (
                            <Link to={`/search?q=${superhero}`} className="btn btn-outline-success">Regresar</Link>
                            // Otra manera de redirigir a la pagina principal
                            // <button className="btn btn-outline-success" onClick={onNavigateBack}>Regresar</button>
                        ) :
                        (
                            <Link to={`/hero/${id}`} className="btn btn-primary">Más Info</Link>
                        )
                    }

                </div>

            </div>
        </>
    )
}
