import { React, useEffect, useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import axios from "axios";


const SignUp = () => {
    const navigate = useNavigate();
    const [initial, final] = useState({
        FName: "",
        LName: "",
        Email: "",
        Password: "",
        Number: ""
    })
    const setdata = (event) => {
        const { name, value } = event.target;
        final((info) => {
            return {
                ...info,
                [name]: value
            }
        })
    }
    const token = localStorage.getItem("token");
    const savedata = async (event) => {
        event.preventDefault();
        try {
            const { FName, LName, Email, Password, Number } = initial;
            console.log(FName,LName);
            const response = await axios.post("http://localhost:1212/signup",{
                FName, LName, Email, Password, Number
            })
            const { Token, id } = response.data;
            localStorage.setItem('token', Token);
            axios.defaults.headers.common["Authorization"] = Token;
            alert("Successfully Save ...")
            navigate(`/secondpage/${id}`);
        } catch (error) {
            alert(error)
            console.log(error);
        }
    }
    const getdata = async () => {

        try {
            axios.defaults.headers.common["Authorization"] = token;
            const response = await axios.get("http://localhost:1212");
            const id = response.data.id;
            navigate(`/dashboard/${id}`)
        } catch (error) {
            alert(error)
            console.log(error);
        }
    }
    // useEffect(() => {
    //     if (token != null) {
    //         console.log("hello")
    //         getdata();
    //     }
    // })
    return (
        <>

            {/* <div style={{backgroundImage: `url('https://i.pinimg.com/originals/70/4e/99/704e999b4c74c4111590aa217fa2de1b.gif')`}} className="min-w-screen min-h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center px-5 py-5"> */}
            <div  className="min-w-screen min-h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center px-5 py-5">
                <div className="rounded-3xl z-10 signup-page shadow-xl border w-full overflow-hidden max-w-4xl">
                    <div className="md:flex w-full">
                        <div className="hidden md:block md:w-1/2 ">
                            <img className='h-full' src="https://gifdb.com/images/high/goal-levitating-during-meditation-ahqaz1p74isjjpna.gif" />
                        </div>
                        <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div className="text-center mb-6">
                                <h1 className="font-bold text-3xl ">Hey Buddy !  🏆</h1>
                                <p className='mt-4 text-lg'>Register to become stress free with Mediguide !</p>
                            </div>
                            <div>
                                <div className="flex -mx-3">
                                    <div className="w-1/2 px-3 mb-5">
                                        <label htmlFor="" className="text-xs font-semibold px-1">First name</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input type="text" name="FName" onChange={setdata} className="w-full bg-transparent -ml-10 pl-4 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="John" />
                                        </div>
                                    </div>
                                    <div className="w-1/2 px-3 mb-5">
                                        <label htmlFor="" className="text-xs font-semibold px-1">Last name</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input type="text" name="LName" onChange={setdata} className="w-full bg-transparent -ml-10 pl-4 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Smith" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">

                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input onChange={setdata} name="Email" type="email" className="w-full bg-transparent -ml-10 pl-4 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="johnsmith@example.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label htmlFor="" className="text-xs font-semibold px-1">Number</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input onChange={setdata} name="Number" type="number" className="w-full bg-transparent -ml-10 pl-4 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="8085951659" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-12">
                                        <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input onChange={setdata} name="Password" type="password" className="w-full bg-transparent -ml-10 pl-4 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="************" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <button onClick={savedata} className="block w-full max-w-xs mx-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-gradient-to-l  text-white rounded-lg px-3 py-3 font-semibold bg-gradient-to-r from-blue-700 to-red-600">REGISTER NOW</button>
                                    </div>
                                    <div className="w-full px-3 mb-5">
                                        <button onClick={() => { navigate("/login") }} className="block w-full max-w-xs mx-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-gradient-to-l text-white rounded-lg px-3 py-3 font-semibold bg-gradient-to-r from-blue-700 to-red-600">LOG IN</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SignUp;