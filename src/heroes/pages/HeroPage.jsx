import { Navigate, useParams } from "react-router";
import { HeroCard } from "../components/HeroCard";
import { getHeroesById } from "../helpers/getHeroById";

export const HeroPage = () => {

  const params = useParams();
  const heroId = params.id;

  const hero = getHeroesById(heroId);
  // console.log(hero);

  if (!hero) {
    return <Navigate to="/marvel"/>;
  }

  return (

    <>
      <h1>Hero Page</h1>
      <p>{hero.alter_ego}</p>
      <hr />

      <div className="d-flex justify-content-center">
        <HeroCard
          key={hero.id}
          {...hero}
        />
      </div>
    </>
    
  )
}
