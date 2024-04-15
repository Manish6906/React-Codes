import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import Picture from './Components/Picture';

// react rounter from react

// import {
//   BrowserRouter as Router,
//   Route,
//   // BrowserRouter,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#404040";
      showAlert("Dark mode has been Enabled", "sucess");
      document.title = "rbu hy";

      //   setInterval(()=>
      // {
      //   document.title="bye"
      // },2000)
      // setInterval(()=>
      // {
      //   document.title="hy"
      // },1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "sucess");
      document.title = "rbu bye";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title="RBU" About="About" Hometitle="" toggle={toggle} mode={mode}/>
        <Alert alert={alert}/>
       
        
        <div className="container my-5">
      
        {/* <Routes> */}
          {/* <Route  exact path="/about" element={<About />} /> */}

          {/* <Route exact path="/" element={<TextForm heading="Enter the text" address="Address here" showAlert={showAlert} mode={mode}/>}/> */}
         
        {/* </Routes> */}
        <TextForm heading="Enter the text" address="Address here"  showAlert={showAlert} mode={mode}/>
        </div>
       
      {/* </Router> */}
    </>
  );
}

export default App;
