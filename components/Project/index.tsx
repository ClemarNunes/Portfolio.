import { ReactElement, useState } from 'react';
import styles from './Projects.module.css';
import Link from 'next/link';


type Props = {
    setModalStatus: (setModalStatus: boolean) => void;
    item: ProjectInfo;
    onClick: (item: any) => void;
}

type ProjectInfo = {
    titleProject: string;
    image: string;
    description: string;
    
}

const Project = ({ setModalStatus, item, onClick,  }: Props) => {

    const handleClick = () => {
        onClick(item)
        setModalStatus(true)
    }

    return (
        <>
            <div className={styles.Container}  >

                <div className={styles.projectArea} onClick={handleClick} >

                    <img src={item.image} height={`${100}%`} width={`${100}%`} alt="" />

                    <div className={styles.tela}>

                        <span>{item.titleProject}</span>
                    </div>
                </div>

                <div className={styles.ProjectInfo}>
                    <div className={styles.titleRight}>{item.titleProject} </div>
                    <div className={styles.descriptionRight}>{item.description} </div>

                    <div>
                        <button className={styles.buttonRight} onClick={handleClick} >
                            <span>VIEW MORE</span>
                            <img src="/assets/next.png" height={'auto'} width={15} alt="" />
                        </button>
                    </div>

                </div>
               

            </div>
        </>
    );
}

export default Project;