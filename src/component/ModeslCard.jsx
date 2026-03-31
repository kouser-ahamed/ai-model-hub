import React, { useState } from 'react';

const ModeslCard = ({ model,carts, setCarts }) => {

    const [isSubscribed, setIsSubscribed] = useState(false)
    const handelSubsCription = () => {
        setIsSubscribed(true)
        setCarts([...carts, model])
    }
    return (

        <div className=" shadow-lg rounded-lg border overflow-hidden border-zine-300">

            <div className="flex justify-center  items-center h-56 bg-zinc-200">
                <img className="h-40 w-40 object-contain" src={model.image} alt={model.name} />
            </div>

            <div className="p-4 space-y-3">
                <h2 className="text-xl font-bold">{model.title}</h2>
                <p>{model.description}</p>
                <div className="text-2xl font-bold">${model.price}/month</div>
                <button onClick={handelSubsCription} className="btn w-full bg-red-500 text-white rounded-lg mt-5">{isSubscribed ? "Subscribed" : "Subscribe Now"}</button>


            </div>

        </div>
    );
};

export default ModeslCard;