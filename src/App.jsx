import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";
import { useContext, useState } from "react";
import IsHomeContext from "./context";
import Head from "./components/Head";

function App() {
  
  const {isHome} = useContext(IsHomeContext)

  return (
    <>
    <div className="w-full flex flex-col max-w-screen-lg mx-auto overflow-x-hidden ">
      <Head/>
      </div>
    <div className="sticky top-0 z-50 w-full flex flex-col max-w-screen-lg mx-auto overflow-x-hidden">
      <Header/>

      </div>
    
    <div className="w-full flex flex-col min-h-screen max-w-screen-lg mx-auto overflow-x-hidden">
    
      <div className="bg-white pb-3 mx-auto h-full">

        <div className="text-center max-w-screen-md mx-auto py-5">
        <h2 className="mb-1 mt-2 text-xl lg:text-2xl font-medium">INTERNATIONAL CONFERENCE ON RECENT TRENDS AND ADVANCEMENTS IN COMPUTING TECHNOLOGIES</h2>
        </div>

        {
          isHome ?
          <div className="">
          <Slider/>
        </div>:
        ""
        }
       
      <div className="my-10 max-w-screen-xl mx-auto gap-10 flex flex-wrap justify-center">
      {/* <Sidebar/> */}
      <Outlet/>
      </div>
      </div>
    </div>
      <Footer/>
    </>

  )
}

export default App
