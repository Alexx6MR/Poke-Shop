import {useContext} from 'react'
import { PokesContext } from '../context/PokesContext'

export const useFilter = () =>{
    const {pokes, setPokemons} = useContext(PokesContext)
    
    const PokeFilter = (evt)=>{
        evt.preventDefault();
        const filteredName = evt.target.value;
        const filtedPokes = pokes.filter((item) => {
            if(filteredName == ''){
                return item
            }else if(item.name.includes(filteredName.toLowerCase())){
                return item
            }
        })
        
        setPokemons(filtedPokes)
    }


    return {PokeFilter}
}