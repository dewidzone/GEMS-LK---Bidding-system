
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './stylesfaqs.css';

const FAQs = () => {
    const faqData = [
        {
            question: "What is GEMS LK?",
            answer: "GEMS LK is an online auction platform dedicated to selling exquisite gems through a bidding process."
        },
        {
            question: "How does the bidding process work?",
            answer: "Users can place bids on gems during the auction period. The highest bidder at the end of the auction wins the gem."
        },
        {
            question: "Are the gems authentic?",
            answer: "Yes, all our gems are carefully sourced and authenticated to ensure quality and legitimacy."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can contact our customer support through the Contact Us page or via email at support@gemslk.com."
        },
        {
            question: "Can I return a gem after purchase?",
            answer: "Our return policy is outlined in the Terms and Conditions section. Please review it for details."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-container">
                {faqData.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div 
                            className="faq-question"
                            onClick={() => toggleAccordion(index)}
                            style={{ cursor: 'pointer', padding: '10px', background: '#f1f1f1', margin: '5px 0', borderRadius: '5px' }}
                        >
                            {faq.question}
                        </div>
                        <motion.div
                            initial={false}
                            animate={{ height: openIndex === index ? 'auto' : '0' }}
                            transition={{ duration: 0.3 }}
                            className="faq-answer"
                            style={{ overflow: 'hidden' }}
                        >
                            <div style={{ padding: '10px' }}>
                                {faq.answer}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
