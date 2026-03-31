import React from 'react';

const Cart = ({cartItems}) => {

    console.log(cartItems)
    return (
        <div>
           
           {
            cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border-b">
                    <img className="h-20 w-20 object-contain" src={item.image} alt={item.name} />
                    <div>
                        <h2 className="text-lg font-bold">{item.title}</h2>
                        <p className="text-gray-600">${item.price}/month</p>
                    </div>
                </div>
            ))
           }
    
            
        </div>
    );
};

export default Cart;