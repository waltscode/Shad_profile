import React, { useEffect } from 'react';
import { useTheme } from '../components/ui/theme-provider';
import { Link } from 'react-router-dom';
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
import { Express, Html5W, Css3W, JavascriptW, NodewebkitW, UilReactW, FigmaW, TailwindW, Bootstrap, Handlebars, Netlify, Heroku, InsomniaW, JqueryW, MongodbW, MongooseW, MysqlW, SequelizeW, NodejsW, ViteW, GraphqlW, ApolloW, GithubW, Javascript2W, OpenmojiPolarExplorer } from '../components/comps/icons'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '../components/ui/hover-card';
import { TextX } from '../components/comps/text-change';


export default function Home() {
    const { theme } = useTheme();
    const preventDefault = (event) => {
        event.preventDefault();
    };
    useEffect(() => {
        const removeClassesOnSmallScreens = () => {
            if (window.innerWidth <= 767) {
                const hidingElements = document.querySelectorAll('.hiding');
                hidingElements.forEach(element => {
                    element.classList.remove('hiding');
                });

                const hiding2Elements = document.querySelectorAll('.hiding2');
                hiding2Elements.forEach(element => {
                    element.classList.remove('hiding2');
                });
            }
        };

        window.addEventListener('resize', removeClassesOnSmallScreens);


        return () => {
            window.removeEventListener('resize', removeClassesOnSmallScreens);
        };


    }, []);

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
        <div id="about" className={`app-container   md:mr-20 md:ml-20 md:mb-20 ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>

            <div className="grid  md:grid-cols-2 gap-4 hiding2 md:mt-0  md:h-screen ">
                <div className='hero'>
                    <div className="items-center sm:mb-6 md:mb-20">
                        <TextX />
                    </div>
                    <div className="flex justify-center items-top ">
                        <img src="/images/DSC_9354.JPG" alt="profile picture" className="blob-effect" />
                    </div>
                </div>

                <Card className="text-left  md:m-36  " style={{ borderColor: 'hsl(var(--primary))' }}>
                    <CardHeader >
                        <CardTitle className='text-5xl'>John Walters</CardTitle>
                        <CardDescription className='text-2xl'>Full-Stack Web Developer</CardDescription>
                    </CardHeader>
                    <CardContent>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Experience</AccordionTrigger>
                                <AccordionContent>
                                    I am a junior full-stack web developer who recently completed a comprehensive full-stack web development bootcamp at the University of Toronto. With a rich background in IT spanning several years, technology is my passion and I love to learn new systems.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Goals</AccordionTrigger>
                                <AccordionContent>
                                    It is my ambition to elevate my career and collaborate on an innovative team creating new apps and really hone my skills in the field.

                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>My Stack</AccordionTrigger>
                                <AccordionContent>
                                    <p className='mb-2'>Efficiently versed in the MERN stack. </p>
                                    <ul className='list-disc pl-3.5'>
                                        <li><span style={{ color: 'hsl(var(--primary))' }}>M</span>ongoDB/MySql</li>
                                        <li><span style={{ color: 'hsl(var(--primary))' }}>E</span>xpress.js</li>
                                        <li><span style={{ color: 'hsl(var(--primary))' }}>R</span>eact.js</li>
                                        <li><span style={{ color: 'hsl(var(--primary))' }}>N</span>ode.js</li>
                                    </ul>

                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Tech Used On This App</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="list-disc">
                                        <li>React.js</li>
                                        <li>Tailwind CSS</li>
                                        <li>Shadow DOM (Shadcn)</li>
                                        <li>Three.js</li>
                                        <li>CSS3</li>
                                        <li>HTML5</li>
                                        <li>Vite</li>
                                        <li>Node.js</li>
                                        <li>JavaScript</li>
                                        <li>Dat.gui</li>
                                        <li>Gsap</li>
                                        <li>Netlify</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>Contact Me</AccordionTrigger>
                                <AccordionContent>
                                    <ul>
                                        <li className='cyber-hero cyb-linx'>
                                            <a href="https://github.com/waltscode" target="_blank" rel="noopener noreferrer">GitHub</a>
                                        </li>
                                        <li className='cyber-hero cyb-linx'>
                                            <a href="https://www.linkedin.com/in/john-walters-295b63198/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>




            </div>


            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-8 ">

                <Card className='mx-auto flex items-center justify-center' style={{ borderColor: 'hsl(var(--primary))' }}>
                    <ul className="company-icons flex flex-wrap justify-center">
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <GithubW />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    GitHub
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <Html5W />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    HTML5
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <Css3W />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    CSS3
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <JavascriptW />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    JavaScript
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <NodewebkitW />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    Nodewebkit
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <UilReactW />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    React
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <FigmaW />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    Figma
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <TailwindW />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    Tailwind CSS
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <Bootstrap />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    Bootstrap
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <Handlebars />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    Handlebars
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <Netlify />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    Netlify
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <Heroku />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    Heroku
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                    </ul>
                </Card>

                <div className="flex justify-center items-start">
                    <Card className="hiding m-4 text-left w-full sm:w-auto md:w-2/3 " style={{ borderColor: 'hsl(var(--primary))' }}>
                        <CardHeader>
                            <CardTitle>Front End Technologies</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Front-end development involves working on the client-side of web applications, focusing on user interface, interactions, and user experience.</p>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Short summary of front-end technologies I use:</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className='list-disc'>
                                            <li><strong>HTML5</strong></li>
                                            <li><strong>CSS3</strong></li>
                                            <li><strong>JavaScript (ECMAScript)</strong></li>
                                            <li><strong>React</strong></li>
                                            <li><strong>Figma</strong></li>
                                            <li><strong>Tailwind CSS</strong></li>
                                            <li><strong>Bootstrap</strong></li>
                                            <li><strong>Shadow DOM (Shadcn)</strong></li>
                                            <li><strong>Netlify</strong></li>
                                            <li><strong>Heroku</strong></li>
                                            <li><strong>GitHub</strong></li>
                                            <li><strong>Handlebars</strong></li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex justify-center items-start">
                    <Card className="hiding2 m-4 text-left w-full sm:w-auto md:w-2/3 lg:w-2/3 xl:w-2/3" style={{ borderColor: 'hsl(var(--primary))' }}>
                        <CardHeader>
                            <CardTitle>Back End Technologies</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Back-end development involves working on the server-side of web applications, handling data storage, processing, and communication with the front end.</p>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Short summary of back-end technologies I use:</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className='list-disc'>
                                            <li><strong>MySQL</strong></li>
                                            <li><strong>Sequelize</strong></li>
                                            <li><strong>MongoDB</strong></li>
                                            <li><strong>Mongoose</strong></li>
                                            <li><strong>jQuery</strong></li>
                                            <li><strong>Node.js</strong></li>
                                            <li><strong>Insomnia</strong></li>
                                            <li><strong>Vite</strong></li>
                                            <li><strong>GraphQL</strong></li>
                                            <li><strong>Apollo Sandbox</strong></li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>

                <Card className=' mx-auto flex items-center justify-center' style={{ borderColor: 'hsl(var(--primary))' }}>
                    <ul className="company-icons flex flex-wrap justify-center">
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding2' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <InsomniaW />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    Insomnia
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding2' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <JqueryW />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    jQuery
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding2' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <MongodbW />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    MongoDB
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding2' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <MongooseW />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    Mongoose
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding2' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <MysqlW />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    MySQL
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding2' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <SequelizeW />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    Sequelize
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding2' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <NodejsW />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    Node.js
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding2' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <ViteW />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    Vite
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding2' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <GraphqlW />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    GraphQL
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding2' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <ApolloW />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    Apollo
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding2' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <Express />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    Express
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <a className='hiding2' href="#" onClick={preventDefault} target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                        <i style={{ color: 'hsl(var(--primary))' }}>
                                            <Javascript2W />
                                        </i>
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    JavaScript
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                    </ul>
                </Card>
            </div>
        </div>
    );
}