import React from 'react'
import {UserProvider} from './UserContext'
import {PokesProvider} from './PokesContext'


export function GlobalProvider({children}) {

  return (
    <div className="bg-gradient-to-r from-indigo-400 to-green-500 min-h-screen max-h-auto">
       
      <UserProvider>
        
        <PokesProvider>

        
            {children}
         

        </PokesProvider>
              
      </UserProvider>
       
    </div>
  )
}

