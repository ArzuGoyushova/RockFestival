import React, { useState } from 'react';

function Accordion() {
    const accordionItems = [
        { title: 'Where is the festival location?', content: 'The concept caught fire and spread quickly as rock festivals took on a unique identity and attracted significant media attention around the world.' },
        { title: 'When will the ticket sale start?', content: '1st of May.' },
        { title: 'Can we bring our food?', content: 'Yes, you can!' },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
      };
      
    const isMobile = window.innerWidth <= 576;

    return (
        <section id="faq">
            <div className="faq-content container">
                <div className="title col-8">
                {isMobile ? (
                    <h1 className="display-5">FAQ</h1>
                ) : (
                    <h1 className="display-5">Frequently Asked Questions?</h1>
                ) }
                </div>
            </div>

            <div className='container'>
                {accordionItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <button
                            className={`accordion ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => handleAccordionClick( index)}

                        >
                            {item.title}
                        </button>
                        <div className={`panel col-12 col-sm-7 ${activeIndex === index ? 'active' : ''}`}>
                            <p className="opacity-medium">{item.content}</p>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}

export default Accordion;
