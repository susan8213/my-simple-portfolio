import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Joellyn | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Joellyn's Portfolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi there, my name is',
  name: 'Joellyn',
  subtitle: "I'm a Web Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm a Backend Developer / Machine Learning Engineer with 3+ years experience at a global tech company, responsible for several web service projects which aim for reducing human cost and enhancing customers/partner relationships.",
  paragraphTwo:
    "I specialize in languages like Python, C#, and Node.js, and have extensive experience with frameworks such as Django, .NET, and Express. Whether it's designing RESTful APIs, optimizing database queries, or implementing secure authentication systems, I'm always up for a challenge and eager to push the boundaries of what's possible.",
  paragraphThree:
    "When I'm not glued to my computer screen, you can find me exploring the great outdoors with my camera in hand, capturing moments of beauty and inspiration. I'm also an avid reader, a coffee enthusiast, and a firm believer in the importance of lifelong learning.",
  resume: 'https://joellyn.notion.site/Resume-Joellyn-8bc3079834dd44b6895af0995fb4610e', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'my-awesome-portfolio.png',
    title: 'Personal Blog (2021)',
    info:
      "This side project is more than just a personal blog; it's a dynamic platform crafted with JAMstack architecture and a static site generator. Featuring an eye-catching card carousel showcasing the latest blog posts and beautifully designed tags for easy navigation. What sets it apart is its user-friendly approach: for those less acquainted with markdown syntax or Git codebase structure, our blog seamlessly integrates with a third-party CMS, offering an intuitive interface for content creation and editing.",
    info2: 'Gatsby.JS, GraphQL, NetlifyCMS, Netlify',
    url: 'https://susan8213.netlify.app',
    repo: 'https://github.com/susan8213/my-awesome-portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smart-brain.png',
    title: 'Smart Brain Web App (2020)',
    info:
      'Experience the seamless integration of front-end and back-end systems in our web application, meticulously developed under a comprehensive CI/CD pipeline. With robust user authentication and advanced AI-powered face detection capabilities, our platform ensures both security and innovative functionality.',
    info2: 'React.JS, Node.JS, Express, PostgresQL, Restful API, Render(Heroku)',
    url: 'https://smartbrain-h9i3.onrender.com/',
    repo: 'https://github.com/susan8213/smartbrain', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robofriends.png',
    title: 'Robot Friends Web App (2020)',
    info:
      'Experience a sleek, dynamic, and responsive web application that seamlessly integrates with open APIs. Our user-friendly interface offers a robust search function, allowing you to easily find and connect with your robot friends.',
    info2: 'React.JS, PWA(Progressive Web App)',
    url: 'https://susan8213.github.io/robofriends/',
    repo: 'https://github.com/susan8213/robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'web-crawling.png',
    title: 'Web Crawling (2020)',
    info:
      "Our side project leverages web scraping techniques to automate and streamline daily tasks. By extracting articles from various news websites, we analyze and visualize today's trending keywords, providing valuable insights at a glance.",
    info2: 'Python, Selenium + BeautifulSoup, Data Visualization',
    url: 'https://github.com/susan8213/1st-PyCrawlerMarathon-Project-Cupoy',
    repo: 'https://github.com/susan8213/1st-PyCrawlerMarathon-Project-Cupoy', // if no repo, the button will not show up
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
