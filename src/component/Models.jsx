import { use } from "react";

const Models = ({ modelPromise }) => {
    const models = use(modelPromise);
    console.log(models);

    return (
        <div className="py-20 max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-5xl font-bold">Choose Your AI Models</h2>
                <p>One subscription gives you access to all frontier AI models</p>
            </div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3
             gap-5">
                {
                    models.map(model =>
                        <div className=" shadow-lg rounded-lg border overflow-hidden border-zine-300">

                            <div className="flex justify-center  items-center h-56 bg-zinc-200">
                                <img className="h-40 w-40 object-contain" src={model.image} alt={model.name} />
                            </div>

                            <div className="p-4 space-y-3">
                                <h2 className="text-xl font-bold">{model.title}</h2>
                                <p>{model.description}</p>
                                <div className="text-2xl font-bold">${model.price}/month</div>
                                <button className="btn w-full bg-red-500 text-white rounded-lg mt-5">Subscribe</button>


                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Models;
