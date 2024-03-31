import {React ,useState,useEffect}from "react";
import './home.css';
import { Link } from "react-router-dom";
const Navbar = ()=>{
    const [showMenu, setShowMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [iniEmail,finEmail] = useState("");
    const toggleMenu = () => {
        setShowMenu(prevState => !prevState);
    };

    const toggleDarkMode = () => {
        setDarkMode(prevState => !prevState);
    };
    
    const sendemail = (e)=>{
       e.preventDefault();
       try {
         emailjs.sendForm("service_edl04xe","template_nok8by1", form.current,"fA8kcfAFIvcziEYcA")
       } catch (error) {
         toast(error)
       }
    }
    
    useEffect(() => {
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');

        const handleToggleMenu = () => {
            setShowMenu(prevState => !prevState);
        };

        const handleCloseMenu = () => {
            setShowMenu(false);
        };

        navToggle.addEventListener('click', handleToggleMenu);
        navClose.addEventListener('click', handleCloseMenu);

        return () => {
            navToggle.removeEventListener('click', handleToggleMenu);
            navClose.removeEventListener('click', handleCloseMenu);
        };
    }, []);

    useEffect(() => {
        const themeButton = document.getElementById('theme-button');
        themeButton.addEventListener('click', toggleDarkMode);
        return () => {
            themeButton.removeEventListener('click', toggleDarkMode);
        };
    }, []);
   
    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    }, [darkMode]);
    return(
        <>
           <header class="header" id="header">
      <nav class="nav container2">
         <a href="#" class="nav__logo">Yoga</a>

         <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
 
            <ul class="nav__list">
               <li class="nav__item">
                  <Link to={"/signup"} class="nav__link active-link">Sign UP</Link>
               </li>

               <li class="nav__item">
                  <Link to={"/login"} class="nav__link">Login</Link>
               </li>
            </ul>


            <div class="nav__close" id="nav-close">
               <i class="ri-close-line"></i>
            </div>
         </div>
         

         <div class="nav__buttons">
        
      
            <i class="ri-moon-line change-theme" id="theme-button"></i>

          
            <div class="nav__toggle" id="nav-toggle">
               <i class="ri-apps-2-line"></i>
            </div>
         </div>
         
      </nav>
   </header>
        </>
    )
}
export default Navbar;