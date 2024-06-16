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
import { TextSecurity } from '../components/comps/security-text';
import '../assets/css/cyber.css'


export function Contact() {

    return (
        <div id='contact' className={`app-container mr-20 ml-20 mb-20 mt-[-160px] h-screen`}>

            <div className='grid grid-cols-6 contact-top'>
                <div className='col-span-6 pr-[250px]'>
                    <TextSecurity />
                </div>
                <div className='col-span-3'>
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
                <div className='col-span-3'>
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
