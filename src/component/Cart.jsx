import React from 'react';

const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((total, item) => total + item.price, 0);
    const handleRemove = (id)=> {
        const updatedCart =carts.filter(item=> item.id !==id)
        setCarts(updatedCart)
    }

    return (
        <div className='p-10 max-w-7xl mx-auto space-y-5'>
            <h1 className='text-2xl font-bold mb-5'>Your Cart</h1>
            {
                carts.map(item => 
                    <div key={item.id} className='flex items-center justify-between border p-5 rounded-lg border-zinc-300'>
                        
                        <div className='flex gap-4 items-start'>
                            <img className="h-20 w-20 object-contain" src={item.image} alt={item.name} />
                            <div>
                                <h2 className='text-lg font-bold'>{item.title}</h2>
                                <p className='text-gray-600 text-sm mt-1'>{item.description}</p>
                            </div>
                        </div>

                        <div className='flex flex-row items-end gap-10'>
                            <p className='text-xl font-bold'>${item.price}/month</p>
                            <button 
                    
                                className='px-4 py-1 bg-red-500 text-white rounded-lg'
                                onClick={()=> handleRemove(item.id)}
                            >
                                Remove
                            </button>
                        </div>

                    </div>
                )
            }

            <div className='flex justify-between bg-black text-white p-5  mt-5 rounded-lg text-2xl'>
                <div>Total</div>
                <div>${totalPrice}</div>
                

            </div>
        </div>
    );
};

export default Cart;