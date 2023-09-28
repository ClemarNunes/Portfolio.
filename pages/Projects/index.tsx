import styles from './Projects.module.css'
import Project from '../../components/Project';
import Modal from '../../components/Modal';
import { useState } from 'react';
import { dados } from '../../helpers/dados'
import Slider from '../../components/Slider';



const Projects = () => {
    const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState({ image: '', titleProject: '', description: '' });

    const handleProjectClick = (item: any) => {
        setModalData(item)
        
    }

    return (
        <div className={styles.Container}>
            <div className={styles.areaProject}>
                <div>
                    <h1>Check out some projects carried out</h1>
                </div>

                <div className={styles.projects}>

                    {dados.map((item, index) => (
                        <div key={index} className={styles.test}>
                               <Project setModalStatus={setModalStatus} item={item}  onClick={handleProjectClick}  />
                        </div>
                    ))}
                </div>


                
                 {/* <Slider setModalStatus={setModalStatus} onClick={handleProjectClick}   /> */}
                 
               




                <Modal modalStatus={modalStatus} setModalStatus={setModalStatus} data={modalData} />


            </div>

            {/* <div>
                <Slider />
            </div> */} 


        </div>
    );
}

export default Projects