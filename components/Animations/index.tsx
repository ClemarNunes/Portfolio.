import {motion} from 'framer-motion';


const animations = {
    initial:{opacity: 0, y: -1600},
    animate: {
        opacity: 1, y: -50,},
    fim: {  y: 250, opacity: 0, }
 
}


const Animation = ({ children }: any) => {
     
        


    return(
        <motion.div initial='initial'  animate='animate'  exit={"fim"}  variants={animations} transition={{  duration: 1.5}}    >
          {children}
        </motion.div>

 
  
        // transition={{repeat:Infinity,delay:1,ease:"easeInOut",type:"spring"}}
    );
}

export default Animation;