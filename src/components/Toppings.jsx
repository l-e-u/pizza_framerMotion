import { motion } from 'framer-motion';
import NextStepButton from './Button';

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
         delay: 0.5
      }
   },
   unmount: {
      x: '-100vw',
      transition: { ease: 'easeInOut' }
   }
};

const Toppings = ({ addTopping, pizza }) => {
   let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

   return (
      <motion.div className="toppings container"
         variants={containerVariants}
         initial='mount'
         animate='animation'
         exit='unmount'
      >

         <h3>Step 2: Choose Toppings</h3>
         <ul>
            {toppings.map(topping => {
               let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
               return (
                  <motion.li key={topping} onClick={() => addTopping(topping)}
                     whileHover={{
                        color: '#eee8aa',
                        scale: 1.3,
                        originX: 0
                     }}
                     transition={{ type: 'spring', stiffness: 300 }}
                  >
                     <span className={spanClass}>{topping}</span>
                  </motion.li>
               )
            })}
         </ul>

         {(pizza.toppings.length > 0) &&
            <NextStepButton nextStep='order' text='Order' />
         }

      </motion.div>
   )
}

export default Toppings;