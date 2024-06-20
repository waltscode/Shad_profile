import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';


export function AboutMe() {

    return (
        <div id="about">

            <div className="app-container md:mr-20 md:ml-20 md:mb-20 " >
                <div className="grid md:grid-cols-2  sm:grid-cols-1" >
                    <div className="col-span-1">
                        <Card className="text-left m-3" style={{ borderColor: 'hsl(var(--primary))' }}>
                            <CardHeader>
                                <CardTitle className="text-3xl"></CardTitle>
                                <img src="images/subway3small.png" alt="" />

                            </CardHeader>
                            <CardContent>

                            </CardContent>
                        </Card>
                    </div>

                    <div className="col-span-1 m-3 ">
                        <Card className="text-left mb-2" style={{ borderColor: 'hsl(var(--primary))' }}>
                            <CardHeader>
                                <CardTitle className="text-3xl">Thank you for visiting my portfolio!</CardTitle>

                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-2xl">A little bit more about me:</CardDescription>
                                <p style={{ marginBottom: '20px' }}>I am proud to say that I have recently graduated from the University of Toronto School of Continuing Studies Full-Stack Web Development bootcamp. It was a great way to collaborate with others in my field of interest and get hands-on knowledge that otherwise, would have proven difficult. </p>
                                <p>I am a junior developer with an ambition for tech and coding. I really enjoy building things from the ground up and learning new skills along the way! I am recently engaged to my now fiance of 6 years and am excited about the future. It is my goal to advance my career and build a better life for my future family. I do, and will continue, to work hard everyday moving in a positive direction. </p>
                            </CardContent>
                        </Card>
                        <Card className="text-left" style={{ borderColor: 'hsl(var(--primary))' }}>
                            <CardHeader>
                                <CardTitle className="text-3xl">Career Experience</CardTitle>

                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-2xl">Relevant/Recent Roles:</CardDescription>
                                <p style={{ marginBottom: '20px' }}>With over five years of combined experience in technology and business studies, I embarked on a career path in IT Operations. Over the next four years, I provided comprehensive internal IT support across diverse departments for TD Bank. It is important to note we were the only IT department for the entire bank and it's employees, servicing issues of all kinds. Some of my duties include but are not limited to: </p>
                                <ul className="list-disc pl-3.5">
                                    <li>Sole internal helpdesk for the entire bank, supporting diverse departments.</li>
                                    <li>Skilled agent training new recruits.</li>
                                    <li>Proficient in remote client computer control and timely issue resolution.</li>
                                    <li>Large-scale outage reporting using ServiceNow</li>
                                    <li>Proficient diagnosing and troubleshooting Microsoft OS and an extensive range of software</li>
                                    <li>Skilled in Cisco tools both soft-phones and hard-phones.</li>
                                    <li>Daily use of Active Roles for account provisioning and ServiceNow for ticketing.</li>
                                    <li>Proficient in setting up mobile devices (iOS, Android) for personal and corporate use.</li>
                                    <li>Microsoft Azure account management and Adobe Creative Cloud software knowledge.</li>
                                    <li>Hardware troubleshooting including printers, laptops, modems, etc.</li>
                                    <li>Familiarity with internal mainframe systems and password sync tools.</li>
                                    <li>Knowledgeable in company privacy, theft, and security protocols.</li>
                                    <li>Educated and empowered users on security and future troubleshooting requirements.</li>
                                    <li>Single-Sign-On technology along with MFA familiarity and administration</li>
                                    <li>RSA token support and password assistance for various programs.</li>
                                    <li>Installation of software and deployment tools.</li>
                                    <li>Wide range of hardware troubleshooting and set-ups</li>
                                    <li>Remote access and VPN diagnostics and compliance</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AboutMe;