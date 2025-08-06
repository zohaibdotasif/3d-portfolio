import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    id: 1,
    img: "p1.jpg",
    title: "Full Stack Blog Application",
    desc: "lorem ipsum, dolor sit amet consecterur adipiscing elit.",
    link: "/",
  },
  {
    id: 2,
    img: "p2.jpg",
    title: "School Management System",
    desc: "lorem ipsum, dolor sit amet consecterur adipiscing elit.",
    link: "/",
  },
  {
    id: 3,
    img: "p3.jpg",
    title: "Real-time Chat Application",
    desc: "lorem ipsum, dolor sit amet consecterur adipiscing elit.",
    link: "/",
  },
  {
    id: 4,
    img: "p4.jpg",
    title: "Social Media Project",
    desc: "lorem ipsum, dolor sit amet consecterur adipiscing elit.",
    link: "/",
  },
  {
    id: 5,
    img: "p5.jpg",
    title: "Animated Portfolio Website",
    desc: "lorem ipsum, dolor sit amet consecterur adipiscing elit.",
    link: "/",
  },
];

const imageMotionVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textMotionVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="portfolioItem" ref={ref}>
      <motion.div
        variants={imageMotionVariants}
        animate={isInView ? "animate" : "initial"}
        className="portfolioImage"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textMotionVariants}
        animate={isInView ? "animate" : "initial"}
        className="portfolioText"
      >
        <motion.h1 variants={textMotionVariants}>{item.title}</motion.h1>
        <motion.p variants={textMotionVariants}>{item.desc}</motion.p>
        <motion.a variants={textMotionVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);
  const { scrollYProgress } = useScroll({ target: ref });
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="portfolioList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{ width: window.innerWidth - containerDistance }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="portfolioProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx={80}
            cy={80}
            r={70}
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />

          <motion.circle
            cx={80}
            cy={80}
            r={70}
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
