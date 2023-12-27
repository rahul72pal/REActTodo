import "./App.css";
import Task from './components/Task'
import AddTask from "./components/AddTask";
import Home from "./components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import Singup from "./components/Pages/Singup";
import VerifyEmail from "./components/Pages/VerifyEmail";

function App() {
  return (
    <main class="bg-[#020206] w-full h-screen overflow-auto flex justify-center items-center  ">

      <div className="w-[] h- overflow-auto border-2 border-white  rounded-lg shadow-2xl  md:shadow-xl mt-[200px] mb-[100px] ">
        
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/tasks" element={<Task></Task>}></Route>
            <Route path="/add-task" element={<AddTask/> }></Route>
            <Route path="/sign-up" element={<Singup/>}></Route>
            {/* <Route path="/verify-email" element={<VerifyEmail/>}></Route> */}
        </Routes>
      </div>
      
    </main>
  );
}

export default App;