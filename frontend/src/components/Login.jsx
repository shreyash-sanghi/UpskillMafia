import {React,useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ()=>{

  const [showPassword, setShowPassword] = useState(false); 
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const imageUrl =
    "https://www.icegif.com/wp-content/uploads/2022/01/icegif-301.gif";
    
    const navigate = useNavigate();
    const [initial,final] = useState({
      Email:"",
      Password:"",
    })
   const updatedata = (e)=>{
      const {name,value} = e.target;
      final((info)=>{
        return{
          ...info,
          [name] :value
        }
      })
   }
  
    const save =async(event)=>{
      event.preventDefault(); 
      try {
      const {Email,Password} = initial;
     const result  = await axios.post("http://localhost:1212/login",
     {Email,Password});
     console.log(result);
     const status = result.status;
     if(status == 202){
     const token = result.data.Token;
     const id = result.data.id;
     localStorage.setItem('token', token);
     axios.defaults.headers.common["Authorization"] = token;
     alert("Success");
     navigate(`/secondpage/${id}`);
     }
    } catch (error) {
        alert(error)
        // alert("Invalid Details please Sing In again...")
    }
    }
    
      return(
          <>


  <div className="h-screen md:flex">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="relative bg-no-repeat bg-cover bg-center overflow-hidden md:flex w-1/2 bg-gradient-to-r from-red-800 to-[#240101] i justify-around items-center hidden"
      >
        <div className="lg:max-w-lg">
          
          
        </div>
      </div>
      <div className="flex md:w-1/2  justify-center py-10 items-center ">
        <form className="lg:w-[500px] px-6 lg:px-0">
        <h1 className=" font-bold text-4xl lg:text-6xl font-sans lg:mb-4">
            Mediguide
          </h1>
          <p className=" lg:text-lg mt-1 mb-4">
          "Step into the serene world of MindfulZ, your premier destination for embarking on a transformative meditation journey. Delve into a realm of inner peace, mindfulness, and self-discovery, all within your grasp.
          </p>
          <h1 className=" font-bold text-2xl mb-1">Welcome Buddy 😇</h1>
          <p className="text-sm font-normal  mb-7">Please login to access cool & supportive features. !!</p>
      
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none bg-transparent"
              type="text"
              name="Email"
              id=""
              placeholder="Email Address"
              onChange={updatedata} 
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            
          <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXFkqGHVFML3mbfmrRXpan_KXRNxyNDGylsYitP36BA&s"
      alt="Eye Icon"
      className="h-5 w-5 text-gray-400 cursor-pointer mix-blend-multiply"
      onClick={togglePasswordVisibility}
    />


            <input
              className="pl-2 outline-none border-none bg-transparent"
              type={showPassword ? "text" : "password"}
              name="Password"
              id=""
              placeholder="Password"
              onChange={updatedata} 
            />
          </div>
          <button
            type="submit"
            onClick={save}
            className="block w-full bg-gradient-to-r from-blue-500 to-red-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
          </>
      )
  }

export default Login;