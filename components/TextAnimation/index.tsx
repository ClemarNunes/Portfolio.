import { useState } from 'react';
import Typewriter from 'typewriter-effect'
import styles from './TextAnimation.module.css'
import Link from 'next/link';


const TextAnimation = () => {

    const [state] = useState({
        title: "Hi,",
        titleTwo: "I'm Clemar",
        titleThree: 'Font End Developer',
        image: '/assets/teste.png'
        
    })

     

    return(
        <div className={styles.Container}>
            <div className={styles.ContainerArea}>

                <div className={styles.logo}>
                    <img src="/assets/c.png" width={40} height={'auto'} alt="" />
                    <div className={styles.logoInfo}>
                        <span className={styles.logoInfo1}>Clemar Nunes</span>
                        <span className={styles.logoInfo2}>W E B & U I D E S I G N E R</span>
                    </div>
                </div>

                <div className={styles.mudei}>
                    <div className={styles.title}>{state.title} </div>
                    <div className={styles.titleTwo}>{state.titleTwo} </div>
                    <div className={styles.titleThree}>{state.titleThree} </div>
                </div>

                <div className={styles.text}>
                    <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        strings: [
                            'Need A Front End Developer?',
                            "Let's Work Together?",
                           
                        ],
                        
                        
                        
                    }} />
                    
                </div>
                

            </div>

            <div className={styles.foto}>
               
                <img src="/assets/2.png"  alt="" />
            </div>

            
        </div>
    );
}

export default TextAnimation;