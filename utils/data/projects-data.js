import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Smart Attendance System Using Face Recognition',
        description: "Me and my team built an AI-ML based Smart Attendance System. I have developed the UI and codebase of the required algorithms. Used basic Python, it's libraries, OpenCV for processing images, face_recognition for detection of Face using Neural Networks. The app fetches data from the camera using face detection and generates a CSV file that stores time and date of the attendance in real-time.",
        tools: ['Python', 'OpenCV', 'facre_recognition', 'numpy'],
        role: 'UI Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'GymBook (Gym Management Web Application)',
        description: 'Developed a Gym Management Web Application using MERN (React.js, Node.js, Express, MongoDB). Worked as a Frontend Developer in the project and successfully collaborated with backend team to ensure smooth integration. Implemented 3 roles (admin, trainer, customer) to handle access management of the user.',
        tools: ['React.js', 'SCSS', "Node.js", "Express.js", "TypeScript", "Material UI"],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Guidy (Academic Portal)',
        description: 'Worked as Frontend Developer for developing a Portal for University Data Management system. Implemented two user roles (student and contributor/faculty) using React JS. Employed backend technologies such as Node JS, Express, and MongoDB to support the system',
        tools: ['React.js', 'SCSS', "Node.js", "Express.js", "TypeScript", "Material UI"],
        code: '',
        role: 'Frontend Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'IntelliNews (News Application)',
        description: "Developed a news based application for delivering world-wide news to users. Developed the UI of the application using React.js and Bootstrap (CSS library). Used News-API as external API for fetching data of the news items",
        tools: ['React.js', 'Bootstrap', 'NewsAPI'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Frontend Developer',
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