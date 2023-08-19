import { FiShoppingBag } from 'react-icons/fi';
import { useCartContext } from '../../state/Cart.context';

export const CarWidget = () => {

    const { getCartCant } = useCartContext();

    return (
        <div style={{color: 'white'}}>
            <FiShoppingBag style={{ color: 'white', fontSize: '1.5rem' }} /> ({getCartCant()})
        </div>
)};
