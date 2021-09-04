import React, {useContext, useRef} from 'react'
import PokeGalery from '../components/poke/poke-galery'
import { PokesContext } from '../context/PokesContext'
import {useNear} from '../hooks/useNear'
import {usePaginator} from '../hooks/usePaginator'
import {Spinner} from '../components/Spinner'

const Home = () => {
    const refElement = useRef();
    const {pokes, busca} = useContext(PokesContext)   
    const {loadingpage} = usePaginator();
    useNear(refElement)
    
    return (
        <div className="min-h-screen max-h-auto">
            
          {
                loadingpage 
                ?   <Spinner/>

                :   <div className="min-h-screen max-h-auto"><PokeGalery poke={pokes} filterPoke={busca}/></div>
            }

            <span ref={refElement} className="bg-yellow-500"></span> 
             
        </div>
    )
}

export default React.memo(Home)
