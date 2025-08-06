import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const form = useRef();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
        }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="contact" ref={ref}>
      <div className="contactSection">
        <motion.form
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          ref={form}
          onSubmit={sendEmail}
        >
          <motion.h1 variants={listVariants} className="contactTitle">
            Let's keep in touch
          </motion.h1>

          <motion.div variants={listVariants} className="formItem">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Don Joe" name="name" id="name" />
          </motion.div>

          <motion.div variants={listVariants} className="formItem">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="donjoe@gmail.com"
              name="email"
              id="email"
            />
          </motion.div>

          <motion.div variants={listVariants} className="formItem">
            <label htmlFor="message">Message</label>
            <textarea
              rows={10}
              placeholder="Write your message..."
              name="message"
              id="message"
            ></textarea>
          </motion.div>

          <motion.button variants={listVariants} className="formButton">
            Send
          </motion.button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
      </div>

      <div className="contactSection">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;
