import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

import downArrow from "../assets/images/arrow-down.png";
const AccordionContent = ({ items }) => {
    return (
        <Accordion>
            {items.map((item, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                    <Accordion.Header>
                        {item.title}
                    </Accordion.Header>
                    <Accordion.Body>
                        {item.content}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};

export default AccordionContent;