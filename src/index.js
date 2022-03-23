// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import About from "./Home";
import CookedFood from "./cookedFood";
import UnCookedFood from "./UncookedFood";
import OtherThings from "./OtherThings";
import FV from "./Fruits&Vegies";
import L from "./Loginfile";
import Home2 from "./Home1";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/CookedFood" element={<CookedFood/>} />
      <Route path="/OtherThings" element={<OtherThings/>} />
      <Route path="/UnCookedFood" element={<UnCookedFood/>} />
      <Route path="/home" element={<About />} />
      <Route path="/FV" element={<FV />} />
      <Route path="/login" element={<L/>}/>
      <Route path="/home/home1" element={<Home2/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);