import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

const url_api = 'http://dev.inaltec.com.co:60000/Aeronaves/Lista';
const useApi = () => {
  const [aeronaves, setAeronaves] = useState([]);
  const [errorAdicionar, setErrorAdicionar] = useState(false);
  
  useEffect(() => {
    const getApi = async () => {
      const response = await axios(`${url_api}`);
      const data = response.data;
      setAeronaves(data);
    };
    getApi();    
  }, []);

  const postData = (datos)=>{
    const postApi = async ()=>{
      try{
        await axios
        .post('http://dev.inaltec.com.co:60000/Aeronaves/Adicionar',{
          headers:{
            'Content-Type': 'application/json',
            'accept': 'text/plain'             
          },
          'data':datos
        }) 
        
        setErrorAdicionar(false);
        
      }catch(error){
        console.log(error)
        setErrorAdicionar(true);
      }
            
    }
    

    postApi();
  }

  const deleteData = (data)=>{
    const postDeleteApi = async ()=>{
      try{
        await axios
        .post('http://dev.inaltec.com.co:60000/Aeronaves/Retirar',{
          headers:{
            'Content-Type': 'application/json',
            'accept': 'text/plain'             
          },
          'data':data
        })     
      }catch(error){
        console.log('ERROR = '+error)
      }         
    }
    postDeleteApi();
  }

  return{ 
    aeronaves, 
    postData,
    errorAdicionar,
    deleteData
  }
}

export default useApi