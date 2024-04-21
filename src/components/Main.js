// Main.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Card } from "flowbite-react";

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
    font-size: 25px;
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
    width: 400px;
    height: 400px;
    border-radius: 70%;
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
    padding: 90px;
    border: 3px solid #6499E9; /* Bold borders */
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
const BlogsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding: 50px;
`;

const BlogCard = styled.div`
  width: 350px; /* Adjust the width as needed */
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }
`;


const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const BlogContent = styled.div`
  padding: 15px;

`;

const WritingHeading = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  color: #F9F7F7;
  font-size: 50px;
  text-decoration: underline;
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
    {
        title: 'Project 3',
        summary: 'Nulla facilisi. Proin vel sollicitudin ipsum. Vivamus fermentum.',
        description: 'Detailed description of project 2 goes here.',
        skills: ['Python', 'TensorFlow', 'Flask']
    },
    {
        title: 'Project 4',
        summary: 'Nulla facilisi. Proin vel sollicitudin ipsum. Vivamus fermentum.',
        description: 'Detailed description of project 2 goes here.',
        skills: ['Python', 'TensorFlow', 'Flask']
    }
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
                    <SocialLink href="https://twitter.com/gaurangsharma56"><SocialIcon className="fa-brands fa-x-twitter"></SocialIcon></SocialLink>
                    <SocialLink href="https://www.instagram.com/sharma_gaurang96/"><SocialIcon className="fab fa-instagram"></SocialIcon></SocialLink>
                    <SocialLink href="https://www.linkedin.com/in/gaurang-sharma-59ba33118/"><SocialIcon className="fab fa-linkedin"></SocialIcon></SocialLink>
                    {/* Add more social media icons as needed */}
                </SocialContainer>
                <DownloadButton>Download CV</DownloadButton>
            </TextContainer>
            <ImageContainer>
                <Picture src="https://media.licdn.com/dms/image/C5603AQFtCLORSgLZfQ/profile-displayphoto-shrink_800_800/0/1650740082305?e=1719446400&v=beta&t=VLBap-yNNUDC9erIujLRktWWmc7leZ9jiRTKnR1I484" alt="Your Picture" />
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


const Blog = () => {
    const blogs = [
      {
        coverImg:
          "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        title: "Boost your conversation Rate",
        authorImg:
          "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=570&q=80",
        authorName: "Michale Foster",
        publishedDate: new Date().toDateString(),
        url: "https://blog.hubspot.com/marketing/how-to-increase-conversion-rate"
      },
      {
        coverImg:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        title: "33 Powerful Self-Reflection Questions for Personal Growth",
        authorImg:
          "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        authorName: "Tom Wick",
        publishedDate: new Date().toDateString(),
      },
      {
        coverImg:
          "https://images.unsplash.com/photo-1564540574859-0dfb63985953?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        title: "Digital Detox: Reclaiming Your Focus and Creativity in a Distracted World.",
        authorImg:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        authorName: "Karl Magnuson",
        publishedDate: new Date().toDateString(),
      },
    ];
  
    const handleClick = (url) => {
        window.open(url, '_blank');
      };
    
      return (
        <>
          <WritingHeading id="blog">Writings</WritingHeading>
          <BlogsContainer>
            {blogs.map((blog, index) => (
              <BlogCard key={index} onClick={() => handleClick(blog.url)}>
                <BlogImage src={blog.coverImg} alt="Blog Cover" />
                <BlogContent>
                  <h3>{blog.title}</h3>
                  <p>{blog.authorName}</p>
                  <p>{blog.publishedDate}</p>
                </BlogContent>
              </BlogCard>
            ))}
          </BlogsContainer>
        </>
      );
  };


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
                        <Text>Connect with me on <LinkedinLink href="https://www.linkedin.com/">LinkedIn</LinkedinLink></Text>
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