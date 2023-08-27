import { FiShoppingBag } from 'react-icons/fi';
import { useCartContext } from '../../state/Cart.context';
import { useNavigate } from 'react-router-dom';


export const CarWidget = () => {

    const { getCartCant } = useCartContext();
    const navigate = useNavigate();

    return (
        <div style={{color: 'white'}} onClick={() => navigate('/cart')}>
            <FiShoppingBag style={{ color: 'white', fontSize: '1.5rem' }} /> {getCartCant ? <span>({getCartCant})</span> : null}
        </div>
)};
