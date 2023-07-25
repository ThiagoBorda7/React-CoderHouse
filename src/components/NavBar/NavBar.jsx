import { BsSearch } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';

export const NavBar = () => {
    return (
        <header style={{ backgroundColor: '#d1ac9f', height: '200px' }}>
            <div className='container'>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <div style={{ margin: '20px 30px', cursor: 'pointer' }}>
                        <BsSearch style={{ color: 'white', fontSize: '1.5rem' }}/>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
                    <div style={{ margin: '20px 30px', cursor: 'pointer' }}>
                        <FiShoppingBag style={{ color: 'white', fontSize: '1.5rem' }} />
                    </div>
                </div>
            </div>
        </header>
    )
}