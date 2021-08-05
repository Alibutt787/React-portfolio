/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Ali",
  logo_name: "Ali Butt",
  nickname: "Ali Butt / Aqib",
  full_name: "Aqib Ali BUTT",
  subTitle:
    "React.js Developer, JavaScript Learning Enthusiast. Always learning.",
  resumeLink: "https://www.google.com",
  mail: "mailto:alibhatbhat7867@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/alibutt787",
  linkedin: "https://wwwlinkedin.com/in/",
  gmail: "alibhatbhat7867@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

const skills = {
  data: [
    {
      title: "React Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications React native Android",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Certifications by deeplearning.ai and Stanford Online",
        "⚡ Experience with 10+ Projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Master in Sciences",
      subtitle: "Bs.COmputer Science",
      logo_path: "sal.png",
      alt_name: "SETI",
      duration: "2018 - Present",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, programing, Networking, DataBase, etc.",
        "⚡ I have also completed various online courses Web Development, Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer science course. ",
      ],
      website_link: "https://www.google.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "certification 1",
      subtitle: "learning",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "https://www.google.com",
      alt_name: "learning",
      color_code: "#47A048",
    },
    {
      title: "certification 2",
      subtitle: "learning",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "https://www.google.com",
      alt_name: "learning",
      color_code: "#F6B808",
    },
    {
      title: "certification 2",
      subtitle: "learning",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "https://www.google.com",
      alt_name: "learning",
      color_code: "#F6B808",
    },
    {
      title: "certification 2",
      subtitle: "learning",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "https://www.google.com",
      alt_name: "learning",
      color_code: "#F6B808",
    },
    {
      title: "certification 2",
      subtitle: "learning",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "https://www.google.com",
      alt_name: "learning",
      color_code: "#F6B808",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "React Developer",
          company: "Quicko",
          company_url: "https://www.google.com/",
          logo_path: "quicko.jpg",
          duration: "Jun 2021",
          location: " Jhelum",
          description:
            "Quicko is an online tax planning, preparation & filing platform for individuals & businesses.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer",
          company: "xyz Solutions",
          company_url: " ",
          logo_path: "wrighter.jpg",
          duration: "August 2020",
          location: "",
          description: "Develop a website using Html , css and javascript .",
          color: "#56A4D3",
        },
        {
          title: "Front-End Developer",
          company: "xyz Solution",
          company_url: " ",
          logo_path: "vjt.png",
          duration: "September 2020",
          location: "",
          description: "Develop a portfolio website using ReactJS",
          color: "#800000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "coding welfare ",
          company: "Abc Labs / PAoC",
          company_url: "https://www.google.com/",
          logo_path: "google_logo.png",
          duration: "Summer of 2017 / 18 / 20",
          location: " ",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          color: "#4285F4",
        },
        {
          title: "Code-In Mentor",
          company: "Abc Labs / PAoC",
          company_url: "https://www.google.com/",
          logo_path: "google_logo.png",
          duration: "Winter of 2017 / 18 / 19",
          location: " ",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ",
          color: "#D83B01",
        },
        {
          title: "Board Member",
          company: " ",
          company_url: " ",
          logo_path: "codeuino.jpg",
          duration: "2018 - 2019",
          location: " ",
          description: "Previous Board during early days of Codeuino",
          color: "#D83B01",
        },
        {
          title: "sport Club",
          company: " ",
          company_url: " ",
          logo_path: "b.png",
          duration: "2018 - On Going",
          location: " ",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ali12.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
    link: "https://www.google.com",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Portfolio",
      url: "https://github.com/",
      description: "(This) A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "1",
      name: "loreum ipseum System",
      url: " ",
      description:
        "Driver drowsiness detection, profanity detection, violence detection, SMS alerts, cab driver tracking.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      id: "2",
      name: "Lensinator",
      url: " ",
      description:
        "Published on Play Store back in 2017, crossed 55K downloads. Performed object detection, image captioning, OCR, handwritten OCR, barcode and QR code scanning with product information.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
