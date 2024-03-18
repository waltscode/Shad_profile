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


export default function About() {
    const { theme } = useTheme();

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

        // Cleanup function
        return () => {
            hiddenElements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div id="about" className={`app-container grad-bkg ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
           
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">


                <Card className="   ">
                    <CardHeader>
                        <CardTitle>Welcome!</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className=" hiding">
                            <ul>
                                <li>Hello and welcome to my corner of the internet!</li>
                                <li>I'm John Walters, a passionate full-stack web developer.</li>
                                <li>I have a keen eye for creating stunning and functional web applications.</li>
                                <li>Here, you'll find a collection of my projects.</li>
                                <li>They showcase my skills, creativity, and dedication to crafting high-quality solutions.</li>
                            </ul>

                        </div>
                    </CardContent>
                </Card>
                <div className=" hiding ">
                    <img src="/images/blue2.png" alt="profile picture" className="blob-effect" />
                </div>
            </div>

            <div className="icons ">
                {/* <div className="waves">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div> */}
                <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div className="hiding flex flex-wrap justify-center items-center">
                        <div className="flex justify-center items-center">
                            <img src="/images/logos/html.png" alt="" className="techlogo" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="/images/logos/css3.png" alt="" className="techlogo" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="/images/logos/javascript.png" alt="" className="techlogo" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="/images/logos/JavaScript-logo.png" alt="" className="techlogo" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="/images/logos/Webpack.png" alt="" className="techlogo" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="/images/logos/react.png" alt="" className="techlogo" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="/images/logos/Figma.png" alt="" className="techlogo" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="/images/logos/TailwindCSS.png" alt="" className="techlogo" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="/images/logos/Bootstrapnew.png" alt="" className="techlogo" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="/images/logos/handlebars.png" alt="" className="techlogo" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="/images/logos/netlify.png" alt="" className="techlogo" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="/images/logos/Heroku.png" alt="" className="techlogo" />
                        </div>
                    </div>

                    <div className='hiding'>
                        <Card>
                            <CardHeader>
                                <CardTitle>Front End Technologies</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Here are some key front-end technologies:</p>
                                <ul>
                                    <li><strong>HTML5:</strong></li>
                                    <li><strong>CSS3:</strong></li>
                                    <li><strong>JavaScript (ECMAScript):</strong></li>
                                    <li><strong>React:</strong></li>
                                    <li><strong>Figma:</strong></li>
                                    <li><strong>Tailwind CSS:</strong></li>
                                    <li><strong>Bootstrap:</strong></li>
                                    <li><strong>Shadow DOM (Shadcn):</strong></li>
                                    <li><strong>Netlify:</strong></li>
                                    <li><strong>Heroku:</strong></li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>


            <div className="icons ">
                {/* <div className="waves-blue">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div> */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 hiding2">
                    <Card className="icon-card">
                        <CardHeader>
                            <CardTitle>Back End Technologies</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Back-end development involves working on the server-side of web applications, handling data storage, processing, and communication with the front end.</p>
                            <p>Here are some key back-end technologies:</p>
                            <ul>
                                <li><strong>MySQL:</strong></li>
                                <li><strong>Sequelize:</strong></li>
                                <li><strong>MongoDB:</strong></li>
                                <li><strong>Mongoose:</strong></li>
                                <li><strong>jQuery:</strong></li>
                                <li><strong>Node.js:</strong></li>
                                <li><strong>Insomnia:</strong></li>
                                <li><strong>Vite:</strong></li>
                            </ul>
                        </CardContent>
                    </Card>

                    <div className='flex flex-wrap justify-center items-center'>
                        <div className="icon hiding2 techlogo">
                            <img src="/images/logos/Insomnia.png" alt="" />
                        </div>
                        <div className="icon hiding2 techlogo">
                            <img src="/images/logos/jquery.png" alt="" />
                        </div>
                        <div className="icon hiding2 techlogo">
                            <img src="/images/logos/mongodb.png" alt="" />
                        </div>
                        <div className="icon hiding2 techlogo">
                            <img src="/images/logos/Mongoose.js.png" alt="" />
                        </div>
                        <div className="icon hiding2 techlogo">
                            <img src="/images/logos/mysql.png" alt="" />
                        </div>
                        <div className="icon hiding2 techlogo">
                            <img src="/images/logos/sequelize.png" alt="" />
                        </div>
                        <div className="icon hiding2 techlogo">
                            <img src="/images/logos/nodejs (1).png" alt="" />
                        </div>
                        <div className="icon hiding2 techlogo">
                            <img src="/images/logos/Vite.js.png" alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}