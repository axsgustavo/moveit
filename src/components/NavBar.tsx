import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { FiHome } from "react-icons/fi";
import { RiMedalLine } from "react-icons/ri";

import styles from '../styles/components/NavBar.module.css';

export function NavBar() {
   const { pathname } = useRouter();
   const [localAddress, setlocalAddress] = useState(pathname);

   return (
      <div className={styles.navBarContainer}>
         <header>
            <img src="logo.svg" alt="Logo"/>
         </header>
         <div>
            <ul>
               <li>
                  <Link href="/">
                     {localAddress == '/' ? (
                        <a type="button" className={styles.active}><FiHome /></a>
                     ) : (
                        <a type="button"><FiHome /></a>
                     )}
                  </Link>                    
               </li>

               <li>
                  <Link href="/leaderboard">
                     {localAddress == '/leaderboard' ? (
                        <a type="button" className={styles.active}><RiMedalLine /></a>
                     ) : (
                        <a type="button"><RiMedalLine /></a>
                     )}
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   );
}