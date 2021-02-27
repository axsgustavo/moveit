import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

let countdownTimeout: NodeJS.Timeout;

interface CountdownContextData {
   isActive: boolean;
   hasFinished: boolean;
   minutes: number;
   seconds: number;
   time: number;
   percentTime: number;
   startContdown: () => void;
   resetCountdown: () => void;
}

interface CountdownProviderProps {
   children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
   const { startNewChallenge } = useContext(ChallengesContext);

   const accountantTimeInMinutes = 1;

   const [time, setTime] = useState(accountantTimeInMinutes * 60);
   const [isActive, setIsActive] = useState(false);
   const [hasFinished, setHasFinished] = useState(false);

   let percentTime = Math.floor((time * 100) / (accountantTimeInMinutes * 60))

   const minutes = Math.floor(time / 60);
   const seconds = time % 60;

   function startContdown() {
      setIsActive(true);
   }

   function resetCountdown() {
      clearTimeout(countdownTimeout);
      setIsActive(false);
      setHasFinished(false);
      setTime(accountantTimeInMinutes * 60);
   }

   useEffect(() => {
      if(isActive && time > 0) {
         countdownTimeout = setTimeout(() => {
            setTime(time - 1);
         }, 1000);
      } else if (isActive && time === 0) {
         setHasFinished(true);
         setIsActive(false);
         startNewChallenge();
      }
   }, [isActive, time]);

   return (
      <CountdownContext.Provider value={{
         isActive,
         hasFinished,
         time,
         minutes,
         seconds,
         startContdown,
         resetCountdown,
         percentTime,
      }}>
         {children}
      </CountdownContext.Provider>
   );
}