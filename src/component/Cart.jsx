import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {

    const totalPrice = carts.reduce((total, item) => total + item.price, 0);

    const handleRemove = (id) => {
        setCarts(carts.filter(item => item.id !== id));
        toast.success("Item removed from cart!")
    };

    const handleCheckout = () => {
        setCarts([]);
        toast.success("Checkout successful!")
    };

    return (
        <div className='p-10 max-w-7xl mx-auto space-y-5'>

            <h1 className='text-2xl font-bold mb-5'>Your Cart</h1>

            {
                carts.length === 0 ? (
                    <p className='text-gray-500 text-2xl text-center p-5'>Your cart is empty</p>
                ) : (
                    <>
                        {
                            carts.map(item => (
                                <div
                                    key={item.id}
                                    className='flex items-center justify-between border p-5 rounded-lg border-zinc-300'
                                >

                                    <div className='flex gap-4 items-start'>
                                        <img
                                            className="h-20 w-20 object-contain"
                                            src={item.image}
                                            alt={item.title}
                                        />

                                        <div>
                                            <h2 className='text-lg font-bold'>
                                                {item.title}
                                            </h2>

                                            <p className='text-gray-600 text-sm mt-1 max-w-md'>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-6'>
                                        <p className='text-xl font-bold'>
                                            ${item.price}/month
                                        </p>

                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className='px-4 py-1 bg-red-500 text-white rounded-lg'
                                        >
                                            Remove
                                        </button>
                                    </div>

                                </div>
                            ))
                        }

                        <div className='flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-2xl'>
                            <div>Total</div>
                            <div>${totalPrice}</div>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="btn w-full mt-4 rounded-lg text-2xl font-bold p-6 bg-red-500 text-white"
                        >
                            Proceed to Checkout
                        </button>
                    </>
                )
            }

        </div>
    );
};

export default Cart;