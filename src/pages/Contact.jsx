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
import { Python, Ubuntu, Kali, Bash, Windows, Linux, Wireshark, PrtgTools } from '../components/comps/icons'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../components/ui/hover-card';


export function Contact() {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hiding');
        hiddenElements.forEach(element => {
            observer.observe(element);
        });

        const hiddenElements2 = document.querySelectorAll('.hiding2');
        hiddenElements2.forEach(element => {
            observer.observe(element);
        });


        return () => {
            hiddenElements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div id='contact' className={`app-container mr-20 ml-20 mb-20 mt-[-160px] h-screen`}>
            <div className='grid grid-cols-1 sm:grid-cols-6 contact-top gap-4 hiding'>
                <div className='col-span-1 sm:col-span-6 pr-0 sm:pr-[250px] items-center'>
                    <TextSecurity />
                </div>

                <div className='col-span-1 sm:col-span-2  sm:col-start-2'>
                    <div className="flex justify-center items-top">
                        <img src="/images/computer-blurred.png" alt="profile picture" className='portrait-frame' />
                    </div>
                </div>
                <Card className='col-span-1 sm:col-span-2  '  style={{ borderColor: 'hsl(var(--primary))', opacity: 0.8 }}>
                    <CardHeader >
                        <CardTitle className='text-5xl'>John Walters</CardTitle>
                        <CardDescription className='text-3xl'>Cyber Security Professional</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h1 className='text-2xl'>Welcome to my cyber security page! I am a cyber security professional with a passion for technology and security. I have experience in a variety of security tools and technologies, and I am always looking to learn more. I am currently working on my OSCP certification and I am always looking for new challenges. I am also a big fan of open source software and I am always looking for new ways to contribute to the community. If you have any questions or would like to get in touch, please feel free to reach out to me. I look forward to hearing from you!
                        </h1>
                    </CardContent>
                </Card>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-6 hiding '>
                <h2 className='col-span-1 sm:col-span-6 text-center text-2xl font-bold mb-4 mt-5 text-3xl'>Featured Technology</h2>
                <Card className='col-span-1 sm:col-span-4 sm:col-start-2 company-icons' style={{ borderColor: 'hsl(var(--primary))' ,opacity: 0.8 }}>
                    <ul className="company-icons flex flex-wrap justify-center">
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <Python />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <p>Python</p>
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <Ubuntu />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <p>Ubuntu</p>
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <Kali />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <p>Kali Linux</p>
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <Bash />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <p>BASH</p>
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <Windows />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <p>Microsoft Windows</p>
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        {/* <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <Linux />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <p>Linux</p>
                                </HoverCardContent>
                            </HoverCard>
                        </li> */}
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <Wireshark />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <p>Wireshark</p>
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <PrtgTools />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <p>Paessler PRTG</p>
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                    </ul>

                </Card>





            </div>
            <div className='grid grid-cols-1 sm:grid-cols-6 gap-4 hiding2'>
                <div className='col-span-1 sm:col-span-4 sm:col-start-2'>
                    <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
                        {/* Card 1: Networking Fundamentals, Network Management and Security, System Logging and Troubleshooting, Monitoring and Analysis Tools */}
                        <Card className='col-span-1 sm:col-span-2' style={{ borderColor: 'hsl(var(--primary))', opacity: 0.8  }}>
                            <CardHeader>
                                <CardTitle className='text-3xl'>Core Concepts</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Networking Fundamentals</AccordionTrigger>
                                        <AccordionContent>
                                            <ul>
                                                <li>
                                                    <li>Linux Processes</li>
                                                    <li>OSI Layer Models</li>
                                                    <li>Packets on the Network</li>
                                                    <li>IPv4 and IPv6</li>
                                                    <li>Network vs Broadcast vs Host Addresses</li>
                                                    <li>ARP, TCP, HTTP, HTTPS, TLS & SSL</li>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Network Management and Security</AccordionTrigger>
                                        <AccordionContent>
                                            <ul>
                                                <li>
                                                    <li>Network Segmentation</li>
                                                    <li>Firewall Technology</li>
                                                    <li>VPN Technology</li>
                                                    <li>IPsec VPN</li>
                                                    <li>Network Baselines</li>
                                                    <li>Traffic Monitoring</li>
                                                    <li>Network Monitoring with Wireshark</li>
                                                    <li>Wireshark Blackbox/Whitebox Analyses</li>
                                                    <li>Nmap Scanning</li>
                                                    <li>OpenVAS - Greenbone</li>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>System Logging and Troubleshooting</AccordionTrigger>
                                        <AccordionContent>
                                            <ul>
                                                <li>
                                                    <li>Windows Logging</li>
                                                    <li>Linux Logging</li>
                                                    <li>Windows Event Viewer</li>
                                                    <li>Troubleshooting Approaches</li>
                                                    <li>Terminal Commands - Windows and Linux</li>
                                                    <li>Regex Querying</li>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>Monitoring and Analysis Tools</AccordionTrigger>
                                        <AccordionContent>
                                            <ul>
                                                <li>
                                                    <li>Paessler PRTG</li>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>

                        {/* Card 2: Cybersecurity Principles and Practices, Security Frameworks and Incident Management */}
                        <Card className='col-span-1 sm:col-span-2' style={{ borderColor: 'hsl(var(--primary))' , opacity: 0.8 }}>
                            <CardHeader>
                                <CardTitle className='text-3xl'>Security Practices</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Cybersecurity Principles and Practices</AccordionTrigger>
                                        <AccordionContent>
                                            <ul>
                                                <li>
                                                    <li>Risk/Vulnerability Order of Importance</li>
                                                    <li>Threat Landscape</li>
                                                    <li>Cryptography</li>
                                                    <li>Cleopatra PGP Encryption</li>
                                                    <li>Symmetric and Asymmetric Encryption</li>
                                                    <li>Hashing</li>
                                                    <li>IoCs, Logs, Thresholds, and Alerts</li>
                                                    <li>Playbooks</li>
                                                    <li>Risk Assessment Table</li>
                                                    <li>GRC Management</li>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Security Frameworks and Incident Management</AccordionTrigger>
                                        <AccordionContent>
                                            <ul>
                                                <li>
                                                    <li>Security Frameworks</li>
                                                    <li>Incident Management</li>
                                                    <li>Incident Response</li>
                                                    <li>Incident Handling</li>
                                                    <li>Incident Recovery</li>
                                                    <li>Incident Reporting</li>
                                                    <li>NIST RMF</li>
                                                    <li>NIST NVD and CVSS</li>
                                                    <li>NIST 7 Step Process</li>
                                                    <li>MITRE ATT&CK Framework</li>
                                                    <li>SOC Teams</li>
                                                    <li>CSIRT</li>
                                                    <li>Threat Intelligence</li>
                                                    <li>Escalations</li>
                                                    <li>Cyber Kill Chain</li>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <MyThree />

        </div >
    );
}

export default Contact;
