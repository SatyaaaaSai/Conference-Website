import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
const HomePage=()=>{
    return(
        <div>
           <div className="flex justify-between">
            <div className="flex justify-center items-center">
                <img className="p-2 w-8 flex items-center" src={logo} alt="logo"/> 
            </div>
            <div>
                <ul className="flex justify-center">
                    <li className="m-3 p-3 hover:cursor-pointer"><a href="/">Home</a></li>
                    <li className="m-3 p-3 hover:cursor-pointer"><a href="/products">Products</a></li>
                    <li className="m-3 p-3 hover:cursor-pointer"><a href="/about">About</a></li>
                    <li className="m-3 p-3 hover:cursor-pointer"><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div>
                <ul className="flex justify-center">
                    <li className="m-3 p-3 hover:cursor-pointer"><a href="/">Log  </a></li>
                    <li className="m-3 p-3 hover:cursor-pointer"><a href="/products">Products</a></li>
                    <li className="m-3 p-3 hover:cursor-pointer"><a href="/about">About</a></li>
                    <li className="m-3 p-3 hover:cursor-pointer"><a href="/contact">Contact</a></li>
                </ul>
            </div>
           </div>
        </div>
    )
}

export default HomePage;