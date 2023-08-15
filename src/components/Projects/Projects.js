import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import market from "../../Assets/Projects/market.png";
import network from "../../Assets/Projects/network.png";
import course from "../../Assets/Projects/course.png";
import crimes from "../../Assets/Projects/crimes.png";
import nous from "../../Assets/Projects/nous.png";
import students from "../../Assets/Projects/students.png";
import todo from "../../Assets/Projects/todo.png";
import pacmen from "../../Assets/Projects/pacmen.png";
import eyes from "../../Assets/Projects/eyes.png";
import github from "../../Assets/Projects/github.png";
import badbank from "../../Assets/Projects/badbank.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={badbank}
              isBlog={false}
              title="Bad Bank"
              description="A Front End web application that simulates a bank personal portal, it allow users to create accounts, deposit and withdraw money, as well as view their transaction history and switching between accounts. Developed using MERN stack and other tools such as react context api, react hook form, react router dom, etc. The application was deployed using Vercel."
              ghLink="https://github.com/porto-o/Bad-Bank"
              demoLink="https://bad-bank-beckmuhkl-porto-o.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crimes}
              isBlog={false}
              title="Analysis of crimes in Mexico City"
              description="EDA to analyze crime reports filed in Mexico City. It involved examining the districts with the highest incidence of each crime type and predicting high-crime zones. Machine learning techniques, including KNN for filling missing data, were used. Libraries such as pandas, sklearn, matplotlib, and seaborn were utilized."
              ghLink="https://github.com/porto-o/analisis_carpetas_investigacion"
              demoLink="https://shorturl.at/beu16"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={students}
              isBlog={false}
              title="Student Performance Analysis"
              description="The project aimed to analyze the variation in student performance concerning different factors, such as receiving scholarships, complete breakfasts, parental education, and income levels, gender, ethnicity, etc. It revealed strong correlations between certain factors and student performance."
              ghLink="https://github.com/MarioChvx/ciencia_de_datos_PAMBAZO/blob/main/proyectos/unidad1/proyecto_eda/EDA_Students_performance.ipynb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nous}
              isBlog={false}
              title="Nous"
              description="Vibrant student community with the clear mission of supporting the professional development of individuals in the field of data science, founded by me. It provides a platform for collaboration, workshops, and networking events, offering a nurturing environment for members to enhance their skills, knowledge, and career prospects."
              igLink="https://instagram.com/weare_nous/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={market}
              isBlog={false}
              title="E-Market"
              description='"E-Market" is an innovative application developed to facilitate comprehensive restaurant management during the COVID-19 pandemic. It offers a seamless experience with minimal interaction between servers and diners through online ordering, order status updates, digital tickets, secure payments, interactive menus, and restaurant listings. Embracing the new normal, "E-Market" empowers restaurants to efficiently serve their customers while prioritizing safety and convenience.'
              ghLink="https://github.com/porto-o/E-Market_v2.0"
              demoLink="https://e-marke7.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={course}
              isBlog={false}
              title="Python Course"
              description="I had the opportunity to give a Python course with a Google Developer Student Club to a group of students from my university. The course was divided into 2 modules: Introduction to computer science, Python as a programming language. The course was taught in 1 month and 5 hours per week. The course was completely hands-on and the students were able to develop projects at the end of each day such as games, cipher programs and path-finder projects."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={network}
              isBlog={false}
              title="Hard Cleaning Data Project of social networks"
              description="The project consisted of cleaning a database of instagram, tiktok and youtube accounts.We used cleaning techniques such as regex, keyword search, filtering, etc. Furthermore, timeseries analysis was performed to visualize more insights from our data. The project was developed in Python using libraries such as pandas, numpy, matplotlib, seaborn, etc."
              ghLink="https://github.com/MarioChvx/ciencia_de_datos_PAMBAZO/tree/main/proyectos/unidad2/regex"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="ToDoTime Chrome Extension"
              description="MIT Hackathon project. A Chrome extension that allows users to manage their time more efficiently by blocking distracting websites and providing a to-do list. However, because of the time constraints, the project could not be completed. The project was developed using ReactJS."
              ghLink="https://maggieliu.dev/posts/blueprint"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pacmen}
              isBlog={false}
              title="Bouncing PacMen"
              description="MITxPro project. Bouncing Pacmen is a game that allows users to generate infinite Pacmen that bounce around the screen. Furthermore, the Pacmen change direction when they hit the edges of the screen. However, the pacmen do not change direction when they hit each other. The project was developed using HTML, CSS, and JavaScript."
              ghLink="https://github.com/porto-o/Pacmen"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eyes}
              isBlog={false}
              title="Moving eyes"
              description="MITxPro project. Moving eyes is a project that allows users to move the eyes of a face by moving the mouse. To do this, the project uses the mouse coordinates to change the position of the eyes. Furthermore, some of the limitations of the project are that the eyes cannot move outside the face and the eyes cannot move independently. The project was developed using HTML, CSS, and JavaScript."
              ghLink="https://github.com/porto-o/eyes-moving"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="And so much more..."
              description="In my github profile you can find more projects that I have developed, such as data structures implementations, cipher algorithms like RSA, physics simulations, jupyter notebooks for maths, atm machine simulation, etc. I invite you to take a look at my github profile."
              ghLink="https://github.com/porto-o/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
