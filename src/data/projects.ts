export interface IProjects {
   id: number;
   name: string;
   category: string;
   client: string;
   role: string;
   year: string;
   desc: string;
   challenge: string;
   solution: string;
   result: string;
   heroImg: string;
   img1: string;
   img2: string;
   img3: string;
   img4: string;
   liveURL: string;
   githubURL?: string;
   slug: string;
}

const projects: IProjects[] = [
    {
       id: 1,
       name: "Sound Blast",
       category: "Web Development",
       client: "Jerremy",
       role: "Lead Developer",
       year: "2024",
       desc: "We’re developing Sound Blast, a cutting-edge music streaming platform like Spotify, using Next.js to deliver fast, scalable, and fully responsive audio streaming experiences.",
       challenge: "The client required a scalable, high-performance music platform with modern UI, real-time streaming, user management, and seamless integration for mobile and desktop devices with future scalability.",
       solution: "We’re building a custom Next.js application with optimized SSR, API integrations, responsive UI, real-time audio streaming capabilities, and future-ready architecture for continuous feature expansion and scalability.",
       result: "We’re building a custom Next.js application with optimized SSR, API integrations, responsive UI, real-time audio streaming capabilities, and future-ready architecture for continuous feature expansion and scalability.",
       heroImg: "/soundb/hero.webp",
       img1: "/soundb/one.webp",
       img2: "/soundb/two.webp",
       img3: "/soundb/three.webp",
       img4: "/soundb/four.webp",
       liveURL: "https://soundb.vercel.app/",
       githubURL: "https://github.com/Faiqs55/sound-blast-next",
       slug: "sound-blast"
    },
    {
       id: 2,
       name: "DsDen",
       category: "Web Development",
       client: "Faiq S.",
       role: "Lead Developer",
       year: "2025",
       desc: "DsDen is a cutting-edge digital agency built by 25 global experts led by Faiq Kalen. We specialize in web development, UI/UX design, and digital strategy. To match our vision, we crafted a new brand identity that reflects power, precision, and creativity.",
       challenge: "We needed a distinctive yet minimal brand identity that communicates trust, digital expertise, and bold creativity — while standing out in a saturated market of global digital agencies.",
       solution: "We crafted a sleek, abstract logo combining the letters D and S with a subtle dragon’s head—symbolizing power, precision, and creativity. The identity uses a black-and-white color palette, modern typography, and a grid-based system for full digital adaptability.",
       result: "The new identity led to increased leads, stronger brand recall, and improved digital consistency. Clients praised the bold design, and the agency gained a sharper online presence aligned with its modern, high-impact vision.",
       heroImg: "/dsden/hero.webp",
       img1: "/dsden/1.webp",
       img2: "/dsden/2.webp",
       img3: "/dsden/3.webp",
       img4: "/dsden/4.webp",
       liveURL: "https://dsden.com/",
       slug: "dsden"
    },
    {
       id: 3,
       name: "E-Learning LMS",
       category: "Web Development",
       client: "Self",
       role: "Lead Developer",
       year: "2026",
       desc: "E-learning LMS is a complete Udemy level application made with mern and typescript and also been deployed to AWS, with docker and CI/CD, It utilises caching and many advanced architechtures for best performance. Features include realtime notifications, email verification via OTP, auth, encrypted courses and many more.",
       challenge: "To implement the privacy of the course so that only the paid users can access it, and once someone pays to access it he can't just download it and share.",
       solution: "I added VidoCypher and also implemented authentication and protected routes so that not anyone can access it.",
       result: "The internal architechture of the platform was designed in such way that it will run faster, use less hardware and be completely secure.",
       heroImg: "/elearning/1.png",
       img1: "/elearning/2.png",
       img2: "/elearning/3.png",
       img3: "/elearning/4.png",
       img4: "/elearning/5.png",
       liveURL: "https://lms-frontend-coral-two.vercel.app/",
       githubURL: "https://github.com/Faiqs55/lms-project-ts",
       slug: "e-learning-lms"
    },
    {
       id: 4,
       name: "Urban Craft",
       category: "Web Development",
       client: "Wade",
       role: "Lead Developer",
       year: "2024",
       desc: "Urban Craft’s custom MERN stack eCommerce platform blends beautiful design with performance—offering fast browsing, easy checkout, and scalable features to support their modern, growing furniture business.",
       challenge: "Urban Craft needed a modern eCommerce platform to showcase furniture collections with high-quality visuals, smooth filtering, and secure checkout. The challenge was creating a user-friendly experience optimized for performance, scalability, and mobile responsiveness.",
       solution: "We built a custom MERN stack eCommerce site featuring product filters, cart functionality, user authentication, and order management. The frontend was crafted for elegance, while the backend ensured speed, security, and easy admin control.",
       result: "The website now runs smoothly with fast page loads, increased product views, and higher conversions. Urban Craft gained a scalable platform with enhanced UX, supporting both desktop and mobile users for long-term growth.",
       heroImg: "/urbanc/hero.webp",
       img1: "/urbanc/1.webp",
       img2: "/urbanc/2.webp",
       img3: "/urbanc/3.webp",
       img4: "/urbanc/4.webp",
       liveURL: "https://urban-craftff.vercel.app/",
       githubURL: "https://github.com/Faiqs55/react-projects/tree/master/furniture-appwrite",
       slug: "urban-craft"
    },
    
];

export default projects;