import WebIcon from '@mui/icons-material/Web';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import ApiIcon from '@mui/icons-material/Api';
import StorageIcon from '@mui/icons-material/Storage';

const serviceData = [
    {
        name: "Web Development",
        description: "As a versatile Web Developer, I specialize in crafting dynamic, responsive, and user-friendly web applications. Leveraging the latest technologies like React, Node.js, and MongoDB, I deliver seamless front-end experiences paired with robust back-end systems. Whether you're looking to build a simple landing page or a complex web application, I ensure a smooth, secure, and efficient solution that meets your specific needs. My full-stack expertise allows me to handle every aspect of web development, providing you with a complete, end-to-end service.",
        icon: <WebIcon />
    },
    {
        name: "Mobile Application Development",
        description: "In today’s mobile-first world, having a strong mobile presence is essential. I bring your ideas to life by developing high-quality Android applications using Java, as well as cross-platform solutions with Flutter that ensure your app performs flawlessly on both Android and iOS. My focus is on creating intuitive, engaging, and efficient mobile apps that resonate with users, drive engagement, and support your business goals. From concept to deployment, I handle every step of the mobile app development process with precision and care.",
        icon: <PhoneAndroidIcon />
    },
    {
        name: "Web Design",
        description: "Design is the first impression your digital presence makes. I specialize in creating visually stunning, user-centric designs that not only look great but also provide a seamless user experience. By blending creativity with functionality, I design interfaces that are intuitive, accessible, and tailored to your target audience. Whether you need a fresh new design or a revamp of an existing site, my goal is to craft a digital experience that is both aesthetically pleasing and deeply impactful.",
        icon: <DesignServicesIcon />
    },
    {
        name: "Custom Software Solutions",
        description: "Every business is unique, and so are its software needs. I develop custom software solutions that are tailored to your specific business requirements, ensuring they are scalable, efficient, and aligned with your goals. From ERP systems that streamline your operations to bespoke e-commerce platforms that enhance customer engagement, I design and build software that solves your challenges and drives growth. My approach is always client-focused, ensuring the final product perfectly fits your vision and needs.",
        icon: <BuildIcon />
    },
    {
        name: "API Development and Integration",
        description: "In the interconnected world of modern software, APIs are the glue that binds applications together. I provide custom API development services that enable seamless communication between different software systems. Whether you need a RESTful API to power your mobile app or third-party API integrations to enhance your platform’s capabilities, I ensure secure, scalable, and reliable solutions. My APIs are designed with flexibility and future growth in mind, ensuring they meet your current needs and are ready for future expansions.",
        icon: <ApiIcon />
    },
    {
        name: "Database Management",
        description: "A well-managed database is the backbone of any successful application. I offer comprehensive database management services, including design, optimization, and maintenance, ensuring your data is stored securely and efficiently. Whether you're dealing with large-scale data migration, need a robust backup solution, or want to optimize your queries for faster performance, I ensure that your database operations are smooth, reliable, and tailored to your specific requirements. My goal is to provide you with a solid foundation that supports your application’s performance and scalability.",
        icon: <StorageIcon />
    }
];

export default serviceData;
