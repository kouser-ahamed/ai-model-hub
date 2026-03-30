import { use } from "react";

const Models = ({ modelPromise }) => {
    const models = use(modelPromise)
    console.log(models) 


    return (
        <div>
            
        </div>
    );
};

export default Models;