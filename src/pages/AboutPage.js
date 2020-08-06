import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <h2>What Is a Front-End Developer?</h2>
                <p>Front-end web development, also known as client-side development is the practice of producing HTML,
                 CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.</p>
                <p>The challenge associated with front end development is that the tools and techniques used to create the front end of a 
                website change constantly and so the developer needs to constantly be aware of how the field is developing.</p>
                <p>The objective of designing a site is to ensure that when the users open up the site they see the
                 information in a format that is easy to read and relevant.</p>
                <p>This is further complicated by the fact that users now use a large variety of devices with varying screen sizes 
                and resolutions thus forcing the designer to take into consideration these aspects when designing the site.</p>
                <p>They need to ensure that their site comes up correctly in different browsers cross-browser, 
                different operating systems cross-platform and different devices cross-device,
                 which requires careful planning on the side of the developer.</p>
            </Content>
        </div>
    );

}



export default AboutPage;
