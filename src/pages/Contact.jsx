import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <div id='contact' className={`app-container mt-[-160px] h-screen`}>
            <div className='grid grid-cols-1 sm:grid-cols-6 contact-top gap-4 hiding'>
                <div className='col-span-1 sm:col-span-6 pr-0 sm:pr-[250px] items-center'>
                    <TextSecurity />
                </div>

                <div className='col-span-1 sm:col-span-2  sm:col-start-2'>
                    <div className="flex justify-center items-top">
                        <img src="/images/computer-blurred.png" alt="profile picture" className='portrait-frame' />
                    </div>
                </div>
                <Card className='col-span-1 sm:col-span-2  ' style={{ borderColor: 'hsl(var(--primary))', opacity: 0.8 }}>
                    <CardHeader className="text-left list-inside">
                        <CardTitle className='text-5xl'>John Walters</CardTitle>
                        <CardDescription className='text-3xl'>Cyber Security Professional</CardDescription>
                    </CardHeader>
                    <CardContent className="text-left list-inside">
                        <h1 className='cyber-hero'>
                            With a wealth of experience in the corporate IT industry and a recent graduate from the esteemed LightHouse Labs Cyber Security Program, I am a dedicated cyber security professional with an unwavering passion for technology and security. My journey in cyber security is driven by a commitment to protecting digital landscapes and ensuring the integrity of critical information systems.
                        </h1>
                        <h2 className='cyber-subheading'>
                            My goal is to build on my past experiences and continuously expand my expertise, staying ahead of emerging threats and leveraging innovative solutions to safeguard digital assets. Explore my portfolio to learn more about my work, projects, and the unique value I bring to the cyber security landscape.
                        </h2>
                    </CardContent>
                </Card>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-6 hiding '>
                <h2 className='col-span-1 sm:col-span-6 text-center text-2xl font-bold mb-4 mt-5 text-3xl'>Featured Technology</h2>
                <Card className='col-span-1 sm:col-span-4 sm:col-start-2 company-icons' style={{ borderColor: 'hsl(var(--primary))', opacity: 0.8 }}>
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
                        {/* <li>
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
                        </li> */}
                    </ul>

                </Card>





            </div>
            <div className='grid grid-cols-1 sm:grid-cols-6 gap-4 hiding2 mt-5'>
                <div className='col-span-1 sm:col-span-4 sm:col-start-2'>
                    <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
                        {/* Card 1: Networking Fundamentals, Network Management and Security, System Logging and Troubleshooting, Monitoring and Analysis Tools */}
                        <Card className='col-span-1 sm:col-span-2' style={{ borderColor: 'hsl(var(--primary))', opacity: 0.8 }}>
                            <CardHeader>
                                <CardTitle className='text-3xl'>Core Concepts</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className='cyber-hero'>Networking Fundamentals</AccordionTrigger>
                                        <AccordionContent className='cyber-hero'>
                                            <ul className="text-left list-inside">
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
                                        <AccordionTrigger className='cyber-hero'>Network Management and Security</AccordionTrigger>
                                        <AccordionContent className='cyber-hero'>
                                            <ul className="text-left list-inside">
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
                                        <AccordionTrigger className='cyber-hero'>System Logging and Troubleshooting</AccordionTrigger>
                                        <AccordionContent className='cyber-hero'>
                                            <ul className="text-left list-inside">
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
                                        <AccordionTrigger className='cyber-hero'>Monitoring and Analysis Tools</AccordionTrigger>
                                        <AccordionContent className='cyber-hero'>
                                            <ul className="text-left list-inside">
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
                        <Card className='col-span-1 sm:col-span-2' style={{ borderColor: 'hsl(var(--primary))', opacity: 0.8 }}>
                            <CardHeader>
                                <CardTitle className='text-3xl'>Security Practices</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className='cyber-hero'>Cybersecurity Principles and Practices</AccordionTrigger>
                                        <AccordionContent className='cyber-hero'>
                                            <ul className="text-left list-inside">
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
                                        <AccordionTrigger className='cyber-hero'>Security Frameworks and Incident Management</AccordionTrigger>
                                        <AccordionContent className='cyber-hero'>
                                            <ul className="text-left list-inside">
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
            <div className='grid grid-cols-1 sm:grid-cols-6 hiding '>
                <h2 className='col-span-1 sm:col-span-6 text-center text-2xl font-bold mb-4 mt-5 text-3xl'>Security Projects/Reports</h2>
                <Card className='col-span-1 sm:col-span-4 sm:col-start-2' style={{ borderColor: 'hsl(var(--primary))', opacity: 0.8 }}>
                    <CardDescription>
                        <p>All links go to Google Drive shared links to view reports.</p>
                    </CardDescription>
                    {/* <Accordion type="single" collapsible className="w-full">
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
                            </Accordion> */}
                    <CardContent>

                        <ul>
                            <li>
                                <a href="https://docs.google.com/document/d/1S_nrPvx8RdJaRv-kp2SWk8RG5uk3ARDvrG5GUEkyeQM/edit?usp=sharing" target="_blank" className=' cyber-hero cyb-linx'>Network Administration</a>
                            </li>
                            <li>
                                <a href="https://docs.google.com/document/d/1q11tz5HIZMJ4lwQsQlZgiupe1attoESJ8StmoGKr8HQ/edit?usp=sharing" target="_blank" className='cyber-hero cyb-linx'>Report on Risk & Vulnerabilities</a>
                            </li>
                            <li>
                                <a href="https://docs.google.com/document/d/1cBO0Z6CBKflXxT0MAp5BRzX-bc6Y_koF1cTfWGuBhLw/edit?usp=sharing" target="_blank" className=' cyber-hero cyb-linx'>Log Monitoring & Workflow</a>
                            </li>
                            <li>
                                <a href="https://docs.google.com/document/d/1EeYdpWoL7vDB2YavmyCvH6rbFYq8ijCX8uxB_KQHSnI/edit?usp=sharing" target="_blank" className='cyber-hero cyb-linx'>Playbook</a>
                            </li>
                            <li>
                                <a href="https://docs.google.com/document/d/1RCPrSpQd4B_4I8P8Lu0OlcJ-bOJELfh-rEtbhJLL-Uk/edit?usp=sharing" target="_blank" className='cyber-hero cyb-linx'>Risk Management</a>
                            </li>
                            <li>
                                <a href="https://docs.google.com/document/d/1quM6y14t17ZUR27-eyEJ7oBssR2odyK3HxzUezXhha4/edit?usp=sharing" target="_blank" className='cyber-hero cyb-linx'>Vulnerabilities</a>
                            </li>
                            <li>
                                <a href="https://drive.google.com/drive/folders/15dygT5FsnLWj4RhhfHVrLHTAIuGaTyY1?usp=drive_link" target="_blank" className='cyber-hero cyb-linx'>Incident Response and Policies</a>
                            </li>
                            <li>
                                <a href="https://docs.google.com/document/d/1fRP6nMBiELla79T2VQZVW0OBZzx_NrJ10BNbJfCCHTo/edit?usp=sharing" target="_blank" className='cyber-hero cyb-linx'>Encryption</a>
                            </li>
                            <li>
                                <p>More to come..</p>
                            </li>

                        </ul>
                    </CardContent>


                </Card>
              

            </div>

            <MyThree />

        </div >
    );
}

export default Contact;
