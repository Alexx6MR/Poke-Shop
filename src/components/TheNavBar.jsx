import React, {useContext, useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import favoritePoke from '../context/UserContext'
import PokeSearch from './search'
import  ActiveLink  from './ActiveLink'
import {PokesContext} from '../context/PokesContext'


function TheNavBar() {
  const [totalpokes, settotalpokes] = useState(0)
  const {user} = useContext(favoritePoke)
  const {filtrarPokes} = useContext(PokesContext); 

  useEffect(()=>{
    settotalpokes(user?.mypoke?.length)
  }, [user])

  
  return (
    <Disclosure as="header" className="bg-gray-800 w-full sticky top-0 z-50">
      {({ open }) => (
        <>
            {/* //* DESKTOP NAV */}
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">

            <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
              <ActiveLink href="/">Home</ActiveLink>
              <ActiveLink href="/mypoke">
                Mypokes
                { totalpokes == 0 ? '' :
                    <div className="h-full w-4 flex items-start justify-start">
                    
                     <div className="bg-indigo-500 h-4 w-3 rounded-full flex justify-center items-center px-2 py-1">
                      <span className="text-xs rounded-full">
                        {totalpokes}
                      </span>
                    </div> 
                    </div>
                  }
              </ActiveLink>
            </nav>

            <div className="relative h-16 flex justify-end lg:hidden">
              <div className="relative z-10 flex items-center ">
                {/* //* Mobile menu button */}
                <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <div className="hidden lg:block">
                <PokeSearch event={filtrarPokes}/>
            </div>
          </div>

            {/* //* mobile NAV */}
          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">

            <div className="pt-2 pb-3 px-2 space-y-1">
              <ActiveLink href="/">
              <Disclosure.Button>
                Home
              </Disclosure.Button>
              </ActiveLink>  
              <ActiveLink href="/mypoke" >
              <Disclosure.Button>
                Mypokes
                { totalpokes == 0 ? '' :
                    <div className="h-full w-4 flex items-start justify-start">
                    
                     <div className="bg-indigo-500 h-4 w-3 rounded-full flex justify-center items-center px-2 py-1">
                      <span className="text-xs rounded-full">
                        {totalpokes}
                      </span>
                    </div> 
                    </div>
                  }
                  </Disclosure.Button>
              </ActiveLink>
            </div>
           
            <div>
              <PokeSearch event={filtrarPokes}/>
            </div>
           
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


export default React.memo(TheNavBar)