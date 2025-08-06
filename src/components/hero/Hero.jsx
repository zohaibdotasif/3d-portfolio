import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Shape from "./Shape";

const heroTitleMotionVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const awardMotionVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggeredChildren: 0.2,
    },
  },
};

const scrollMotionVariants = {
  animate: {
    y: [0, 5],
    opacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
    },
  },
};

const scrollPathMotionVariants = {
  animate: {
    y: [0, 5],
    transition: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
    },
  },
};

const followMotionVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggeredChildren: 0.2,
    },
  },
};

const certificateMotionVariants = {
  animate: {
    opacity: [0, 1],
    transition: {
      duration: 1,
    },
  },
};

const contactLinkMotionVariants = {
  animate: {
    x: [200, 0],
    opacity: [0, 1],
    transition: {
      duration: 2,
    },
  },
};

const contactButtonMotionVariants = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      {/* LEFT */}
      <div className="heroSection left">
        {/* Title */}
        <motion.h1
          variants={heroTitleMotionVariants}
          initial="initial"
          animate="animate"
          className="heroTitle"
        >
          Hey There,
          <br />
          <span>I'm Zohaib!</span>
        </motion.h1>

        {/* Awards */}
        <motion.div
          variants={awardMotionVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardMotionVariants}>
            Top Rated Designer
          </motion.h2>
          <motion.p variants={awardMotionVariants}>
            Lorem Ipsum dolor sit amet, constructor adipiscing elit.
          </motion.p>
          <motion.div variants={awardMotionVariants} className="awardList">
            <motion.img
              variants={awardMotionVariants}
              src="award1.png"
              alt=""
            />
            <motion.img
              variants={awardMotionVariants}
              src="award2.png"
              alt=""
            />
            <motion.img
              variants={awardMotionVariants}
              src="award3.png"
              alt=""
            />
          </motion.div>
        </motion.div>

        {/* Scroll SVG */}
        <motion.a
          variants={scrollMotionVariants}
          animate="animate"
          href="/#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              variants={scrollPathMotionVariants}
              animate="animate"
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>

      {/* RIGHT */}
      <div className="heroSection right">
        {/* Follow */}
        <motion.div
          variants={followMotionVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followMotionVariants} href="/">
            <img src="instagram.png" alt="" />
          </motion.a>
          <motion.a variants={followMotionVariants} href="/">
            <img src="facebook.png" alt="" />
          </motion.a>
          <motion.a variants={followMotionVariants} href="/">
            <img src="youtube.png" alt="" />
          </motion.a>
          <motion.div
            variants={followMotionVariants}
            className="followTextContainer"
          >
            <div className="followText">FOLLOW ME</div>
          </motion.div>
        </motion.div>

        {/* Bubble */}
        <Speech />

        {/* Certificate */}
        <motion.div
          variants={certificateMotionVariants}
          animate="animate"
          className="certificate"
        >
          <img src="certificate.png" alt="" />
          LMA CERTIFIED <br /> PROFESSIONAL <br /> UI DESIGNER
        </motion.div>

        {/* Contact Button*/}
        <motion.a
          variants={contactLinkMotionVariants}
          animate="animate"
          href="/#contact"
          className="contactLink"
        >
          <motion.div
            variants={contactButtonMotionVariants}
            animate="animate"
            className="contactButton"
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>

            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>

      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="heroImage">
          <img src="hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
