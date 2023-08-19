import { useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsCircle } from 'react-icons/bs';
import "./Carrousel.css";

export const Carrousel = () => {

    const IMAGES = ["https://flaviashoemaker.com/cdn/shop/products/IMG-20220820-WA0011.jpg", "https://flaviashoemaker.com/cdn/shop/products/IMG-20220720-WA0042.jpg", "https://flaviashoemaker.com/cdn/shop/products/IMG-20220709-WA0003.jpg", "https://flaviashoemaker.com/cdn/shop/products/IMG-20220928-WA0020.jpg"];
    const [selectedIndex, setSelectedIndex] = useState(0);
    //Selecciono una imagen para iniciar el slider
    const [selectecImage, setSelectedImage] = useState(IMAGES[0]);

    //Metodos para navegar entre las imagenes

    //ATRAS

    const previous = () => {
        const condition = selectedIndex > 0;
        const nextIndex = condition ? selectedIndex - 1 : IMAGES.length - 1

        //Actualizo los selectores

        setSelectedImage(IMAGES[nextIndex]);
        setSelectedIndex(nextIndex);

    }

    //ADELANTE

    const next = () => {
        const condition = selectedIndex < IMAGES.length - 1;
        const nextIndex = condition ? selectedIndex + 1 : 0;

        //Actualizo los selectores

        setSelectedImage(IMAGES[nextIndex]);
        setSelectedIndex(nextIndex);

    }

    const slide = (slideIndex) => {
        setSelectedImage(IMAGES[slideIndex]);
        setSelectedIndex(slideIndex);
    }


    return (
        <div className='container_carrousel'>
            <div className='container_carrousel_img'>
                <img className='carrousel_img' src={selectecImage} />
            </div>
            <div className='container_arrows'>
                <IoIosArrowBack className='left_arrow' onClick={previous} />
                <IoIosArrowForward className='right_arrow' onClick={next} />
            </div>
            <div className='container_circles'>
            
                {
                    IMAGES.map((_, index) => (
                        <div key={index} className={`circles ${index === selectedIndex ? "active" : ""}`} onClick={() => slide(index)}>
                            <BsCircle />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}