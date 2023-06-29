import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// pre-defined properties that can be referenced once they're set as 'variants' to an element
const buttonVariants = {
   onHover: {
      // scale: [
      //    1,
      //    1.1,
      //    1,
      //    1.1,
      //    1,
      //    1.1],             // this @keygram is set by passing an array of values to desired property, but it does have an end
      scale: 1.1,             // on hover the element's scale will be affected
      transition: {
         duration: 0.3,       // required if using 'repeat'
         repeat: Infinity,    // will switch between element's default scale value and onHover scale value indefinitely
         // repeat: 10        // will switch between element's default scale value and onHover scale value 10 times
         repeatType: 'reverse'      // plays forwards then backwards, by default it's 'loop', the other option would be 'mirror'
      },
      boxShadow: '0px 0px 8px rgb(255, 255, 255)',
   }
};

const Button = ({ nextStep, text }) => {
   return (
      <motion.div className="next"
         initial={{ x: '100vw' }}
         animate={{ x: 0 }}
         transition={{ type: 'tween' }}
      >
         <Link to={'/' + nextStep}>
            <motion.button
               variants={buttonVariants}
               whileHover='onHover'
            >
               {text}
            </motion.button>
         </Link>
      </motion.div>
   )
};

export default Button;