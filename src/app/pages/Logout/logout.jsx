import {React} from "react";
import { useNavigate} from "react-router-dom";


export default function Login(){

  const navigate = useNavigate()

  const cerrarSesion = () =>
  {
      localStorage.clear();
      navigate('/home')
  }


  return (
      cerrarSesion
  )
}

