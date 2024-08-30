import Image from "../../../assets/about.png";
import Scroll from "../../../assets/scroll.png";
import CursorComp from "../../../components/cursor/Cursor";
import NavBarScreen from "../navbar/navbar";
import "./HomeScreen.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButtons: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants: any = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

function HomeScreen() {
  return (
    <>
      <CursorComp />
      <div>
        <section id="HomePage">
          <NavBarScreen />
          <div className="homePage">
            <div className="wrapper">
              <motion.div
                className="textContainer"
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                <motion.h2 variants={textVariants}>Siddharth Jain</motion.h2>
                <motion.h1 variants={textVariants}>
                  passionate frontend developer
                </motion.h1>
                <motion.img
                  variants={textVariants}
                  animate="scrollButtons"
                  src={Scroll}
                  alt="scroll"
                />
              </motion.div>
            </div>
            <motion.div
              className="sliderTextContainer"
              variants={sliderVariants}
              initial="initial"
              animate="animate"
            >
              Freelancer or Full Time Software developer
            </motion.div>
            <div className="imageContainer">
              <img src={Image} alt="logo" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomeScreen;
