import "./App.scss";
import Admin from "./pages/Admin";
import SingIn from "./pages/Admin/SingIn"
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  
  return (
   
      <div className="app">

        <h1>Aqui desde el app</h1>
        <Admin />
        <SingIn />
        <Home />
        <Contact />
      </div>
  );
}

export default App;
