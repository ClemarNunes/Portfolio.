import styles from './Projects.module.css'
import Project from '../../components/Project';
import Modal from '../../components/Modal';
import { useState } from 'react';
import { dados } from '../../helpers/dados'





const Projects = () => {
    const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState({ image: '', titleProject: '', description: '',images:[] });

    const handleProjectClick = (item: any) => {
        setModalData(item)
    }

    return (
        <div className={styles.Container}>
            <div className={styles.areaProject}>

                <div className={styles.title}>
                    <h1>My Featured Projects</h1>
                </div>

                <div className={styles.projects}>

                    {dados.map((item, index) => (
                        <div key={index} className={styles.ProjectSection}>
                            <Project setModalStatus={setModalStatus} item={item} onClick={handleProjectClick} />
                        </div>
                    ))}
                
                </div>

                <Modal modalStatus={modalStatus} setModalStatus={setModalStatus} data={modalData} />
                 
            </div>
        </div>
    );
}

export default Projects