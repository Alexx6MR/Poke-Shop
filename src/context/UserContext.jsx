import React, {createContext, useState} from 'react'

const favoritePoke = createContext();

const inituser = {name: 'alexei', mypoke:[]}

const UserProvider = ({children}) =>{
    const [user, setuser] = useState(inituser)

    const addFavorite = (pokeId) =>{
        const isFavorite = user.mypoke.includes(pokeId)
        const favoritePoke = isFavorite 
        ? user.mypoke.filter(item => item !== pokeId)
        : [...user.mypoke, pokeId]

        setuser({
            ...user,
            mypoke : favoritePoke
        
        })
    }

    const data = {user, addFavorite};
    return (
        <favoritePoke.Provider value={data}>
            {children}
        </favoritePoke.Provider>
    )
}


export { UserProvider }
export default favoritePoke
