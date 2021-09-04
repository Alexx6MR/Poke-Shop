import {useContext, useState, useEffect} from 'react'
import getPokes from '../services/getPokes'
import { PokesContext } from '../context/PokesContext'


const initPage = 1

export const usePaginator = ()=>{
    const [newpages, setPages] = useState(initPage)
    const [loadingpage, setloadingpage] = useState(false)

    const pokeContext = useContext(PokesContext)

    useEffect(() => {
        if(newpages === initPage) return
        setloadingpage(true)
        getPokes(newpages).then(res => Promise.all(res).then(res =>{
            setloadingpage(false)
            pokeContext?.setpokes(prevPokes => prevPokes.concat(res))
        }))
        
    }, [newpages])


    return {loadingpage, setPages}

}