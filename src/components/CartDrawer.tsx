
import { Drawer } from 'antd';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { removeFromCart, updateQuantity } from '../redux/features/cart/cartSlice';
import { useCreateOrderMutation } from '../redux/features/order/order.api';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { selectCurrentUser } from '../redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import BtnPrimary from './ui/button/BtnPrimary';
import { DeleteOutlined } from "@ant-design/icons";

type TCartProps = {
    onClose: () => void;
    open: boolean;
}

const CartDrawer = ({ onClose, open }: TCartProps) => {

    const dispatch = useAppDispatch();
    const cartData = useAppSelector((state) => state.cart);
    const user = useAppSelector(selectCurrentUser);
    const navigate = useNavigate();

    const [createOrder, { isLoading, isSuccess, data, isError, error }] = useCreateOrderMutation();

    const handlePlaceOrder = async () => {
        if (user) {
            await createOrder({ products: cartData.items })
        } else {
            navigate("/login")
        }
    };

    const toastId = "cart";

    useEffect(() => {
        if (isLoading) toast.loading("Processing...", { id: toastId });
        if (isSuccess) {
            toast.success("Order placed successfully", { id: toastId })
            if (data?.data) {
                window.location.href = data?.data;
            }
        }
        if (isError) toast.error(JSON.stringify(error), { id: toastId })
    }, [data?.data, data?.message, error, isError, isLoading, isSuccess])

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
                                <p className="text-sm font-semibold text-gray-800 !mt-5">
                                    ${(item.quantity * item.price).toFixed(2)}
                                </p>
                                <button className='!mt-5'
                                    onClick={() => dispatch(removeFromCart(item.product))}
                                >
                                    <DeleteOutlined style={{ fontSize: "24px", cursor: "pointer", color: "red" }} />
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                )}

                <div className="border-b my-3"></div>

                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-700">
                        Total Quantity:
                    </span>
                    <span className="text-lg font-bold">{cartData.totalQuantity}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-700">
                        Total Price:
                    </span>
                    <span className="text-lg font-bold">
                        ${cartData.totalPrice.toFixed(2)}
                    </span>
                </div>

                <div className='fixed bottom-10 right-5'>
                    <BtnPrimary onClick={handlePlaceOrder} btnText='Place Order' />
                </div>
            </Drawer>
        </>
    );
};

export default CartDrawer;