import { useEffect, useRef } from 'react'

const usePrevLocation = (location) => {

    const prevLocRef = useRef(location)
    
    useEffect(()=>{
    
    prevLocRef.current = location
    
    },[location])
    
    return prevLocRef.current


    //THIS IS HOW YOU USE IT

        // const MyComponent = () => {

        //     const location = useLocation();
        //     const prevLocation = usePrevLocation(location)
            
        //     return <><h2>PREV:{prevLocation}</h2><h2>LOC:{location}</h2></>
        //     }
}

export default usePrevLocation