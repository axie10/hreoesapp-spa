// import {} from '../../assets/heroes/ironman.jpg';

import { Link } from "react-router-dom";

// creamos un componente para mostrar los personajes que no son el alter_ego
const CaracterByHero = ({alter_ego, characters}) => {
    if(alter_ego === characters) return (<></>);
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


    return (

        <>
            <div className="card m-3" style={{ width: '18rem' }}>

                <div>
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
                    <Link to={`/hero/${ id }`} className="btn btn-primary">Más Info</Link>
                </div>
                
            </div>
        </>
    )
}
