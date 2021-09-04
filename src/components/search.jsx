import React from 'react'
import {SearchIcon} from '@heroicons/react/solid'

 function Search({event}) {  
   
    return (
        <form onSubmit={event}>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
                <div className="relative h-16 flex justify-between">
                    <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                        <div className="w-full sm:max-w-xs">
                            <label htmlFor="search" className="sr-only">
                                Search
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input onChange={event}
                                id="search"
                                name="search"
                                className="block w-full bg-gray-700 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
                                placeholder="Search"
                                type="search"
                                />
                            </div>
                        </div>
                    </div>             
                </div>
            </div>
        </form>
    )
  }
  


  export default React.memo(Search)
  