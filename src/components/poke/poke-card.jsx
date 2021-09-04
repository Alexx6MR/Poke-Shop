import React, { useContext} from "react"
import favoritePoke from '../../context/UserContext'
import { pokeTypes } from "../../helpers/pokeTypes"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

  function PokeCard({pokemon, inpokes = false}) {
    const {user, addFavorite} = useContext(favoritePoke)
    const isFavorite = user?.mypoke?.includes(pokemon)
    
    return (
      <div>
        <div className="relative">
          {/* //* POKE IMAGE & NAME/TYPE */}
          <div className=" relative group">
            <div className="relative w-full h-72 rounded-lg overflow-hidden lg:group-hover:overflow-visible flex justify-center items-center shadow-2xl">
              <img src={pokemon?.pokeimage} alt={pokemon?.name} loading='lazy' className="pokeimg lg:group-hover:scale-125 lg:group-hover:relative lg:group-hover:z-10"/>
            </div>
            <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-between overflow-hidden">
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent"/>
            
              <div className="relative text-white text-sm space-x-1">
                {
                  pokemon?.poketypes?.map( (i,index) => 
                    <span key={index} className={classNames(pokeTypes[i], 'px-1 rounded')}>{i}</span>
                    )
                }  
              </div>
              <p className="relative text-lg font-semibold text-white ">{pokemon?.name}</p>
            </div>
          </div>
         
          <div>
            <div className="w-full flex items-center text-lg justify-center">
              {pokemon?.pokeStats?.hp}/{pokemon?.pokeStats?.hp}
            </div>
            <div className="relative flex justify-center items-center ">
              <div className="grid grid-cols-2 gap-x-6">
                <h3 className="text-sm font-medium text-gray-900">Atk: {pokemon?.pokeStats?.atk}</h3>
                <p className="text-sm font-medium text-gray-900"> Def: {pokemon?.pokeStats?.def}</p>
                <h3 className="text-sm font-medium text-gray-900">Spa Atk: {pokemon?.pokeStats?.sp_atk}</h3>
                <p className="text-sm font-medium text-gray-900"> Spa Def: {pokemon?.pokeStats?.sp_def}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">    
          <button onClick={()=>addFavorite(pokemon)}  type="button"
            className={classNames( inpokes ? 'bg-red-500 text-white hover:bg-red-700' 
              : isFavorite ? 'bg-indigo-600 text-white lg:hover:bg-indigo-900 lg:hover:text-white' 
              : 'bg-indigo-300 lg:hover:bg-indigo-600 lg:hover:text-white',
              "w-full justify-center flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md")}>
                { inpokes ? 'delete': isFavorite ? 'in favorite' : 'add to favorite'}
          </button> 
        </div>
      </div>

        
    )
  }
  
  export default React.memo(PokeCard, (prevProps, nextProps)=> prevProps.id === nextProps.id);