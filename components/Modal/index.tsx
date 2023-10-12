import { useState, useEffect } from 'react';
import styles from './Modal.module.css';
import { motion } from 'framer-motion';

type Props = {
    modalStatus: boolean;
    setModalStatus: (setModalStatus: boolean) => void;
    data: Props2;
}

type Props2 = {
    image: string;
    titleProject: string;
    description: string;
    images: string[]
}

const Modal = ({ modalStatus, setModalStatus, data, }: Props) => {
    const [number, setNumber] = useState(-50)
    const [valorScalee, setValorScalee] = useState(true)
    const [scalee, setScalee] = useState(1)
    const [activePage, setActivePage] = useState(0);
    const [valueChangeImg, SetValueChangeImg] = useState(0);

    const handleModalStatus = (e: any) => {
        if (e.target.classList.contains('Modal_Container___kYqL')) {

            setValorScalee(false)
            setScalee(0)

            setTimeout(() => {
                SetValueChangeImg(0)
                setActivePage(0)
                setModalStatus(false)
                setScalee(1)
            }, 300);

        }
    }


    const closeModal = (e: any) => { 
        setValorScalee(false)
        setScalee(0)

        setTimeout(() => {
            SetValueChangeImg(0)
            setActivePage(0)
            setModalStatus(false)
            setScalee(1)
        }, 300);

    }

    const animations = {
        initial: { opacity: 0, y: -1500 },
        animate: { opacity: 1, y: number, scale: valorScalee ? scalee : scalee },

    }

    useEffect(() => {
        { modalStatus == true ? setNumber(0) : setNumber(-1500) }

    }, [modalStatus]) //aux

    const NextSlide = () => {
        SetValueChangeImg(valueChangeImg + 1)
        setActivePage(activePage+1)
        if(valueChangeImg == data.images.length -1){
            SetValueChangeImg(0)
            setActivePage(0)
               
        }
    }
  
    const PreviousSlide = () => {
        SetValueChangeImg(valueChangeImg -1)
        setActivePage(activePage-1)
        if(valueChangeImg <= 0){
            SetValueChangeImg(data.images.length -1)
            setActivePage(data.images.length -1)
        }
    }
    
    return (
        <div className={styles.Container} onClick={handleModalStatus} style={{ display: modalStatus == true ? 'flex' : 'none' }}>

            <motion.div className={styles.motion} initial='initial' animate='animate' variants={animations} transition={{ duration: 0.4, type: 'spring' }}>

                <div className={styles.ModalBody}  >
                    <div className={styles.ModalImg} style={{marginLeft: (valueChangeImg >= 0 ? (`${valueChangeImg * -100}%` ) : 0), transition: '1'}}>

                        {data.images.map((item, index) => (
                            <img key={index} src={item} width={`${750}`} height={`${100}%`}   alt="" />
                        ))}
                                           
                    </div>

                    <div className={styles.ModalInfoArea}>
                        <div className={styles.ModalButton}>
                            <div className={styles.more} onClick={NextSlide}>MORE</div>
                            <div className={styles.paginationDots}>
                                {Array(data.images.length).fill(0).map((item, index) => (
                                    <div key={index} className={styles.Dots} style={{backgroundColor: activePage === index ? 'black' : 'transparent'}}>
                                        
                                    </div>
                                ))}
                            </div>
                            <div className={styles.closer} onClick={closeModal}>CLOSER</div>
                        </div>
                    </div>
                </div>

                <div className={styles.previousSlide} onClick={PreviousSlide}>
                    <img src="/assets/left.png" height={'auto'} width={20} alt="" />
                </div>

                <div className={styles.nextSlide} onClick={NextSlide}>
                    <img src="/assets/next.png" height={'auto'} width={20} alt="" />
                </div>

            </motion.div>


        </div>
    );
}

export default Modal;