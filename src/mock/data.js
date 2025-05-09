import { nanoid } from 'nanoid';

const data = {
  en: {
    // HEAD DATA
    headData: {
      title: 'Joellyn | Web Developer',
      lang: 'en',
      description: "Joellyn's Portfolio",
    },
    heroData: {
      title: 'Hi there, my name is',
      name: 'Joellyn',
      subtitle: "I'm a Web Developer",
      cta: 'Know more',
    },
    // ABOUT DATA
    aboutData: {
      img: 'profile.jpg',
      paragraphOne:
        "I'm a Backend Developer / Machine Learning Engineer with 3+ years experience at a global tech company, responsible for several web service projects which aim for reducing human cost and enhancing customers/partner relationships.",
      paragraphTwo:
        "I specialize in languages like Python, C#, and Node.js, and have extensive experience with frameworks such as Django, .NET, and Express. Whether it's designing RESTful APIs, optimizing database queries, or implementing secure authentication systems, I'm always up for a challenge and eager to push the boundaries of what's possible.",
      paragraphThree:
        "When I'm not glued to my computer screen, you can find me exploring the great outdoors with my camera in hand, capturing moments of beauty and inspiration. I'm also an avid reader, a coffee enthusiast, and a firm believer in the importance of lifelong learning.",
      resume: 'https://joellyn.notion.site/Resume-Joellyn-8bc3079834dd44b6895af0995fb4610e', // if no resume, the button will not show up
    },
    // PROJECTS DATA
    projectsData: [
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
    ],
    // CONTACT DATA
    contactData: {
      cta: 'Would you like to work with me? Awesome!',
      btn: "Let's Connect!",
      email: 'susan8213@gmail.com',
    },
    // FOOTER DATA
    footerData: {
      networks: [
        {
          id: nanoid(),
          name: 'envelope',
          url: 'mailto:susan8213@gmail.com',
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
    },
  },
  'zh-TW': {
    headData: {
      title: 'Joellyn | 網頁開發者',
      lang: 'zh-TW',
      description: 'Joellyn 的作品集網站',
    },
    heroData: {
      title: '嗨，你好，我叫做',
      name: 'Joellyn',
      subtitle: '我是一名網頁開發者',
      cta: '了解更多',
    },
    aboutData: {
      img: 'profile.jpg',
      paragraphOne:
        '我是一位後端開發者與機器學習工程師，擁有三年以上在國際科技公司的工作經驗，負責多個以降低人力成本與強化客戶／合作夥伴關係為目標的網路服務專案。',
      paragraphTwo:
        '我擅長使用 Python、C#、Node.js 等程式語言，並且熟悉 Django、.NET、Express 等框架。無論是設計 RESTful API、優化資料庫查詢效率，或實作安全的身份驗證系統，我都樂於迎接挑戰並努力突破極限。',
      paragraphThree:
        '離開電腦螢幕後，我喜歡拿著相機探索大自然，捕捉美麗與靈感的瞬間。我也是個愛讀書的咖啡控，堅信終身學習的重要性。',
      resume: 'https://joellyn.notion.site/Joellyn-1ef977b6a23080989fa1e6dcf2b8e3a9',
    },
    projectsData: [
      {
        id: nanoid(),
        img: 'my-awesome-portfolio.png',
        title: '個人部落格（2021）',
        info:
          '這個專案不只是個人部落格，更是一個運用 JAMstack 架構與靜態網站產生器打造的動態平台。設計包含吸睛的卡片輪播、分類標籤與直覺式操作。特別的是，即便不熟悉 markdown 語法或 Git 架構，也能透過整合的第三方 CMS，輕鬆創建與編輯內容。',
        info2: 'Gatsby.JS, GraphQL, NetlifyCMS, Netlify',
        url: 'https://susan8213.netlify.app',
        repo: 'https://github.com/susan8213/my-awesome-portfolio',
      },
      {
        id: nanoid(),
        img: 'smart-brain.png',
        title: 'Smart Brain 網頁應用程式（2020）',
        info:
          '這是一款前後端無縫整合的網頁應用程式，透過完整的 CI/CD 流程打造，具備穩固的使用者身份驗證與先進的 AI 臉部偵測功能，結合安全性與創新技術。',
        info2: 'React.JS, Node.JS, Express, PostgresQL, Restful API, Render(Heroku)',
        url: 'https://smartbrain-h9i3.onrender.com/',
        repo: 'https://github.com/susan8213/smartbrain',
      },
      {
        id: nanoid(),
        img: 'robofriends.png',
        title: '機器人朋友 Web App（2020）',
        info:
          '這是一款流暢、動態且響應式的網頁應用程式，結合開放 API 與強大的搜尋功能，使用者可以輕鬆地搜尋並與機器人朋友互動。',
        info2: 'React.JS, PWA(Progressive Web App)',
        url: 'https://susan8213.github.io/robofriends/',
        repo: 'https://github.com/susan8213/robofriends',
      },
      {
        id: nanoid(),
        img: 'web-crawling.png',
        title: '網路爬蟲專案（2020）',
        info:
          '這個專案運用網頁爬蟲技術來自動化日常資訊整理。從多個新聞網站擷取資料後，分析與視覺化當日熱門關鍵字，一目瞭然地提供有價值的洞察。',
        info2: 'Python, Selenium + BeautifulSoup, 資料視覺化',
        url: 'https://github.com/susan8213/1st-PyCrawlerMarathon-Project-Cupoy',
        repo: 'https://github.com/susan8213/1st-PyCrawlerMarathon-Project-Cupoy',
      },
    ],
    contactData: {
      cta: '來和我聊聊如何合作吧！',
      btn: '聯絡我',
      email: 'susan8213@gmail.com',
    },
    footerData: {
      networks: [
        {
          id: nanoid(),
          name: 'envelope',
          url: 'mailto:susan8213@gmail.com',
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
          url: 'https://joellyn.notion.site/Joellyn-1ef977b6a23080989fa1e6dcf2b8e3a9',
        },
      ],
    },
  },
};
export const getLangData = (lang) => {
  // 預設語言 fallback
  if (lang.startsWith('zh')) return data['zh-TW'];
  return data.en;
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
