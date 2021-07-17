import {FaHome, FaUser} from 'react-icons/fa'
import styles from '../styles/Navbar.module.css'


export default function Navbar() {
    return (
        <div>
            <nav className={styles.navbar}>
            <ul classname="vertical-menu scrollspy">
                
                <a href="#" className = {styles.a}>
                    <FaHome /> Home
                </a>
                    
                
                <li >
                <a className = {styles.a}>
                    <FaUser /> About 
                </a>
                </li>

                <li>
                <a>
                    <i classname="icon-briefcase"></i>Skills </a>
                </li>
                <li>
                <a>
                    <i classname="icon-social-github"></i>Projects </a>
                </li>
                <li>
                <a>
                    <i classname="icon-graduation"></i>Experience </a>
                </li>
                <li>
                <a>
                    <i classname="icon-layers"></i>Works </a>
                </li>
                <li>
                <a>
                    <i classname="icon-bubbles"></i>Contact </a>
                </li>
            </ul>
            </nav>
        </div>
    )
}

