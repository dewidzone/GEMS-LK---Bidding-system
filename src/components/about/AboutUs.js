
import React from 'react';
import { motion } from 'framer-motion';
import { NavComp } from '../authentication/NavComp'; 
import logoImg from '../../assets/img.jpg'; 
import './aboutus.css'; 

const AboutUs = () => {
    const typingAnimation = {
        hidden: { opacity: 0, width: 0 },
        visible: { opacity: 1, width: "auto" },
    };

    return (
        <div>
       
            <div className="container about-container">
                <motion.img 
                    src={logoImg} 
                    alt="GEMS LK" 
                    className="about-image" 
                 
                />
                <div className="about-text">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5 }}
                    >
                        About Us
                    </motion.h1>
                    <motion.p 
                        initial="hidden" 
                        animate="visible"
                        variants={typingAnimation}
                        transition={{ duration: 2, delay: 1 }}
                    >
                        Welcome to GEMS LK! We are a premier online auction platform dedicated to offering the finest selection of gems. 
                        Our mission is to provide gem enthusiasts and collectors with a transparent and exciting bidding experience.
                    </motion.p>
                    <motion.p 
                        initial="hidden" 
                        animate="visible"
                        variants={typingAnimation}
                        transition={{ duration: 3, delay: 2 }}
                    >
                        At GEMS LK, we pride ourselves on the quality of our gems. Each gem is carefully sourced and vetted 
                        to ensure authenticity and quality. Our auctions are designed to be fair and engaging, allowing you to 
                        bid on exquisite pieces at competitive prices.
                    </motion.p>
                    <motion.p 
                        initial="hidden" 
                        animate="visible"
                        variants={typingAnimation}
                        transition={{ duration: 4, delay: 3 }}
                    >
                        Join us in the world of gems, where every piece tells a story and every bid is an opportunity. 
                        Thank you for choosing GEMS LK!
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
