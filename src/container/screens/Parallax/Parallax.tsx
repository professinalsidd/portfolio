import { useRef } from "react";
import "./Parallax.scss";
import { motion, useTransform, useScroll, MotionStyle } from "framer-motion";
import PlantImg from "../../../assets/planets.png";
import SunImg from "../../../assets/sun.png";

function ParallaxScreen({ type }: any) {
  const ref: any = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What I Do?" : "What I Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={
          {
            y: ybg,
            backgroundImage: `url(${type === "services" ? PlantImg : SunImg})`,
          } as MotionStyle
        }
        className="planets"
      ></motion.div>
      <motion.div style={{ x: ybg }} className="stars"></motion.div>
    </div>
  );
}

export default ParallaxScreen;
