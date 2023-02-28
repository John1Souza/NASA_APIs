
import styles from './Navbar.module.scss'

import logo from '../../Images/nasa_logo.svg'
import { useState } from 'react'
import { HamburguerMenu } from './HamburguerMenu/Index'
import { Link } from 'react-router-dom'


export function Navbar() {

    const [ menuOpen, setMenuOpen ] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
  return (
        <section className={styles.header_content}>
            <nav className={styles.navbar_container}>
                <Link to='/'><img src={logo} alt="nasa_logo" /></Link>
                  
                <ul className={styles.navbar_list}>
                    <li className={styles.navbar_item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.navbar_item}>
                        <Link to='/Api'>APIs</Link>
                    </li>
                    <li className={styles.navbar_item}>
                        <Link to='/About'>About</Link>                        
                    </li>
                    <li className={styles.navbar_item}>
                    <Link to='/Contacts'>Contact</Link>  
                    </li>
                </ul>
                <HamburguerMenu onClick={toggleMenu}/>
                {menuOpen && (
                    <ul className={styles.navbar_list_hamMenu}>
                        <li className={styles.navbar_item_hamMenu}>
                            Home
                        </li>
                        <li className={styles.navbar_item_hamMenu}>
                            About
                        </li>
                        <li className={styles.navbar_item_hamMenu}>
                            Contact
                        </li>
                    </ul>
                )}        
            </nav>
        </section>
  )
}
