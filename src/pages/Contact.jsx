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
import Footer from '@/components/comps/footer';

export function Contact() {

    return (
        <div id='contact' className={`app-container md:mr-20 md:ml-20 md:mb-20 h-screen`}>
    <div className='grid grid-cols-6 contact-top'>
        <div className='col-span-1'>
            <Card className="text-left">
                <CardHeader>
                    <CardTitle className='text-3xl'>STAY TUNED</CardTitle>
                    <CardDescription className='text-xl'></CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Card content */}
                </CardContent>
            </Card>
        </div>
        <div className='col-span-1'>
            <Card className="text-left">
                <CardHeader>
                    <CardTitle className='text-3xl'>links can be found on home page</CardTitle>
                    <CardDescription className='text-xl'></CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Card content */}
                </CardContent>
            </Card>
        </div>
        
       
    </div>
    <MyThree />
   
</div>
    );
}

export default Contact;
