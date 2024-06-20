import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../components/ui/card';
import { ScrollArea, ScrollBar } from '../components/ui/scroll-area';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';

function useIntersectionObserver(selector, options, callback) {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback(entry.target);
                }
            });
        }, options);

        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            elements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, [selector, options, callback]);
}

export default function Portfolio() {
    useIntersectionObserver('.hiding-portfolios', {}, (target) => {
        target.classList.add('visible');
    });

    useIntersectionObserver('.hiding-portfolios', {}, (target) => {
        target.classList.add('visible');
    });
    const projects = [
        {
            name: 'CookNook',
            description: 'CookNook is a full-stack web application using a combination of a 3rd party API library(Spoonacular) and a custom built backend MongoDB. Users are able to search for cuisines based on different geographical locations and then save them to their user profile. The recipes are converted and stored in a Mongo Atlas DB cloud server and then displayed on the user profile page. The application is fully functional on all devices and deployed on Render. All UI Design was done by myself and it is still technically a work in progress.. Stay Tuned',
            link: 'https://cooknook2-0.onrender.com/',
            image: '/images/cooknookSITE.png'

        },
        {
            name: "Fitzy's Fades",
            description: 'A real online barbershop website that allows users to schedule appointments with specific barbers and choose the type of service they want. The website is still technically a work in progress.. Stay Tuned',
            link: 'https://github.com/waltscode/Fitzys_Fades',
            image: '/images/fitzshop.jpg'

        },
        {
            name: 'LeafsFans HQ',
            description: "Welcome to LeafsFans HQ – your go-to destination for spirited discussions about the Toronto Maple Leafs! Our platform, designed to seamlessly adapt to widescreen computers and mobile devices, offers a comprehensive fan experience. The application is deployed on Heroku and features an active database, creating an engaging space for Maple Leafs enthusiasts. Explore the world of LeafsFans HQ and join the conversation today!"
            ,
            link: 'https://leafsfanshq-ea7a8f3ce61e.herokuapp.com/',
            image: '/images/leafsfanshq.png',

        },
        {
            name: 'Film Finder',
            description: 'A comprehensive web-based third party API that allows users to search for movies and TV shows. Users can also view details about the movie or TV show, such as the cast, director, and plot. You are able to search a movie, pull it up and then find where it is streaming. Clinking on the streaming provider will take you directly to the movie in question. This project was built using HTML, CSS, JavaScript, and the OMDb API. It is fully responsive and works on all devices.',
            link: 'https://waltscode.github.io/FilmFinder/',
            image: '/images/filmfinderr.png',

        },

        {
            name: 'J.A.T.E.',
            description: 'Just Another Note Taker or J.A.T.E. is a simple note-taking app that allows users to create, edit, and delete notes. This project was built using HTML, CSS, JavaScript, and the Local Storage API. It is fully responsive and works on all devices. You are able to install it as a PWA allowing it to be opened locally on your desktop.',
            link: 'https://justanothereditor-ec93e92e2b84.herokuapp.com/',
            image: '/images/jate.png',

        },
        {
            name: 'Funky Threads',
            description: "Funky Threads is a straightforward e-commerce backend, meticulously crafted using the dynamic duo of Express and Sequelize technologies. This project serves as an illustrative example of fundamental routing principles and the establishment of table relationships."
            ,
            link: 'https://github.com/waltscode/Funky_Threads',
            image: '/images/funky.png',

        },
        {
            name: 'Social Network API',
            description: "Welcome to the Social Networking API utilizing NoSQL Mongoose and the Mongo Compass database GUI! This API showcases routing capabilities via an Express server, enabling functionalities such as creating, updating, and removing users, managing friends lists, handling thoughts, and facilitating reactions to thoughts. Notably, friends and reactions are organized in arrays associated with users and thoughts, respectively, with their totals calculated using Mongoose virtuals. The endpoints are thoroughly testable in Insomnia, complemented by a video demonstration accessible in the README.md.",
            link: 'https://github.com/waltscode/social_networking_api',
            image: '/images/social.png',

        },
        {
            name: 'Regular Expressions Explained',
            description: "Welcome to an Introduction To Regular Expressions! Regular Expressions or 'Rejex' are expressions used to enable computers to check for specific criteria in a string. This document serves as a comprehensive resource for mastering everything you need to know about them! From dissecting an email snippet to exploring the diverse elements in regex and its myriad practical applications. Enjoy!"
            ,
            link: 'https://gist.github.com/waltscode/4b086bfb6a5a25ce5bdb60dc0c4a9b72',
            image: '/images/rejex.png',

        },
        {
            name: 'Weather Central',
            description: "Welcome to Weather Central! Your one-stop-shop for finding the weather in any city around the world! -The website features a search bar where you input the city of choice, then the day's forecast is presented to you along with the next 5 days.  -Temperature is communicated in celsius, an easy to understand icon of weather conditions, wind speeds in km/h, and humidity in percentage.  -The layout is clean and user friendly. -The website stores past city searches in the search dropdown for user convenience.",
            link: 'https://waltscode.github.io/Module6_Weather_In_Your_City/ ',
            image: '/images/weather.png',

        },
        {
            name: 'Work Day Scheduler',
            description: "Welcome to your new Daily Planner! The current date and time is present on the top of the screen and is easily visible for you! I added to the CSS stylings to make this element stand out. Below the date you will find an hourly table ranging from 9am-5pm. Each time-slot has the ability for the user to write down important memos corresponding to when they take place. When you click the 'save' button the information noted into the planner is saved for future use. When you reload the page the information entered will be readily available. There is color coding associated with the time-slots. The times that are in the past are grey, the current hour slot you are in is colored red, and all future slots are colored green! Enjoy!",
            link: 'https://waltscode.github.io/Module5_challenge/',
            image: '/images/workday.png',

        },
        {
            name: 'README.Generator',
            description: "Welcome to a demonstration of what coding with nodejs and javascript is capable of Using inquirer to present easy to understand questions to users that they can then easily answer using the git-bash terminal To get started ensure you have inquirer installed Open up your git-bash terminal and type in npm i Simply type into the terminal node indexjs and you are presented with the first of a series of questions Upon answering your question you will be automatically presented with the next question These questions will be asking you general information needed to create a quality READMEmd file Once all questions have been answered you will receive a notification saying Successfully created NewREADMEmd fs will then use the writeToFile function to create a new READMEmd file ready for use complete with proper formatting and imagery Try it out"
            ,
            link: 'https://github.com/waltscode/README_Generator',
            image: '/images/readme.png',


        },
        {
            name: 'Node.js Image Generator',
            description: "Welcome to a demonstration of what coding with node.js and javascript is capable of! Using inquirer to present easy to understand questions to users that they can then easily answer using the git-bash terminal. To get started, ensure you have inquirer installed. Open up your git-bash terminal and type in 'npm i'. Simply type into the terminal 'node index.js' and you are presented with the first of a series of questions. Upon answering your question, you will be automatically presented with the next question. These questions will be asking you general information needed to create a new SVG logo! Once all questions have been answered, you will receive a notification saying 'Generated logo.svg successfully! Go check it out!' fs will then use the writeToFile() function to create a new logo.svg file ready for use complete with proper formatting and imagery.",
            link: 'https://github.com/waltscode/Node_IMG_Generator',
            image: '/images/svggen.png',


        },
        {
            name: 'Note Taker Express',
            description: "Welcome to Note Taker! an intuitive app for users including front end and back end functionality being bridged using the express application server! A simple visit the web page and there is a simple UI suggesting user clicks the '+' button in order to ADD a new note! Once a note is added, it is saved on the back end to be retrieved at a later date and viewed by the user. The user also has the ability to delete notes accordingly removing them from the front end and then seeing these changes on the back end as well."
            ,
            link: 'https://note-taker91-d25aa233ddf3.herokuapp.com/',
            image: '/images/notetaker.png',


        },
        {
            name: 'DB Management System',
            description: "Welcome to the Company Database Management System! This tool, powered by Inquirer in the terminal, offers a user-friendly interface for seamlessly accessing and managing information about our employees, departments, positions, and managers. Through this system, you have the ability to effortlessly view and update details related to departments, employees, and positions within the company. Explore the functionality provided to streamline your interaction with our company's data. Happy exploring!"
            ,
            link: 'https://github.com/waltscode/Company_DB_Management',
            image: '/images/dbmanage.png',

        },
        {
            name: 'Brimloft',
            description: "BrimLoft is a dynamic web application designed for hat enthusiasts. It offers users an exclusive platform to explore, register, and purchase a wide range of stylish hats. With features like user authentication, personalized profiles, and an intuitive shopping interface, BrimLoft elevates the online hat shopping experience."
            ,
            link: 'https://protected-gorge-42703-db942224a3bb.herokuapp.com/',
            image: '/images/brim.png',

        },



    ];


    const [featuredProject, setFeaturedProject] = useState(projects[0]);

    const handleProjectClick = (event, project) => {
        event.preventDefault();
        setFeaturedProject(project);
    };

    return (
        <div id='portfolio' className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8`}>
            {/* Container for featured project */}
            <div className="grid-span-1 md:col-span-4 md:col-start-2 md:m-20">
                <h1 className="text-3xl font-bold mb-4">Featured Project</h1>
                <Card className="" style={{ borderColor: 'hsl(var(--primary))' }}>
                    <CardHeader>
                        <CardTitle>{featuredProject.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="px-6 py-4">
                            <img src={featuredProject.image} alt={featuredProject.name} className="mb-4 w-full md:h-[600px] object-fit h-96 " />
                        </div>
                        <CardDescription>{featuredProject.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Button>
                            <div className="px-6 py-4">
                                <Link to={featuredProject.link} target='_blank' >View Project</Link>
                            </div>
                        </Button>
                    </CardFooter>

                </Card>
            </div>

            {/* Container for other projects */}

            <div className="col-span-1 md:m-20 flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4 md:w-[500px]">Other Projects</h1>
                <ScrollArea className="md:h-[750px] md:w-[300px] h-[330px] rounded-md border p-4 mr-8" style={{ borderColor: 'hsl(var(--primary))' }}>
                    <div className="flex flex-col space-y-4">
                        {projects.map(project => (
                            <div key={project.id}>
                                <RadioGroup>
                                    <Label className='text-xl'>{project.name}</Label>
                                    <Button
                                        href={project.link}
                                        onClick={(event) => handleProjectClick(event, project)}
                                    >
                                        More Details
                                    </Button>
                                </RadioGroup>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            <div className="col-span-1 md:m-20 flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4 md:w-[500px]">Other Projects</h1>
                <ScrollArea className="md:h-[750px] md:w-[300px] h-[330px] rounded-md border p-4" style={{ borderColor: 'hsl(var(--primary))' }}>
                    <RadioGroup>
                        <Label className='text-xl'>Funky Threads Ecommerce Back-End Demonstration</Label>
                        <a href='https://youtu.be/-l-WWOJ4HwI' target='_blank' class="youtube-button-link">
                            <span class="play-icon"></span>
                            <span class="button-text"></span>
                        </a>

                    </RadioGroup>
                    <RadioGroup>
                        <Label className='text-xl'>Social Networking API - Using Mongoose and Express</Label>
                        <a href='https://youtu.be/D-0XF7XmPsw' target='_blank' class="youtube-button-link">
                            <span class="play-icon"></span>
                            <span class="button-text"></span>
                        </a>

                    </RadioGroup>
                    <RadioGroup>
                        <Label className='text-xl'>Inquirer Department Tool</Label>
                        <a href='https://youtu.be/nBX-NAe4r4c' target='_blank' class="youtube-button-link">
                            <span class="play-icon"></span>
                            <span class="button-text"></span>
                        </a>

                    </RadioGroup>
                    <RadioGroup>
                        <Label className='text-xl'>SVG Image Generator</Label>
                        <a href='https://youtu.be/rFDLZXHAsYk' target='_blank' class="youtube-button-link">
                            <span class="play-icon"></span>
                            <span class="button-text"></span>
                        </a>

                    </RadioGroup>
                    <RadioGroup>
                        <Label className='text-xl'>README Generator</Label>
                        <a href='https://youtu.be/0R3JbwOWN1U' target='_blank' class="youtube-button-link">
                            <span class="play-icon"></span>
                            <span class="button-text"></span>
                        </a>

                    </RadioGroup>
                </ScrollArea>
            </div>


        </div >
    );

}

