import { motion } from "framer-motion";

const variants: any = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants: any = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

function Links() {
  const items = ["HomePage", "Services", "Portfolio", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {items?.map((item: any) => (
        <motion.a
          key={item}
          href={`#${item}`}
          variants={itemVariants}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.05 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default Links;
