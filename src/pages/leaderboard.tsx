import { GetServerSideProps } from "next";
import Head from "next/head";

import { NavBar } from "../components/NavBar";

import { ChallengesProvider } from "../contexts/ChallengesContext";

import styles from '../styles/pages/Leaderboard.module.css';

interface LeaderboardProps {
   level: number;
   currentExperience: number;
   challengesCompleted: number;
}

export default function Leaderboard(props: LeaderboardProps) {
   return (
      <ChallengesProvider
         level={props.level}
         currentExperience={props.currentExperience}
         challengesCompleted={props.challengesCompleted}
      >
         <div className={styles.container}>
            <Head>
               <title>Entre os melhores</title>
            </Head>

            <NavBar />
         </div>
      </ChallengesProvider>
   );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
   const { level, currentExperience, challengesCompleted, isActiveDark } = ctx.req.cookies;
 
   return {
     props: {
       level: Number(level),
       currentExperience: Number(currentExperience),
       challengesCompleted: Number(challengesCompleted),
     }
   }
 }