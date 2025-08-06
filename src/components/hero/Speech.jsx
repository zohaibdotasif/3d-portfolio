import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const bubbleContainerMotionVariants = {
  animate: {
    opacity: [0, 1],
    transition: {
      duration: 1,
    },
  },
};

const Speech = () => {
  return (
    <motion.div
      variants={bubbleContainerMotionVariants}
      animate="animate"
      className="bubbleContainer"
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Same substring at the start will only be typed out once, initially",
            1000,
            "We produce food for Chinchillas",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="man.png" alt="" />
    </motion.div>
  );
};

export default Speech;
