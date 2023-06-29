import { motion, useCycle } from 'framer-motion';

const loaderVariants = {
   animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
         // setting properties with the same @keyframe names as above, allows you to set separate transitions
         x: {
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 0.5,
            ease: 'easeOut'
         },
         y: {
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 0.25,
            ease: 'easeOut'
         }
      }
   },
   animationTwo: {
      x: 0,
      y: [0, -40],
      transition: {
         y: {
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 0.50,
            ease: 'easeInOut'
         }
      }
   }
};

const Loader = () => {
   const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');
   return (
      <>
         <motion.div className='loader'
            variants={loaderVariants}
            animate={animation}
         >

         </motion.div>
         <div onClick={() => cycleAnimation()}>Cycle Loader</div>
      </>
   )
}

export default Loader