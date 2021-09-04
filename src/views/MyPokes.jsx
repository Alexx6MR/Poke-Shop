import React, {useContext} from 'react'
import favoritePoke from '../context/UserContext'
import PokeGalery from '../components/poke/poke-galery'
import { PokesContext } from '../context/PokesContext'

const MyPokes = () => {
    const {user} = useContext(favoritePoke)
    const {busca} = useContext(PokesContext)   
    const MyPokes  = user?.mypoke

    return (
            <div className="min-h-screen max-h-auto">
               
               {
                   MyPokes.length > 0 
                   ? <PokeGalery poke={MyPokes} inMyPokes={true} filterPoke={busca}/>
                   : 
                   <div className="max-w-2xl h-screen mx-auto py-16 px-4 sm:py-24 sm:px-6 flex justify-center items-center">
                   <div className="text-5xl sm:text-5xl animate-pulse">            
                         ...NO FAVORITE POKE SELECTED
                   </div>
                 </div>
               }
               

            </div>
    )
}


export default MyPokes
