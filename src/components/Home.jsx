import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

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

const containerVariants = {
   mount: {
      opacity: 0,
   },
   animation: {
      opacity: 1,
      transition: {
         delay: 1,
         duration: 1.5,
      }
   },
   unmount: {
      x: '-100vw',
      transition: { ease: 'easeInOut' }
   }
};

const Home = () => {
   return (
      <motion.div className="home container"
         variants={containerVariants}
         initial='mount'
         animate='animation'
         exit='unmount'
      >
         <h2>
            Welcome to Pizza Joint
         </h2>
         <Link to="/base">
            <motion.button
               variants={buttonVariants}
               whileHover='onHover'
            >
               Create Your Pizza
            </motion.button>
         </Link>
         <Loader />
      </motion.div>
   )
}

export default Home;