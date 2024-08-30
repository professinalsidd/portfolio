import { useRef } from "react";
import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import "./Portfolio.scss";
import { project_items } from "../../db";

const Single = ({ item }: any) => {
  const ref: any = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.img} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.des}</p>
            <a href={item.link} target="_blank">
              See Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function PortfolioScreen() {
  const ref: any = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Project Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {project_items.map((item: any) => (
        <Single item={item} />
      ))}
    </div>
  );
}

export default PortfolioScreen;
