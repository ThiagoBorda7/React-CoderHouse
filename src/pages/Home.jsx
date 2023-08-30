import { useState, useEffect } from "react"
import { getZapatos } from "../lib/zapatos.requests";
import { Carrousel } from "../components/Carrousel/Carrousel";
import { Announce } from "../components/Announce/Announce";
import { MainContent } from "../components/MainContent/MainContent";
import { Banner } from "../components/Banner/Banner";
import { Gallery } from "../components/Gallery/Gallery";
import { Loader } from "../components/Loader/Loader";


export const Home = () => {

    const [products, setProducts] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);

    useEffect(()=>{

        getZapatos()
            .then(res => {
                setIsLoading(false)
                setProducts(res)})
    },[]);

    

    return (

    <div>
        <div>
            {IsLoading ? (
                <div style={{textAlign: 'center'}}><Loader /></div>
            ) : (
            <>    
            <Carrousel />
            <Announce />
            <MainContent />
            <Banner />
            <Gallery />
            </>
            )}
        </div>
    </div>

    );
}