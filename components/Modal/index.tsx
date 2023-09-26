import { useState, useEffect } from 'react';
import styles from './Modal.module.css';
import {motion} from 'framer-motion';
import Animation from '../Animations';


type Props = {
    modalStatus: boolean;
    setModalStatus: (setModalStatus: boolean) => void;
    data: Props2;
    
}
type Props2 = {
    image: string;
    titleProject: string;
    description: string;
}

 

const Modal = ({ modalStatus, setModalStatus, data   }: Props) => {
    const [number, setNumber] = useState(-50)

    const handleModalStatus = (e:any) => {
        if(e.target.classList.contains('Modal_Container___kYqL')){
           setModalStatus(false)
        }    
    }

     
    const closeModal = () => {
        setModalStatus(false)
      
    }










    const animations = {
        initial:{ y: -1500},
        animate: {y: number}
    }
    
    useEffect(() => {
        {modalStatus == true ? setNumber(-50) : setNumber(-1500)}
     
    }, [modalStatus])
    

    return(
        <div className={styles.Container} onClick={handleModalStatus} style={{display:  modalStatus == true ? 'flex': 'none' }}>
             
            {/* <Animation> */}
            <motion.div initial='initial' animate='animate' variants={animations} transition={{duration: 0.5}}>
            
            <div className={styles.ModalBody}  >
                <div className={styles.ModalImg}>
                    {/* <img src="/assets/2.png" height={'auto'} width={200} alt="" /> */}
                    <img src={data.image} alt="" />
                        
                </div>

                <div className={styles.ModalInfoArea}>

                    <div className={styles.ModalInfo}>
                        <span>{data.titleProject}</span>
                        <span>{data.description}</span>
                    </div>

                    <div className={styles.ModalButton}>
                        <button>MORE</button>
                        <button onClick={closeModal}>CLOSER</button>
                    </div>
                </div>        
            </div>
            {/* </Animation> */}
            </motion.div>
           
 
        </div>
    );
}

export default Modal;