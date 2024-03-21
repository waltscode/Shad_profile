import React, { useEffect } from 'react';
import MyThree from '../components/comps/three'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../components/ui/card';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '../components/ui/accordion'

export function Contact() {

    return (
        <div id="contact">
            <h1>Get in touch</h1>
            
            <MyThree />
        </div>
    );
}

export default Contact;
