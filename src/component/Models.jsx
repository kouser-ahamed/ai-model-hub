import { use, } from "react";
import ModeslCard from "./ModeslCard";

const Models = ({ modelPromise }) => {
    const models = use(modelPromise);



    return (
        <div className="py-20 max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-5xl font-bold">Choose Your AI Models</h2>
                <p>One subscription gives you access to all frontier AI models</p>
            </div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3
             gap-5">

                {
                    models.map((model) => (
                        <ModeslCard key ={model.id}
                        model={model}>

                        </ModeslCard>

                    )
                    )
                }
            </div>
        </div>
    );
};

export default Models;
