import React from 'react';
import { useState, useEffect } from 'react';
import Error from './Error';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/Registros.css';


const Registros = () => {
  const  {errorAdicionar, postData} = useContext(AppContext);

  const [idNave, setIdNave] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [error, serError] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    if([idNave, descripcion].includes('')){
      serError(true);
      return;
    }
    serError(false);

    const data = {
      'id':idNave,
      'descripcion':descripcion,
      'fechaRegistro': Date.now()
    }
    console.log("Desde Registros");
    postData(data);
    setIdNave('');
    setDescripcion('');
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);      
    }, 2500);
  }



  return (
    <div className='Registros'>
      <div className='registros-container'>
        <h2>Registros Aeronave</h2>
        {
          error&& <Error/>
        }
        {
          (enviado && !errorAdicionar)&& <p>Nuevo registro</p>
        }
        {
          errorAdicionar && <p>No se pudo agregar los datos...</p>
        }
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <label htmlFor='id' className='input'>ID:</label>
            <input 
              id='id'
              type="number" 
              placeholder="Id aeronave"
              className="input"
              value={idNave}
              onChange = {(e)=> setIdNave(e.target.value)}
            />
          </div>

          <div className='input-container'>
              <label htmlFor="descripcion" className='input'>
                Descripcion
              </label>
              <textarea 
                  id="descripcion"
                  placeholder="Describción"
                  value={descripcion}
                  onChange = {(e)=> setDescripcion(e.target.value)}
              />
          </div>

          <input type="submit" 
                className="submit"
                value="Guardar"
           />
        </form>

      </div>

    </div>
  )
}

export default Registros