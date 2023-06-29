import { useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
   mount: {
      x: '100vw',
      opacity: 0,
   },
   animation: {
      opacity: 1,
      x: 0,
      transition: {
         type: 'spring',
         mass: 0.4,                 // for spring only, gives the element weight
         damping: 8,                // for spring only, sets the resistance for the bounce back
         when: 'beforeChildren',    // completes first, then the children
         staggerChildren: 0.4       // delay time for next child animation to fire
      }
   },
   unmount: {
      x: '-100vw',
      transition: { ease: 'easeInOut' }
   }
};

// names of variants (ex. initial == 'mount' & animate == 'animation') have been set in the parent element
const childVariants = {
   mount: {
      opacity: 0
   },
   animation: {
      opacity: 1
   }
};

const Order = ({ pizza, setShowModal }) => {
   useEffect(() => {
      const timeoutID = setTimeout(() => {
         setShowModal(true);
      }, 5000);

      return () => clearTimeout(timeoutID);
   }, [setShowModal]);

   return (
      <motion.div className="container order"
         variants={containerVariants}
         initial='mount'
         animate='animation'
         exit='unmount'
      >
         <h2>Thank you for your order :</h2>
         <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
         <motion.div variants={childVariants}>
            {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
         </motion.div>
      </motion.div>
   )
};

export default Order;