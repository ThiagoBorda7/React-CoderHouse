import './NavBar.css';
import { BsSearch } from 'react-icons/bs';
import { CarWidget } from '../CarWidget/CarWidget';

export const NavBar = () => {
    return (
        <header className='header_tienda'>
            <div className='container'>
                <div className='container_navbar'>
                    <div className='search_bar'>
                        <BsSearch style={{ color: 'white', fontSize: '1.5rem' }}/>
                    </div>
                    <div className='navbar'>
                        <div>
                            <img src={"https://flaviashoemaker.com/cdn/shop/files/home-logo-flavia-08.png"} alt="logo" style={{ width: '250px', height: '100px' }} />
                        </div>
                        <nav>
                            <ul style={{ listStyleType: 'none' }}>
                                <li className='items'>Home</li>
                                <li className='items'>Botines</li>
                                <li className='items'>Mocasines</li>
                                <li className='items'>Animal Print</li>
                                <li className='items'>Charol</li>
                            </ul>
                        </nav>
                    </div>
                    <div className='cart_icon'>
                        <CarWidget />
                    </div>
                </div>
            </div>
        </header>
    )
}