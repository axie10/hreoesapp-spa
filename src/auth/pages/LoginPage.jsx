import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {

  const { onLogin } = useContext( AuthContext )
  const navigate = useNavigate();

  // Recuperamos la ultima ruta donde estaba el usuario antes de cerrar sesion
  // del local storage y la guardamos en una constante para pasarla a la funcion navigate
  const lastPath = localStorage.getItem('lastPath') || '/';

  const onBack = () => {

    onLogin('Pepe');

    //pasamos aqui la variable de la ruta guardada en el local storage
    navigate( lastPath, {
      replace: true,  
    });
  }

  return (
    <>
        <div className="container mt-5">
          <h1>Login</h1>
          <hr />

          <button 
            className="btn btn-primary"
            onClick={onBack}>
              Login
          </button>

        </div>
    </>
  )
}
