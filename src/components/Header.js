// Header.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    background-color: #333;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Josefin Sans', sans-serif; /* Change font family */
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000; /* Ensure the header appears above other content */
`;

const Logo = styled.div`
    font-size: 24px;
    font-family: 'Josefin Sans', sans-serif; /* Change font family */
`;

const Nav = styled.nav`
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
    }

    li {
        margin-right: 50px;
    }

    a {
        color: #fff;
        text-decoration: none;
    }
`;

const Header = () => {
    const scrollToAnchor = (anchor) => {
        const element = document.getElementById(anchor);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Container>
            <Logo>G-Man .</Logo>
            <Nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about" onClick={() => scrollToAnchor('about')}>About</a></li>
                    <li><a href="#projects" onClick={() => scrollToAnchor('projects')}>Projects</a></li>
                    <li><a href="#blog" onClick={() => scrollToAnchor('blog')}>Blog</a></li>
                    <li><a href="#contact" onClick={() => scrollToAnchor('contact')}>Contact</a></li>
                </ul>
            </Nav>
        </Container>
    );
};

export default Header;


// -------------------------------------------


