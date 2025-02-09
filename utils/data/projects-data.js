import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Personal Portfolio',
        description: "My personal portfolio website is built using Next.js and Tailwind CSS, designed with a sleek and modern dark mode interface. The site is fully responsive, ensuring a seamless user experience across all devices. Leveraging the power of Next.js, the portfolio benefits from server-side rendering (SSR) for optimal performance and SEO. The UI is crafted with Tailwind CSS, allowing for a clean and minimalistic design that enhances readability and accessibility. The contact form is integrated with Nodemailer, enabling direct email communication without relying on third-party services. With a focus on performance and efficiency, the website incorporates lazy loading and optimized assets to deliver a smooth browsing experience. This portfolio serves as a central hub to showcase my skills, projects, and experience while continuously evolving as I refine my expertise in web development.",
        tools: [ 'NextJS','Tailwind CSS','SCSS','Node Mailer'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Audio Transcoding Engine Using GOLang',
        description: 'Delving into the world of media transcoding, I\'ve built a powerful yet lightweight Go language-based transcoder. This tool enables seamless conversion of multimedia files across various formats, providing users with flexibility and efficiency in managing their media assets. Leveraging the concurrency and performance capabilities of Go, the transcoder ensures swift processing while maintaining high-quality output, making it ideal for both personal and enterprise-level use cases.',
        tools: ['ReactJS', 'Bootstrap','GO Lang','Gin(Framework)', 'REST API', 'FFMPEG'],
        role: 'Go Lang Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'BDU Marks Compiler in MERN Stack',
        description: 'BDU Marks Compiler is a web application developed using the MERN Stack to streamline the marks entry and result declaration process for academic years. This project is a collaborative initiative by our department, facilitated through a government-supported incubation centre aimed at nurturing talented resources.',
        tools: ['ReactJS', 'Bootstrap', 'SCSS', 'Express', 'MongoDB', 'NodeJS','Cronjob', 'JWT'],
        code: '',
        role: 'Backend Engineer, UI/UX Designer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Music Player Andriod Application development(Java)',
        description: "Developed as a mini project during my academic journey, this Android music player application serves as a testament to my growing expertise in app development. Inspired by the intuitive design of Samsung's music player, the app showcases my proficiency in Java and XML programming languages, as well as my understanding of Android app development principles.",
        tools: ['Java','Application Development', 'Android Development','Android' ,'Core Java', 'Mobile Applications', 'Mobile User Interface Design', 'Mobile Application Development', 'Android Studio', 'Git'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Mobile Application Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },