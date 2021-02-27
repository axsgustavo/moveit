import { useState, useEffect, useContext } from 'react';
import { IoMdClose } from "react-icons/io";

import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
   const { 
      isActive, 
      hasFinished, 
      time,
      minutes, seconds, 
      startContdown, 
      resetCountdown,
      percentTime,
   } = useContext(CountdownContext);

   const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
   const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

   return (
      <div>
         <div className={styles.countdownContainer}>
            <div>
               <span>{minuteLeft}</span>
               <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
               <span>{secondLeft}</span>
               <span>{secondRight}</span>
            </div>
         </div>

         { hasFinished ? (
            <button
               disabled
               type="button"
               className={styles.countdownButton}
            >
               Ciclo encerrado <img src="icons/check.svg" alt="Verificado" />
            </button>
         ) : (
            <>
               { isActive ? (
                  <button
                     type="button"
                     className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                     onClick={resetCountdown}
                  >
                     Abandornar ciclo <IoMdClose className={styles.IoMdClose} />
                     <span className={styles.counterTimer} style={{ width: `${percentTime}%` }}></span>
                  </button>
               ) : (
                  <button
                     type="button"
                     className={styles.countdownButton}
                     onClick={startContdown}
                  >
                     Iniciar um ciclo <img src="icons/arrow-white.svg" alt="Seta para esquerda" />
                  </button>
               ) }
            </>
         ) }


      </div>
   );
}