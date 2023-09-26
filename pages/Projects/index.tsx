import styles from './Projects.module.css'
import Project from '../../components/Project';
import Modal from '../../components/Modal';
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion'
import Animation from '../../components/Animations';
import {dados} from '../../helpers/dados'


 
const Projects = () => {
    const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState({image:'', titleProject: '', description: ''});
    const [number, setNumber] = useState(70);
    const [number2, setNumber2] = useState(0)
    const [tes, setTes] = useState()

    const handleProjectClick = (item:any) => {
        setModalData(item)
    }
     

  
   
    // const animations = {
    //     initial:{ y: 0},
    //     animate: {y: number}
    // }
     

    // useEffect(() => {
    //     if(modalStatus == true){
    //         setNumber(150)
    //     } 
    //     if(modalStatus== false){
    //         setNumber(50)
    //     }
    // },[modalStatus])


    return(
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
                        
                {/* <motion.div  initial='initial' animate='animate'  variants={animations} transition={{  duration: 1.5}}>     */}
                    <Modal modalStatus={modalStatus} setModalStatus={setModalStatus} data={modalData}    />
                {/* </motion.div>     */}
               
            </div>

           
        </div>
    );
}

export default Projects