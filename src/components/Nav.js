import { useState,forwardRef} from 'react';
import styles from "../styles/Nav.module.css";
import {Link} from 'react-router-dom';
import arrow from "../assets/down.png";

const Nav =forwardRef((props,ref) => {
    const [menu,setMenu] = useState(false);
    const handleOnClick=()=>{
        setMenu(!menu)
        console.log(menu);
    }
    const handleClick = (refP)=> {
        var element;
        if (refP=="hls") {
            element = ref.hls.current;
        } else {
            element = ref.about.current;
        }
        console.log(element);
        if (element) {
            element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };
    return (
        <nav>
            <div className={styles.menu} onClick={handleOnClick}>
                Menu
                <img src={arrow} className={menu && styles.menuHover}/>
            </div>
            <ul className={menu && styles.navVisible}>
                {!props.notHome&& <li onClick={()=>handleClick("hls")}><Link className='header-link-text' >Order Online</Link></li>}
                {!props.notHome&& <li onClick={()=>handleClick("about")}><Link className='header-link-text' >About</Link></li>}
                {props.notHome&& <li><Link to="/" className='header-link-text'>Home</Link></li>}
                {!props.notHome&&<li><Link to="/ReserveTable" className='header-link-text'>Reservations</Link></li>}
            </ul>
        </nav>
    );
});

export default Nav;