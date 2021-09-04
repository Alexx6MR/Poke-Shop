import React from "react"
import PokeCard from './poke-card'

function PokeGalery({poke, inMyPokes, filterPoke}) {


  return (
      <>
        <div className="max-w-2xl mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">            
            {

              poke.filter((item) => {
                if(filterPoke == ' '){
                  return item
                }else if(item.name.includes(filterPoke?.toLowerCase())){
                  return item
                }
                }).map( (poke,index) => <PokeCard pokemon={poke} inpokes={inMyPokes} key={poke.id}/> )

                  
              

            }
          </div>
        </div>
      </>
  )
}
  
export default React.memo(PokeGalery);