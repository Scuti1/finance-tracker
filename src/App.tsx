import './App.css'
import TopSections from "./components/TopSections.tsx";
import React from "react";
import MainSections from "./components/MainSections.tsx";

function App() {
  return (
    <>
        <div className="container-2xl mt-10">
            <TopSections></TopSections>
            <MainSections></MainSections>
            {/*<Login/>*/}
        </div>
    </>
  )
}

export default App
