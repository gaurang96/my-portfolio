// Home.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    height: 100vh; /* Full viewport height */
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: flex-start; /* Align items to the start (top) */
    width: 80%;
`;

const TextContainer = styled.div`
    width: 50%;
    text-align: left; /* Align text to the left */
`;

const HiMyself = styled.p`
    font-size: 20px;
    margin-bottom: 5px;
    font-family: 'Josefin Sans', sans-serif; /* Change font family */
    text-align: left; /* Align text to the left */
`;

const Name = styled.h1`
    font-size: 36px;
    font-weight: bold;
    color: #333; /* Change color as needed */
    margin-bottom: 10px;
    font-family: 'Josefin Sans', sans-serif; /* Change font family */
    text-align: left; /* Align text to the left */
`;

const Role = styled.p`
    font-size: 24px;
    margin-bottom: 10px;
    font-family: 'Josefin Sans', sans-serif; /* Change font family */
    text-align: left; /* Align text to the left */
`;

const Description = styled.p`
    font-size: 18px;
    margin-bottom: 20px;
    font-family: 'Josefin Sans', sans-serif; /* Change font family */
    text-align: left; /* Align text to the left */
`;

const SocialIcon = styled.i`
    font-size: 24px;
    margin-right: 30px;
    color: #333; /* Change color as needed */
`;

const SocialContainer = styled.div`
    margin-bottom: 20px;
    text-align: left; /* Align social icons to the left */
`;

const SocialLink = styled.a`
    text-decoration: none;
`;

const DownloadButton = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    background-color: #007bff; /* Change color as needed */
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #0056b3; /* Change color as needed */
    }
`;

const ImageContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
`;

const Picture = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;

const Home = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const roles = ['Data Scientist', 'Machine Learning Engineer', 'Cricketer'];
    const [roleText, setRoleText] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            if (roleText.length === roles[roleIndex].length) {
                clearInterval(interval);
                setTimeout(() => {
                    const nextRoleIndex = (roleIndex + 1) % roles.length;
                    setRoleIndex(nextRoleIndex);
                    setRoleText('');
                }, 1000); // Delay before switching to next role
            } else {
                setRoleText(roles[roleIndex].substring(0, roleText.length + 1));
            }
        }, 100); // Delay between each character

        return () => clearInterval(interval);
    }, [roleIndex, roleText, roles]);

    return (
        <Container>
            <ContentContainer>
                <TextContainer>
                    <HiMyself>Hi, Myself</HiMyself>
                    <Name>Gaurang Sharma</Name>
                    <Role>And I'm a {roleText}</Role>
                    <Description>
                        {/* Your quick intro line goes here */}
                        Passionate about leveraging data to drive business decisions and solve real-world problems.
                    </Description>
                    <SocialContainer>
                        <SocialLink href="https://www.facebook.com/gaurang.sharma.3950/"><SocialIcon className="fab fa-facebook"></SocialIcon></SocialLink>
                        <SocialLink href="https://twitter.com/gaurangsharma56"><SocialIcon className="fab fa-twitter"></SocialIcon></SocialLink>
                        <SocialLink href="https://www.instagram.com/sharma_gaurang96/"><SocialIcon className="fab fa-instagram"></SocialIcon></SocialLink>
                        <SocialLink href="https://www.linkedin.com/in/gaurang-sharma-59ba33118/"><SocialIcon className="fab fa-linkedin"></SocialIcon></SocialLink>
                        {/* Add more social media icons as needed */}
                    </SocialContainer>
                    <DownloadButton>Download CV</DownloadButton>
                </TextContainer>
                <ImageContainer>
                    <Picture src="images/your-picture.png" alt="image"/>
                </ImageContainer>
            </ContentContainer>
        </Container>
    );
};

export default Home;
