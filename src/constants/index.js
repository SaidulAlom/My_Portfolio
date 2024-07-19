import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am an enthusiastic full stack developer with a talent for creating robust and scalable web applications. With two years of practical experience, I have refined my skills in front-end technologies such as React and Next.js, and back-end technologies including Node.js, MySQL, PostgreSQL, and MongoDB. My objective is to utilize my expertise to develop innovative solutions that enhance business growth and provide exceptional user experiences. I am also committed to continuous learning and staying updated with the latest industry trends to ensure my solutions are cutting-edge and effective.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have honed my skills in a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity about how things work, evolving into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.

In addition to my technical expertise, I am committed to continuous learning and staying updated with the latest industry trends to ensure my solutions are cutting-edge and effective. I am an advocate for clean, maintainable code and believe in the power of teamwork to drive innovation. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects. My diverse interests and dedication to excellence make me a valuable asset in any development team.`;

export const EXPERIENCES = [
  {
    year: "E-Commerce Website 2023",
    role: "Web Development Intern",
    company: "NIELIT",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, Node.js, and Express.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["JavaScript", "React.js", "Node.js", "Express.js", "Next.js", "MongoDB"],
    projects: [
      {
        title: "Project Management System",
        image: project1,
        description: "Developed a project management system to track project progress and team collaboration."
      }
    ]
  },
  {
    year: "Mini Project 2024",
    role: "Project Developer",
    company: "Dhemaji Engineering College",
    description: `Developed a mini project focused on creating a real-time chat application.`,
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "WebSocket", "Node.js", "MongoDB"],
    keyResponsibilities: [
      "Designed the chat interface using HTML, CSS, JavaScript and React.js.",
      "Implemented real-time messaging functionality using WebSocket and Node.js.",
      "Created a simple user authentication system to manage chat participants.",
      "Ensured message persistence by integrating MongoDB for storing chat history."
    ],
    skillsAcquired: [
      "Real-time application development with WebSocket and Node.js.",
      "Frontend development for interactive user interfaces.",
      "User authentication and session management.",
      "Database integration with MongoDB for data persistence."
    ],
    projects: [
      {
        title: "Real-Time Chat Application",
        image: project3,
        description: "Developed a real-time chat application with user authentication and message persistence."
      }
    ]
  },
  {
    year: "Summer 2024",
    role: "Software Development Intern",
    company: "Industarial Internship at IOCL Digboi",
    description: `Completed a summer internship focused on developing an Employee Management System website as part of academic requirements.`,
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL"],
    keyResponsibilities: [
      "Designed and implemented user-friendly interfaces.",
      "Developed backend services to handle user authentication, product listings, and order processing.",
      "Integrated a MySQL database for storing user data, product details, and transaction records."
    ],
    skillsAcquired: [
      "Frontend development with HTML, CSS, JavaScript, And React.js .",
      "Backend development using Node.js and Express.js .",
      "Database management with MySQL.",
      "Understanding of Employee Management System workflows and user experience design."
    ],
  },
  // {
  //   year: "July 2024",
  //   role: "Teaching Assistant",
  //   company: "[Academic Institution]",
  //   description: `Assisted in teaching the Data Structures course, helping students understand complex topics and grading assignments.`,
  //   technologies: ["Data Structures", "Algorithms", "Python/C++/Java"],
  //   keyResponsibilities: [
  //     "Assisted the professor in preparing and delivering lectures.",
  //     "Held weekly office hours to help students with their assignments and projects.",
  //     "Graded assignments and exams, ensuring fairness and accuracy in assessment."
  //   ],
  //   skillsAcquired: [
  //     "Deepened understanding of data structures and algorithms.",
  //     "Enhanced communication and teaching skills.",
  //     "Developed a strong sense of responsibility and time management."
  //   ],
  //   projects: [
  //     {
  //       title: "Data Structures Lab Exercises",
  //       image: project4,
  //       description: "Developed and graded lab exercises for students to practice data structures and algorithms."
  //     }
  //   ]
  // },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    description: "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    image: project1,
  },
  
  {
    title: "Chat Box",
    description: "A mini project focused on implementing a chat box feature.",
    technologies: ["Specify the technologies used"],
    image: project3,
  },
  {
    title: "Employee Management System",
    description: "An application for managing employees with features such as listing, adding, editing, and deleting employees.",
    technologies: ["React", "Node.js", "MySQL"],
    image: project2,
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    image: project4,
  },
];

export const CONTACT = {
  address: "Bilasipara, Dhubri, Assam, India, 783348 ",
  phoneNo: "+91 60031 10195 ",
  email: "saidulalom305@gmail.com",
};
