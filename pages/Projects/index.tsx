import styles from './Projects.module.css'
import Project from '../../components/Project';


const Projects = () => {
    return(
        <div className={styles.Container}>
            <div className={styles.areaProject}>
                <div>
                    <h1>Check out some projects carried out</h1>
                </div>

                <div className={styles.projects}>
                <Project />
                <Project />
                <Project />
                </div>

            </div>

           
        </div>
    );
}

export default Projects