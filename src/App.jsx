import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";
import { useContext, useState } from "react";
import IsHomeContext from "./context";

function App() {
  
  const {isHome} = useContext(IsHomeContext)

  return (
    <>
      <Header/>
      <div className="bg-gray-100 pb-3 mx-auto h-full">

        <div className="text-center max-w-screen-md mx-auto py-5">
        <h2 className="mb-1 mt-2 text-2xl font-medium">SECOND INTERNATIONAL CONFERENCE ON RECENT TRENDS IN COMPUTING (ICRTC 2023)</h2>
        </div>

        {
          isHome ?
          <div className=" pb-8 ">
          <Slider/>
        </div>:
        ""
        }
        <div className="text-center max-w-screen-md mx-auto">
        <h3 className="text-xl">
        Sanjivani College of Engineering, Tal.Kopargaon, Pincode 423 603. District Ahmednagar, Maharashtra. India. December 15 & 16, 2023.
        </h3>
        </div>
      <div className="my-10 max-w-screen-xl mx-auto gap-10 flex flex-wrap justify-center">
      <Sidebar/>
      <Outlet/>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
