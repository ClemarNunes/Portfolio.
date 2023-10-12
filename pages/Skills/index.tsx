import styles from './Skills.module.css'

const Skills = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.ContainerArea}>
                <div className={styles.Skills}>
                    <h1>Skills</h1>
                    <div className={styles.skillsTitle}>
                        <img src="/assets/react.png" height={'auto'} width={50} alt="" />
                        <h2>Front end Developer</h2>
                        <div className={styles.skillsBody}>
                            <div className={styles.test}><img src="/assets/html.png" height={'auto'} width={64} alt="" /></div>
                            <div className={styles.test}> <img src="/assets/css.png" height={'auto'} width={40} alt="" /></div>
                            <div className={styles.test}> <img src="/assets/javascript.png" height={'auto'} width={40} alt="" /></div>

                        </div>

                        <div className={styles.skillsBody}>
                            <div className={styles.test}> <img src="/assets/typescript.png" height={'auto'} width={40} alt="" /></div>
                            <div className={styles.test}><img src="/assets/react.png" height={'auto'} width={40} alt="" />  </div>
                            <div className={styles.test}>  <img src="/assets/nextjs.png" height={'auto'} width={45} alt="" /></div>
                        </div>
                    </div>
                </div>

                <div className={styles.services}>
                    <h1>Services</h1>
                    <div>
                        <span>Hello! I'm a front-end developer passionate about transforming concepts into incredible digital interfaces.</span>

                        <h3>What I Offer:</h3>
                        <h4>Responsive Design:</h4>
                        <span>Interfaces adaptáveis para todos os dispositivos.</span>

                        <h4>Interactive Development:</h4>
                        <span>Engaging features with the latest technologies.</span>

                        <h4>Performance Optimization:</h4>
                        <span>Fast, efficient websites for frictionless experiences.</span>

                       <h4>Modern Integration:</h4>
                       <span>Implementation of innovative technologies such as ReactJs</span>

                       <h4>Transparent Collaboration:</h4>
                       <span>Open communication to meet your expectations.</span>

                       <span>Let's transform your vision into an exceptional digital experience. Contact!</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;