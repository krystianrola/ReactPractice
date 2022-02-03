import React, { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import "./Nav.css";

function Nav() {
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const transitionNavbar = () => {
        if ( window.scrollY > 100 ) {
            setShow(true);
        }else setShow(false);
    }

    useEffect(() => {
      window.addEventListener("scroll", transitionNavbar)

      return () => window.removeEventListener("scroll", transitionNavbar)
    }, []);
    

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav_content">
        <img
        onClick={()=>{navigate('/')}}
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <img
        onClick={()=>{navigate('profile')}}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export { Nav };
