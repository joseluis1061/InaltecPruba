import React from 'react';
import '../styles/Listas.css';
import ListaInfo from './ListaInfo';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Listas = () => {
  const {aeronaves} = useContext(AppContext);

  return (
    <main className='Listas'>
      <div className='lista-container'>
        <div className='lista-header'>
          <p>Lista Aeronaves</p>
          <span>+</span>
        </div>
        <div className='lista-description'>
          <p>Id</p>
          <p>Descripción</p>
          <p>Fecha Registro</p>              
        </div>
        {
          aeronaves.map(aeronave =>{
            return <ListaInfo key= {aeronave.id}
              aeronaves = {aeronave}
            />
          })
        }
      </div>    
    </main>
  )
}

export default Listas