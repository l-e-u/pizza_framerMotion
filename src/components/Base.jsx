import { motion } from 'framer-motion';

// components
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

const Base = ({ addBase, pizza }) => {
   const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

   return (
      <motion.div className="base container"
         variants={containerVariants}
         initial='mount'
         animate='animation'
         exit='unmount'
      >

         <h3>Step 1: Choose Your Base</h3>
         <ul>
            {bases.map(base => {
               let spanClass = pizza.base === base ? 'active' : '';
               return (
                  <motion.li key={base} onClick={() => addBase(base)}
                     whileHover={{
                        color: '#eee8aa',
                        scale: 1.3,
                        originX: 0
                     }}
                     transition={{ type: 'spring', stiffness: 300 }}
                  >
                     <span className={spanClass}>{base}</span>
                  </motion.li>
               )
            })}
         </ul>

         {pizza.base && (
            <NextStepButton nextStep='toppings' text='Next' />
         )}

      </motion.div>
   )
}

export default Base;