import "./navbar.scss";
import { motion } from "framer-motion";
import SideBar from "../sidebar/Sidebar";
import FB from "../../../assets/facebook.png";
import Inst from "../../../assets/instagram.png";

function NavBarScreen() {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Siddharth Jain
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/sidd.jain.90">
            <img src={FB} alt="fb" />
          </a>
          <a href="https://www.instagram.com/call_sidd/">
            <img src={Inst} alt="in" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBarScreen;
