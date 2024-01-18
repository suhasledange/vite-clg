import { useState } from "react"
import IsHomeContext from ".";

const HomeContextProvider = ({children})=>{
    const [isHome,setIsHome] = useState(true);

    return(
        <IsHomeContext.Provider value={{isHome,setIsHome}}>
            {children}
        </IsHomeContext.Provider>
    )
}
export default HomeContextProvider

