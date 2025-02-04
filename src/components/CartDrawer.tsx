
import { Button, Drawer } from 'antd';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { removeFromCart, updateQuantity } from '../redux/features/cart/cartSlice';

type TCartProps = {
    onClose: () => void;
    open: boolean;
}

const CartDrawer = ({ onClose, open }: TCartProps) => {

    const dispatch = useAppDispatch();
    const cartData = useAppSelector((state) => state.cart);

    const handlePlaceOrder = () => {
        console.log(cartData.items);
    };

    return (
        <>
            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                {cartData.items.length > 0 ? (
                    <ul className="space-y-4">
                        {cartData.items.map((item) => (
                            <li key={item.product} className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-16 w-16 rounded object-cover"
                                />
                                <div className="flex-1">
                                    <h4 className="text-sm font-medium">{item.name}</h4>
                                    <div className="flex items-center gap-2 mt-1">
                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    updateQuantity({
                                                        id: item.product,
                                                        quantity: Math.max(item.quantity - 1, 1),
                                                    })
                                                )
                                            }
                                            className="w-6 h-6 bg-gray-200 text-black rounded hover:bg-gray-300"
                                        >
                                            -
                                        </button>
                                        <span className="text-sm font-medium">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    updateQuantity({
                                                        id: item.product,
                                                        quantity: Math.min(item.quantity + 1, item.stock),
                                                    })
                                                )
                                            }
                                            className="w-6 h-6 bg-gray-200 text-black rounded hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <p className="text-sm font-semibold text-gray-800">
                                    ${(item.quantity * item.price).toFixed(2)}
                                </p>
                                <button
                                    onClick={() => dispatch(removeFromCart(item.product))}
                                    className="text-red-600 text-sm hover:underline"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                )}



                <Button className="w-full" onClick={handlePlaceOrder}>
                    Place Order
                </Button>
            </Drawer>
        </>
    );
};

export default CartDrawer;