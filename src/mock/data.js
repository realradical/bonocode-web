import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'BONO CODE', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'The one-stop software solution service', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'BONO CODE',
  subtitle:
    'Harnesses technical excellence to help companies streamline development and modernize technology. Your one-stop software solution service',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'about.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'authwork.png',
    title: 'Streamlined sneakers authentication service',
    info:
      "After identifying Authwork's business objectives, BONO CODE designed its user interface and admin portal with a " +
      'focus on usability and user experience. ',
    info2:
      'Our team developed its blazing fast web application that is ' +
      'also compatible on all mobile devices. We wen above and beyond the call of duty to deliver key features such ' +
      "as Stripe and Paypal integration, Google/Facebook OAuth, image processing and so on, supporting Authwork's " +
      'mission to grow into a truly unique product in sneakers industry.',
    url: 'https://authwork.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Contact us',
  email: 'info@bonocode.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
