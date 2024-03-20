import React, { useEffect } from 'react';
import MyThree from '../components/comps/three';
import MyThreeO from '../components/comps/three-orange';
import MyThreeG from '../components/comps/three-green';
import MyThreeR from '../components/comps/three-red';

import { useTheme } from '../components/ui/theme-provider';

const themeOptions = ["dark", "light", "red", "green", "light-green", "light-red", "light-orange", "orange"];

export function Contact() {
    const { theme } = useTheme();

    // Define which component to render based on the theme
    const getComponent = (theme) => {
        switch (theme) {
            case 'orange':
            case 'light-orange':
                return <MyThreeO />;
            case 'green':
            case 'light-green':
                return <MyThreeG />;
            case 'red':
            case 'light-red':
                return <MyThreeR />;
            default:
                return <MyThree />;
        }
    };

    return (
        <div id="contact">
            <p>Current Theme: {theme}</p>
            {/* Render appropriate component based on the theme */}
            {getComponent(theme)}
        </div>
    );
}

export default Contact;