import "./App.css";
import Banner from "./component/Banner";
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
      <Models modelPromise={modelPromise} />
      <Footer />
    </>
  );
}

export default App;
