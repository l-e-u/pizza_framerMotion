import RestartButton from './Button';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
   mount: { opacity: 0 },
   animation: { opacity: 1 }
};

const modal = {
   mount: {
      y: '-100vh',
      opacity: 0
   },
   animation: {
      y: '200px',
      opacity: 1,
      transition: { delay: 0.5 }
   }
};

// Appears some time after order has been place, every time a page is switched via the browser arrows, the modal show is set to false
const Modal = ({ showModal }) => {
   return (
      <AnimatePresence mode='wait'>
         {showModal &&
            <motion.div
               className='backdrop'
               variants={backdropVariants}
               initial='mount'
               animate='animation'
               exit='mount'
            >
               <motion.div className='modal'
                  variants={modal}
               >
                  <p>Want to make another pizza?</p>
                  <RestartButton nextStep='' text='Start Again' />
               </motion.div>
            </motion.div>
         }
      </AnimatePresence>
   )
};

export default Modal;