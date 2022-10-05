import React from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const ListaInfo = ({aeronaves}) => {

  const {deleteData} = useContext(AppContext);

  const {id, descripcion, fechaRegistro} = aeronaves; 
  
  const handleClick = ()=> {
    const data = {
      'id':id,
      'descripcion':descripcion,
      'fechaRegistro': fechaRegistro
    }
    deleteData(data);
  }

  return (
  <div className='lista-info'>
    <span className='eliminar' onClick={()=>handleClick()}>-</span>  
    <p>{id}</p>  
    <p>{descripcion}</p>
    <p>{fechaRegistro}</p>
  </div>    
  )
}

export default ListaInfo