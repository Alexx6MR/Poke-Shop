import { useEffect} from 'react'
import {usePaginator} from './usePaginator'

export const useNear = (lazyelement) => {
  const {setPages} = usePaginator();

  useEffect(()=>{
    const onchange = (entries, observer) =>{
        const el = entries[0]
        if(el.isIntersecting){
           setPages(prevPages => prevPages + 1)
           console.log('esta en la vista')
            // observer.disconnect()
        }
    }

    const observer = new IntersectionObserver(onchange, {
      rootMargin: '100px'
    })
    observer.observe(lazyelement?.current)
  }, [])


}