import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Joellyn | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Joellyn's Portfolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Joellyn',
  subtitle: "I'm a Web Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Backend Developer / Machine Learning Engineer with 3+ years experience at a global tech company, responsible for several web service projects which aim for reducing human cost and enhancing customers/partner relationships.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: 'https://joellyn.notion.site/Resume-Joellyn-8bc3079834dd44b6895af0995fb4610e', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'my-awesome-portfolio.png',
    title: 'Personal Blog',
    info: '',
    info2: '',
    url: 'https://susan8213.netlify.app',
    repo: 'https://github.com/susan8213/my-awesome-portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smart-brain.png',
    title: 'Smart Brain Web App',
    info: '',
    info2: '',
    url: 'https://smartbrain-h9i3.onrender.com/',
    repo: 'https://github.com/susan8213/smartbrain', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robofriends.png',
    title: 'Robot Friends Web App',
    info: '',
    info2: '',
    url: 'https://susan8213.github.io/robofriends/',
    repo: 'https://github.com/susan8213/robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'web-crawling.png',
    title: 'Web Crawling',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: "Let's Connect!",
  email: 'susan8213@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:susasn8213@gmail.com',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/susan8213',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ying-hsiu-lai',
    },
    {
      id: nanoid(),
      name: 'file-text',
      url: 'https://joellyn.notion.site/Resume-Joellyn-8bc3079834dd44b6895af0995fb4610e',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
