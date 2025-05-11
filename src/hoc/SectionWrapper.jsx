import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}  // Changed from 0.25 to 0.1
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        style={{ scrollMarginTop: "100px" }}  // Added scroll margin
      >
        <span 
          className='hash-span' 
          id={idName}
          style={{ top: "-50px" }}  // Added inline style for precise positioning
        >
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;