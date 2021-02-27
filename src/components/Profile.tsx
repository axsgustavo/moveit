import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
   const { level } = useContext(ChallengesContext);

   return(
      <div className={styles.profileContainer}>
         <img src="https://xesque.rocketseat.dev/users/avatar/profile-9b76ab71-9e84-41f3-89ad-0052129316ec-1614109743076.jpg" alt="Gustavo Alves"/>
         <div>
            <strong>Gustavo Alves</strong>
            <p><img src="icons/level.svg" alt="Level"/>level {level}</p>
         </div>
      </div>
   );
}
