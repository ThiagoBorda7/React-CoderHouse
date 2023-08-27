import { NavLink } from "react-router-dom";
import "./Gallery.css";

export const Gallery = () => {

    return (
        <div className='grid image_grid'>

            <div className='grid_block'>
                <div className='tile'>
                    <NavLink to={'/categoria/mocasines'} className='tile_link'>
                        <img className='tile_img tile_img1' src="https://flaviashoemaker.com/cdn/shop/products/IMG-20221009-WA0041.jpg" alt="mocasines" />
                    </NavLink>
                </div>
            </div>

            <div className='grid_block'>
                <div className='tile'>
                    <NavLink to={'/categoria/mocasines'} className='tile_link'>
                        <img className='tile_img tile_img2' src="https://flaviashoemaker.com/cdn/shop/products/IMG-20220622-WA0003.jpg" alt="mocasines" />
                    </NavLink>
                </div>
            </div>

            <div className='grid_block'>
                <div className='tile'>
                    <NavLink to={'/categoria/mocasines'} className='tile_link'>
                        <img className='tile_img tile_img3' src="https://flaviashoemaker.com/cdn/shop/products/IMG-20220730-WA0023.jpg" alt="mocasines" />
                    </NavLink>
                </div>
            </div>

            <div className='grid_block'>
                <div className='tile'>
                    <NavLink to={'/categoria/mocasines'} className='tile_link'>
                        <img className='tile_img tile_img4' src="https://flaviashoemaker.com/cdn/shop/products/IMG-20220423-WA0012.jpg" alt="mocasines" />
                    </NavLink>
                </div>
            </div>

            <div className='grid_block'>
                <div className='tile'>
                    <NavLink to={'/categoria/mocasines'} className='tile_link'>
                        <img className='tile_img tile_img5' src="https://flaviashoemaker.com/cdn/shop/products/IMG-20220709-WA0003.jpg" alt="mocasines" />
                    </NavLink>
                </div>
            </div>

            <div className='grid_block grid_content'>
                <div className='tile'>
                    <NavLink to={'/categoria/mocasines'} className='tile_link'>
                        <h2 className='grid_title'>Mocasines</h2>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}