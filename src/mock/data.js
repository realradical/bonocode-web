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
  paragraphOne:
    'BONO CODE is your one-stop shop for bespoke software development and ' +
    'consulting services. Our level of expertise crosses many software engineering domains, ' +
    'including big data, cloud migration, mobile/web development, technology consulting, ' +
    'and onsite training. Our team has abundant experience not only in mainstream stacks, but also in ever-growing ' +
    'functional stacks.',
  paragraphTwo:
    'Our mission is to provide all our clients with the highest quality of software services, ' +
    'We always aim to go above and beyond what is expected from us, with a special focus on turnaround time, technical ' +
    'excellence and customer support.',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
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
    listItems: [],
    url: 'https://authwork.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Total revamp of the legacy backend',
    info:
      'A medium-sized content analytics service company engaged with us to ' +
      'revamp their legacy backend systems. The engagement included a full redesign of their backend services to ' +
      'position for future scalability (x5) and improving their content engagement insights.',
    info2: '',
    listItems: [
      'Successfully migrated the monolith on-premise backend to cloud-based micro-services ',
      'Establishment of a new backend team including training and mentoring of new developers on using' +
        ' scala and functional programming for the development of optimized and stable software applications',
      'Developed real-time data streaming services to unlock ML / Artificial intelligence capability for the ads and content' +
        ' teams and create new features to increase users engagements, ROI for platform users, and Lifetime-Value of customers',
    ],
    url: '',
    repo: '', // if no repo, the button will not show up
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
