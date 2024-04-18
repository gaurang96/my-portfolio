// Main.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Container = styled.main`
    padding: 20px;
    background-color: #112D4E;
`;


const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const TextContainer = styled.div`
    width: 80%;
    text-align: left;
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: flex-start; /* Align items to the start (top) */
    width: 80%;
`;

// const TextContainer = styled.div`
//     width: 50%;
//     text-align: left; /* Align text to the left */
// `;

const HiMyself = styled.p`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 5px;
    font-family: 'Josefin Sans', sans-serif; /* Change font family */
    text-align: left; /* Align text to the left */
    color: #F9F7F7;
`;

const Name = styled.h1`
    font-size: 52px;
    font-weight: bold;
    color: #F9F7F7; /* Change color as needed */
    margin-bottom: 10px;
    font-family: 'Josefin Sans', sans-serif; /* Change font family */
    text-align: left; /* Align text to the left */

`;

const Role = styled.p`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: 'Josefin Sans', sans-serif; /* Change font family */
    text-align: left; /* Align text to the left */
    color: #F9F7F7;
`;

const RoleText = styled.span`
    font-size: 36px;
    font-weight: bold;
    color: #6499E9; /* Change color for the dynamic text */
`;

const Description = styled.p`
    font-size: 22px;
    margin-bottom: 20px;
    font-family: 'Josefin Sans', sans-serif; /* Change font family */
    text-align: left; /* Align text to the left */
    color: #F9F7F7;
`;
const SocialContainer = styled.div`
    margin-bottom: 20px;
    text-align: left;
`;

const SocialLink = styled.a`
    text-decoration: none;

`;

const SocialIcon = styled.i`
    font-size: 24px;
    margin-right: 50px;
    color: #F9F7F7;
`;

const DownloadButton = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    background-color: #007bff;
    font-family: 'Josefin Sans', sans-serif;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #0056b3;
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

const ContactContainer = styled.div`
    width: 80%;
    text-align: center;
`;

const ContactHeading = styled.h2`
    font-size: 52px;
    font-weight: bold;
    margin-bottom: 20px;
    font-family: 'Josefin Sans', sans-serif; /* Change font family */
    color: #F9F7F7;
`;

const ContentContainer1 = styled.div`
    width: 85%;
    height: 100%;
    background-color: #EAD8C0;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: centre;
    justify-content: center;
`;

const BoldText = styled.p`
    font-weight: bold;
    font-size: 44px;
    margin-bottom: 10px;
    font-family: 'Josefin Sans', sans-serif; /* Change font family */
`;

const Text = styled.p`
    margin-bottom: 10px;
    font-size: 36px;
    font-family: 'Josefin Sans', sans-serif; /* Change font family */
`;

const EmailLink = styled.a`
    color: #007bff; /* Change color as needed */
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const LinkedinLink = styled.a`
    color: #007bff; /* Change color as needed */
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

// Styled components for About section
const AboutContainer = styled.section`
    display: flex;
    align-items: center;
    height: 100vh; /* Full viewport height */
    padding: 0 50px;
`;

const ImageContainer1 = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
`;

const TextContainer1 = styled.div`
    flex: 1;
    padding-left: 50px;
`;

const Heading = styled.h2`
    font-size: 52px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #F9F7F7;
    font-family: 'Josefin Sans', sans-serif; /* Change font family */
`;

const Subheading = styled.h3`
    font-size: 32px;
    color: #6499E9; /* Change color as needed */
    margin-bottom: 10px;
    font-family: 'Josefin Sans', sans-serif; /* Change font family */
`;

const Paragraph = styled.p`
    font-size: 22px;
    line-height: 1.5;
    color: #F9F7F7;
    font-family: 'Josefin Sans', sans-serif; /* Change font family */
`;

const ReadMoreButton = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #0056b3;
    }
`;

// Styled components for Projects section

const ProjectWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;
`;

const ProjectTitle = styled.h3`
    font-size: 22px;
    margin-bottom: 10px;
`;

const ProjectSummary = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
`;

const ProjectSkills = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const SkillItem = styled.li`
    display: inline-block;
    background-color: #007bff;
    color: #fff;
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const ProjectsContainer = styled.div`
    align-items: center; /* Center align projects */
    text-align: center;
    padding: 100px;
    justify-content: center;
`;

const ProjectCard = styled.div`
    display: inline-block;
    margin: 10px;
    padding: 20px;
    border: 2px solid #6499E9; /* Bold borders */
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease; /* Smooth transition */

    &:hover {
        filter: brightness(1.2); /* Brighten on hover */
    }

    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;

    &:hover::after {
        content: "Click for more detail";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 14px;
        opacity: 0;
        transition: opacity 0.3s;
    }

    &:hover::after {
        opacity: 1;
    }
`;


const Modal = ({ isOpen, onClose, project }) => {
    return (
        <ModalOverlay isOpen={isOpen} onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>Close</CloseButton>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <h3>Technologies Used:</h3>
                <ul>
                    {project.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </ModalContent>
        </ModalOverlay>
    );
};

const projects = [
    {
        title: 'Project 1',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tellus neque.',
        description: 'Detailed description of project 1 goes here.',
        skills: ['React', 'Node.js', 'MongoDB']
    },
    {
        title: 'Project 2',
        summary: 'Nulla facilisi. Proin vel sollicitudin ipsum. Vivamus fermentum.',
        description: 'Detailed description of project 2 goes here.',
        skills: ['Python', 'TensorFlow', 'Flask']
    },
    // Add more projects as needed
];

const Home = ({ roleText }) => (
    <Section id="home">
        <ContentContainer>
            <TextContainer>
                <HiMyself>Hi, Myself</HiMyself>
                <Name>Gaurang Sharma</Name>
                <Role>And I'm a <RoleText>{roleText}</RoleText></Role>
                <Description>
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
                <Picture src="images/your-picture.png" alt="Your Picture" />
            </ImageContainer>
        </ContentContainer>
    </Section>
);



const About = () => (
    <AboutContainer id="about">
            <ImageContainer>
                <Image src="portfolio-website/IMG_0994.jpeg" alt="Your Image" />
            </ImageContainer>
            <TextContainer>
                <Heading>About <span style={{ color: '#6499E9' }}>Me</span></Heading>
                <Subheading>Data Scientist</Subheading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tellus neque. Donec aliquet quam id magna lacinia, ut finibus felis vestibulum. Nulla facilisi. Proin vel sollicitudin ipsum. Vivamus fermentum, mi eget gravida pharetra, velit justo fermentum nisi, a posuere nulla libero et arcu.
                </Paragraph>
                <ReadMoreButton>Read More</ReadMoreButton>
            </TextContainer>
        </AboutContainer>
);

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <ProjectsContainer id="projects">
            <h2 style={{fontSize: `50px`, color: `#F9F7F7`, fontFamily: `Josefin Sans` }}>Latest Projects</h2>
            <ProjectWrapper>
                {projects.map((project, index) => (
                    <ProjectCard key={index} onClick={() => openModal(project)} backgroundImage={project.imageUrl}>
                        <ProjectTitle>{project.title}</ProjectTitle>
                    </ProjectCard>
                
                ))}
            </ProjectWrapper>
            {selectedProject !== null && (
                <Modal isOpen={true} onClose={closeModal} project={selectedProject} />
            )}
        </ProjectsContainer>
    );
};


const Blog = () => (
    <Section id="blog">
        {/* Blog section content */}
    </Section>
);


const Contact = () => {
    const [nameIndex, setNameIndex] = useState(0);
    const names = ["Let's Connect with Gaurang"]; // Add more names as needed
    const [nameText, setNameText] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            if (nameText.length === names[nameIndex].length) {
                clearInterval(interval);
            } else {
                setNameText(prevText => prevText + names[nameIndex][nameText.length]);
            }
        }, 100); // Delay between each character

        return () => clearInterval(interval);
    }, [nameIndex, nameText, names]);

    return (
        <Container>
            <Section id='contact'>
                <ContactContainer>
                    <ContactHeading>{nameText}</ContactHeading>
                    <ContentContainer1>
                        <BoldText>Wanna Talk? Let's Get in Touch!</BoldText>
                        <Text>Send me an email on <EmailLink href="mailto:gaurangsharma56@gmail.com">gaurangsharma56@gmail.com</EmailLink></Text>
                        <Text>Connect with me on LinkedIn <LinkedinLink href="https://www.linkedin.com/">LinkedIn</LinkedinLink></Text>
                        <Text>In Melbourne? Let's catch up for coffee</Text>
                    </ContentContainer1>
                </ContactContainer>
            </Section>
        </Container>
    );
};

const Main = () => {
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
    },[roleIndex, roleText, roles]);

    return (
        <Container>
            <Home roleText={roleText} />
            <About />
            <Projects />
            <Blog />
            <Contact />
        </Container>
    );
};


export default Main;

// ----------------------------

// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import Home from './Home';
// import About from './About';
// import Projects from './Projects';
// import Blog from './Blog';
// import Contact from './Contact';

// const Container = styled.main`
//     padding: 20px;
//     display: flex;
//     justify-content: center; /* Center horizontally */
//     align-items: center; /* Center vertically */
//     height: 100vh; /* Full viewport height */
// `;

// const Main = () => {
    
//     return (
//         <Container>
//             <Home />
//             <About />
//             <Projects />
//             <Blog />
//             <Contact />
//         </Container>
//     );
// };

// export default Main;