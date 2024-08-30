import { useRef } from "react";
import { motion } from "framer-motion";
import "./Services.scss";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function ServicesScreen() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange", scale: 1.2 }}>
              Unique{" "}
            </motion.b>{" "}
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange", scale: 1.2 }}>
              For Your{" "}
            </motion.b>{" "}
            Business.
          </h1>
          <button>What I Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "lightgray",
            color: "black",
            scale: 1.05,
          }}
        >
          <h2>Custom Web Application Development</h2>
          <ul>
            <li>
              Develop responsive and dynamic web applications using React.js.
            </li>
            <li>
              Build user-friendly interfaces with modern design principles.
            </li>
            <li>Optimize applications for maximum speed and scalability.</li>
          </ul>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "lightgray",
            color: "black",
            scale: 1.05,
          }}
        >
          <h2>Mobile Application Development</h2>
          <ul>
            <li>
              Create high-performance mobile applications using React Native.
            </li>
            <li>Ensure cross-platform compatibility (iOS and Android).</li>
            <li>
              Integrate native device features for enhanced user experience.
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "lightgray",
            color: "black",
            scale: 1.05,
          }}
        >
          <h2>UI/UX Design and Implementation</h2>
          <ul>
            <li>
              Design intuitive user interfaces with a focus on user experience.
            </li>
            <li>Implement Material UI and other design frameworks.</li>
            <li>Conduct usability testing and incorporate user feedback.</li>
          </ul>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "lightgray",
            color: "black",
            scale: 1.05,
          }}
        >
          <h2>Component-Based Development</h2>
          <ul>
            <li>
              Develop reusable and modular components for efficient development.
            </li>
            <li>Maintain code quality and consistency across projects.</li>
            <li>
              Utilize state management libraries like Redux for complex
              applications.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ServicesScreen;
