import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
   const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

   const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

   return(
      <header className={styles.experienceBar}>
         <span>{currentExperience} xp</span>
         <div>
            <div style={{ width: `${percentToNextLevel}%` }} >
               <span style={{ left: `${percentToNextLevel - 1}%` }}></span>
            </div>
         </div>
         <span>{experienceToNextLevel} xp</span>
      </header>
   );
}
