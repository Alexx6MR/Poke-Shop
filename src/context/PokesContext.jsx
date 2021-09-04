import React, {createContext, useState, useEffect, useCallback} from 'react'
import getPokes from '../services/getPokes'

const PokesContext = createContext();


const PokesProvider = ({children}) =>{
    const [pokes, setpokes] = useState([])
    const [busca, setbusca] = useState('')


    useEffect(()=> {
        getPokes().then(res => Promise.all(res).then(res =>{
            setpokes(res)
        }))
        
    },[])

    
    const filtrarPokes = useCallback((evt) =>{
        evt.preventDefault();
        setbusca(evt.target.value)
    })
  

    const provider = { setpokes, pokes, busca, filtrarPokes }
    
    return (
        <PokesContext.Provider value={provider}>
            {children}
        </PokesContext.Provider>
    )
}


export { PokesProvider, PokesContext }
