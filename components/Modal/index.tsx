import { useState, useEffect } from 'react';
import styles from './Modal.module.css';
import { motion } from 'framer-motion';
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



const Modal = ({ modalStatus, setModalStatus, data }: Props) => {
    const [number, setNumber] = useState(-50)

    const handleModalStatus = (e: any) => {
        if (e.target.classList.contains('Modal_Container___kYqL')) {
            setModalStatus(false)
        }
    }


    const closeModal = (e: any) => {
        setModalStatus(false)
        console.log(e)

    }



    const animations = {
        initial: { y: -1500 },
        animate: { y: number }
    }

    useEffect(() => {
        { modalStatus == true ? setNumber(-50) : setNumber(-1500) }

    }, [modalStatus])


    return (
        <div className={styles.Container} onClick={handleModalStatus} style={{ display: modalStatus == true ? 'flex' : 'none' }}>


            <motion.div initial='initial' animate='animate' variants={animations} transition={{ duration: 0.4, stiffness: 70 }}>

                <div className={styles.ModalBody}  >
                    <div className={styles.ModalImg}>

                        <img src={data.image} width={`${100}%`} height={`${100}%`} alt="" />

                    </div>

                    <div className={styles.ModalInfoArea}>

                        <div className={styles.ModalInfo}>
                            <span>{data.titleProject}</span>
                            <span>{data.description}</span>
                        </div>

                        <div className={styles.ModalButton}>
                            <div className={styles.more}>MORE</div>
                            <div className={styles.closer} onClick={closeModal}>CLOSER</div>
                        </div>
                    </div>
                </div>

            </motion.div>


        </div>
    );
}

export default Modal;