import "./Banner.css";
import { NavLink } from 'react-router-dom';

export const Banner = () => {
    return (
        <div className='container_banner'>
            <h2>¡Es temporada de Botines!</h2>
            <div className='container_button_banner'>
                <NavLink to={"/categoria/botines"}>
                    <button className='boton_banner'>Ver todo</button>
                </NavLink>
            </div>
        </div>
    )
}