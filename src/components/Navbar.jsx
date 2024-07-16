import logo from "../assets/My Logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <nav className="mb-10 flex items-center justify-between py-6">
            <motion.div 
                className="flex flex-shrink-0 items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <img className="mx-0 w-40" src={logo} alt="logo" />
            </motion.div>

            <motion.div 
                className="m-8 flex items-center justify-center gap-4 text-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.a 
                    href="https://www.linkedin.com/in/saidulalom/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaLinkedin />
                </motion.a>
                <motion.a 
                    href="https://github.com/SaidulAlom" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaGithub />
                </motion.a>
                <motion.a 
                    href="https://x.com/S_Alom_83" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaSquareXTwitter />
                </motion.a>
                <motion.a 
                    href="https://www.instagram.com/s_alom_17/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaInstagram />
                </motion.a>
                <motion.a 
                    href="https://www.facebook.com/S.Alom.17/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaFacebook />
                </motion.a>
            </motion.div>
        </nav>
    );
}

export default Navbar;
