import { ReactElement, useState } from 'react';
import styles from './Projects.module.css';
import Link from 'next/link';

type Props = {
    setModalStatus: (setModalStatus:boolean) => void;
    item: Props2;
    
    onClick: (item: any ) => void
     
}

type Props2 = {
    titleProject: string;
    image: string;
    description: string;
}




const Project = ({ setModalStatus, item,   onClick }: Props) => {
    
 
    const handleClick = () => {
     
       onClick(item)
        
       setModalStatus(true)
      
       
    }

    
    return(
        <div className={styles.Container} onClick={handleClick} >

            <div className={styles.projectArea}>
              
                <img src={item.image} height={'auto'} width={250} alt="" />
            
                <div className={styles.tela}>
                    {/* <div> {item.titleProject} </div> */}
                     {/* <Link href={'https://github.com/ClemarNunes/DevsFood'}>{item.titleProject} </Link> */}
                      <a href="https://github.com/ClemarNunes/DevsFood">{item.titleProject} </a>
                </div>
            </div>

           
          

        </div>
    );
}


 {/* style={{opacity: black == true ? 0.7 : 0  }} */}
 
    {/* <img src="/assets/2.png" width={250} height={'auto'} alt="" /> */}
export default Project;