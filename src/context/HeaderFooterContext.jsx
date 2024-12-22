import { React, createContext, useState } from "react";
import { Footer, Header } from '../Components'

export const HeaderFooterContext= createContext()

const HeaderFooterProvider=({children})=>{
    const [searchProduct, setSearchProduct] = useState('');

    return(
        <HeaderFooterContext.Provider value={{setSearchProduct, searchProduct}}>
            <Header/>
            {children}
            <Footer/>
        </HeaderFooterContext.Provider>
    )
}

export default HeaderFooterProvider