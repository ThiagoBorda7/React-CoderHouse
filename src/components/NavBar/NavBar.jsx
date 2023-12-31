import './NavBar.css';
import { BsSearch } from 'react-icons/bs';
import { CarWidget } from '../CarWidget/CarWidget';
import { NavLink, Outlet } from 'react-router-dom';

export const NavBar = () => {
    return (<>
        <header className='header_tienda'>
            <div className='container'>
                <div className='container_navbar'>
                    <div className='search_bar'>
                        
                    </div>
                    <div className='navbar'>
                        <div>
                            <NavLink to = {"/"}>
                                <img src={"https://flaviashoemaker.com/cdn/shop/files/home-logo-flavia-08.png"} alt="logo" style={{ width: '250px', height: '100px' }} />
                            </NavLink>
                        </div>
                        <nav>
                            <ul style={{ listStyleType: 'none' }}>
                                <li className='items'>
                                    <NavLink style={({isActive}) => ({textDecoration: isActive ? 'underline' : ''})} className='links' to = {"/"}>Home</NavLink>
                                </li>
                                <li className='items'>
                                    <NavLink style={({isActive}) => ({textDecoration: isActive ? 'underline' : ''})} className='links' to = {"/categoria/botines"}>Botines</NavLink>
                                </li>
                                <li className='items'>
                                    <NavLink style={({isActive}) => ({textDecoration: isActive ? 'underline' : ''})} className='links' to = {"/categoria/mocasines"}>Mocasines</NavLink>
                                </li>
                                <li className='items'>
                                    <NavLink style={({isActive}) => ({textDecoration: isActive ? 'underline' : ''})} className='links' to = {"/categoria/charol"}>Charol</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='cart_icon'>
                        <CarWidget />
                    </div>
                </div>
            </div>
        </header>
        <Outlet />
        </>
    )
}