import React, { useEffect } from 'react';
import { useTheme } from '../components/ui/theme-provider'
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
import { GithubW, Html5W, Css3W, JavascriptW, Javascript2W, NodewebkitW, UilReactW, FigmaW, TailwindW, Bootstrap, Handlebars, Netlify, Heroku,  } from '../components/comps/icons'



export default function Home() {
    const { theme } = useTheme();

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
        <div id="about" className={`app-container grad-bkg ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 hiding2 md:mt-0 mt-8">
                <div className="flex justify-center items-center mt-4">
                    <img src="/images/blue2.png" alt="profile picture" className="blob-effect" />
                </div>

                <Card className="text-left m-5 flex-grow  mt-10">
                    <CardHeader>
                        <CardTitle>John Walters</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* <h2>Welcome to my portfolio website!</h2>
                        <p>I am a novice full-stack web developer who recently completed a comprehensive full-stack web development bootcamp at the University of Toronto. With a rich background in IT spanning several years, technology is my passion and I love to learn new systems. I have recently found that I quite enjoy coding and it's my ambition to collaborate building new apps and really hone my skills in the field.</p>
                         */}
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Is it styled?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It comes with default styles that matches the other
                                    components&apos; aesthetic.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is it animated?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It&apos;s animated by default, but you can disable it if you
                                    prefer.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>


                <Card className="text-left m-5 flex-grow  mt-10">
                    <CardHeader>
                        <CardTitle></CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
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
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>

            </div>


            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-8"> {/* Added mt-8 for top margin */}

            <div className='logo-box'>
                    <ul className="company-icons">
                        <li>
                            <a href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                <i style={{ color: 'hsl(var(--primary))' }}>
                                    <GithubW />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                <i style={{ color: 'hsl(var(--primary))' }}>
                                    <Html5W />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                <i style={{ color: 'hsl(var(--primary))' }}>
                                    <Css3W />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                <i style={{ color: 'hsl(var(--primary))' }}>
                                    <JavascriptW />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                <i style={{ color: 'hsl(var(--primary))' }}>
                                    <NodewebkitW />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                <i style={{ color: 'hsl(var(--primary))' }}>
                                    <UilReactW />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                <i style={{ color: 'hsl(var(--primary))' }}>
                                    <FigmaW />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                <i style={{ color: 'hsl(var(--primary))' }}>
                                    <TailwindW />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                <i style={{ color: 'hsl(var(--primary))' }}>
                                    <Bootstrap />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                <i style={{ color: 'hsl(var(--primary))' }}>
                                    <Handlebars />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                <i style={{ color: 'hsl(var(--primary))' }}>
                                    <Netlify />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" style={{ boxShadow: '0px 0px 16px -1px hsl(var(--primary))' }}>
                                <i style={{ color: 'hsl(var(--primary))' }}>
                                    <Heroku />
                                </i>
                            </a>
                        </li>
                    </ul>

                </div>

                <div className="flex justify-center items-center">
                    <Card className="hiding m-4 text-left w-full sm:w-auto md:w-2/3 lg:w-2/3 xl:w-2/3">
                        <CardHeader>
                            <CardTitle>Front End Technologies</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Front-end development involves working on the client-side of web applications, focusing on user interface, interactions, and user experience.</p>
                            <p>Short summary of front-end technologies:</p>
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
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-8"> {/* Added mt-8 for top margin */}
                <div className="flex justify-center items-center">
                    <Card className="hiding2 m-4 text-left w-full sm:w-auto md:w-2/3 lg:w-2/3 xl:w-2/3">
                        <CardHeader>
                            <CardTitle>Back End Technologies</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Back-end development involves working on the server-side of web applications, handling data storage, processing, and communication with the front end.</p>
                            <p>Short summary of some key back-end technologies:</p>
                            <ul className='list-disc'>
                                <li><strong>MySQL</strong></li>
                                <li><strong>Sequelize</strong></li>
                                <li><strong>MongoDB</strong></li>
                                <li><strong>Mongoose</strong></li>
                                <li><strong>jQuery</strong></li>
                                <li><strong>Node.js</strong></li>
                                <li><strong>Insomnia</strong></li>
                                <li><strong>Vite</strong></li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <div className='flex flex-wrap justify-center items-center '>
                    <div className='logos'>
                        <img src="/images/logos/Insomnia.png" alt="" className="techlogo logo hiding2" />
                        <img src="/images/logos/jquery.png" alt="" className="techlogo logo hiding2" />
                        <img src="/images/logos/mongodb.png" alt="" className="techlogo logo hiding2" />
                        <img src="/images/logos/Mongoose.js.png" alt="" className="techlogo logo hiding2" />
                    </div>
                    <div className='logos'>
                        <img src="/images/logos/mysql.png" alt="" className="techlogo logo hiding2" />
                        <img src="/images/logos/sequelize.png" alt="" className="techlogo logo hiding2" />
                        <img src="/images/logos/nodejs (1).png" alt="" className="techlogo logo hiding2" />
                        <img src="/images/logos/Vite.js.png" alt="" className="techlogo logo hiding2" />
                    </div>
                </div>
            </div>
        </div>
    );
}