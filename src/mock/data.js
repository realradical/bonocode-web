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
    'BONOCODE is your one-stop shop for all things software development and' +
    'consulting services. Our level of expertise crosses many software engineering domains, ' +
    'including big data, cloud migration, mobile-app developments, software management consulting,' +
    'and training. Our in-house developers are experienced in Java, Scala, and Python, with frontend' +
    'expertise on Gatsby, React, Swift and Kotlin.',
  paragraphTwo:
    'Our mission is to ensure all our clients receive the highest quality software application,' +
    'which is ultra-scalable and fast. We go above and beyond what is expected of us, and we ensure that all' +
    'projects are completed within the scope of work timeframe,' +
    'which is why our requirement gathering and consultant sessions are always on the house.',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
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
    title: '360 Backend Solution Service',
    info:
      'We were engaged by a medium-scale enterprise ad and content service provided to' +
      'revamp their backend system. The engagement included a full re-architecture service to' +
      'position for ultra scalability (x5) and also improved their content engagement insights.' +
      'This also included a backend data migration from on-primes services to cloud-based vendors.',
    info2: '',
    listItems: [
      'Redesign of core application by the transformation of monolith on-premise application' +
        'to cloud-based micro-services',
      'Deployment of real-time data streaming services to monitor ads and content engagement performance',
      'Setup of CI/CD solution to enable continuous improvements to their platform',
      'Establishment of a new backend team including training and mentoring of new developers on using' +
        ' scala and functional programming for the development of optimized and stable software applications',
      'Developed big-data solutions to unlock ML / Artificial intelligence capability for the ads and content' +
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
