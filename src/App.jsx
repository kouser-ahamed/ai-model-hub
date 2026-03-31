import { useState } from "react";
import "./App.css";
import Banner from "./component/Banner";
import Cart from "./component/Cart";
import Footer from "./component/Footer";
import Models from "./component/Models";
import NavBar from "./component/NavBar";

const getModels = async () => {
  const res = await fetch("/public/models.json")
  return res.json()
}

const modelPromise = getModels()

function App() {

  const [activeTab, setActiveTab] = useState("model")
  const [carts, setCarts] = useState([])

  return (
    <>
      <NavBar />
      <Banner />
      
      {/* name of each tab group should be unique */}

      <div className="tabs tabs-box justify-center bg-transparent">
        <input type="radio" name="my_tabs_1" className="tab w-30 rounded-full" aria-label="Models" defaultChecked onClick={()=> setActiveTab("model")} />
        <input type="radio" name="my_tabs_1" className="tab w-30 rounded-full" aria-label={`Cart (${carts.length})`} onClick={()=> setActiveTab("cart")}/>
      </div>

      {activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}

      <Footer />
    </>
  );
}

export default App;
