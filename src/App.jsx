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
  return (
    <>
      <NavBar />
      <Banner />
      
      {/* name of each tab group should be unique */}

      <div className="tabs tabs-box justify-center bg-transparent">
        <input type="radio" name="my_tabs_1" className="tab w-30 rounded-full" aria-label="Models" defaultChecked />
        <input type="radio" name="my_tabs_1" className="tab w-30 rounded-full" aria-label="Cart"/>
      
      </div>


      <Models modelPromise={modelPromise} />
      <Cart></Cart>
      <Footer />
    </>
  );
}

export default App;
