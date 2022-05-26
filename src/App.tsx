import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddUser } from "./components/AddUser";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Users } from "./components/Users";
import { Error } from "./components/Error";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Users" element={<Users />}></Route>
        <Route path="/AddUser" element={<AddUser />}></Route>
        <Route path="/404" element={<Error />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
