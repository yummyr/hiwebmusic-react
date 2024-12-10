import React, { memo } from "react";
<<<<<<< HEAD
import "@/assets/css/reset.css";



const App = memo(() => {
  return <div>App</div>;
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@/assets/css/reset.css";
import AppFooter from "components/app-footer";
import AppHeader from "components/app-header";
import routes from "./router";


const App = memo(() => {
  console.log(routes)
  return (<BrowserRouter>
    <AppHeader/>
    <Routes>
      {routes.map((route,index)=>
        <Route key={index} path={route.path} element={route.element}/>
      )}
    </Routes>
  
    <AppFooter/>
    
    </BrowserRouter>)
>>>>>>> main
});

export default App;
