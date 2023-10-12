import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout }  from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import './global.css';

 



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return(
   <AnimatePresence mode='wait'>
    <motion.div key={router.pathname}>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <motion.div
        className='slide-in'
        initial={{scaleY: 0}}
        animate={{scaleY: 0}}
        exit={{scaleY: 1}}
        transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
      ></motion.div>

      <motion.div
        className='slide-out'
        initial={{scaleY: 1}}
        animate={{scaleY: 0}}
        exit={{scaleY: 0}}
        transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
      ></motion.div>
     
    </motion.div>
   </AnimatePresence>
  );
}

export default MyApp
