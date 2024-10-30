
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavComp } from '../authentication/NavComp'; 
import './contactus.css';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
        setName('');
        setEmail('');
        setMessage('');
        alert('Thank you for contacting us!');
    };

    return (
        <div className="container contact-container">
         
            <motion.h1 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="contact-title"
            >
                Contact Us
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
                className="contact-intro"
            >
                We at GEMS LK are here to support you. Whether you have questions about our gem auctions, need assistance 
                with bidding, or want to know more about our products, our dedicated support team is here to help. 
                Reach out to us anytime; we look forward to assisting you!
            </motion.p>
            
            <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5, delay: 0.4 }}
                className="contact-form"
            >
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                        className="form-control" 
                        id="message" 
                        rows="4" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    ></textarea>
                </div>
                
                <motion.button 
                    type="submit" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="btn-submit-button"
                 >
                    Submit
                </motion.button>


            </motion.form>
        </div>
    );
};

export default ContactUs;
