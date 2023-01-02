import { useState } from 'react';
import './App.css'
import commaNumber from 'comma-number';
// import { Routes, Route, Navigate, Outlet } from "react-router-dom";


// function formatNum(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

function App() {
  const [currency, setCurrency] = useState(0);

  // const result = formatNum(currency);
  
  return (
    <div className="App">
   {/* <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/product" element={user ? <Product/> : <Navigate to="/login" />}></Route>
    </Route>
    </Routes> */}


      <div className="container">
        <input type="number" value={currency} onChange={(e) =>setCurrency(e.target.value)} placeholder="Enter a number here"/>
        <br/>
        <br />

        {commaNumber(currency)}
      </div>        

    
  </div>)
}
export default App;