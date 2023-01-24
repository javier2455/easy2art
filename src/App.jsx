import React from "react";
// import PinForm from "./components/PinForm";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Navigation from "./components/Navigation";
// import Login from "./pages/Login";
// import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="easy2art/"
          element={
            <>
              <Navigation />
              <Home />
            </>
          }
        />
        <Route
          path="easy2art/home"
          element={
            <>
              <Navigation />
              <Home />
            </>
          }
        />
        {/* <Route
          path="/login"
          element={
            <>
              <Navigation />
              <Login />
            </>
          }
        /> */}
        <Route
          path="easy2art/works"
          element={
            <>
              <Navigation />
              <Works />
            </>
          }
        />
        {/* <Route
          path="/create_pin"
          element={
            <>
              <Navigation />
              <PinForm />
            </>
          }
        /> */}
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="*" element={<h1>404: Not Found </h1>} />
      </Routes>
    </>
  );
}

export default App;
