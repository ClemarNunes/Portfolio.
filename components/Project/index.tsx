import { useState } from 'react';
import styles from './Projects.module.css';

const Project = () => {
    const [black, setBlack] = useState(false);
 
    const teste = () => {
       setBlack(true)
    }

    const teste2 = () => {
        setBlack(false)
    }
    return(
        <div className={styles.Container}>
            <div className={styles.projectArea}>
                <img src="/assets/2.png" width={250} height={'auto'} alt="" />
                <div></div>
            </div>
            <div onMouseOver={teste} onMouseOut={teste2} className={styles.tela} style={{opacity: black == true ? 0.7 : 0  }}></div>
            <div className={styles.teste}>testando</div>
        </div>
    );
}

export default Project;