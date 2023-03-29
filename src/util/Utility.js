import { v4 as uuid } from 'uuid';

import img1 from '../asset/projectImg/202924ad793b1e89670539cfaa4e0d4f.png';
import img2 from '../asset/projectImg/image1.jpg';
import img3 from '../asset/projectImg/image2.png';
import img4 from '../asset/projectImg/image3.jpg';
import img5 from '../asset/projectImg/music-video-player-ui-11.jpg';
import img6 from '../asset/projectImg/preview.png';
import img7 from '../asset/projectImg/image4.png';
import img8 from '../asset/projectImg/image5.png';
import img9 from '../asset/projectImg/image6.png';
import {
  MdMarkEmailRead,
  MdPhoneIphone,
  MdEditCalendar,
  MdMyLocation,
} from 'react-icons/md';

import testLogo1 from '../asset/3.jpg';
import testLogo2 from '../asset/6.jpg';
import testLogo3 from '../asset/7.png';

export const ProjectFilter = [
  { id: 3, url: img3, categories: 'UI-UX research' },
  { id: 1, url: img1, categories: 'Web design' },
  { id: 2, url: img2, categories: 'UI-UX research' },
  { id: 6, url: img6, categories: 'Web design' },
  { id: 4, url: img4, categories: 'Projuct design' },
  { id: 5, url: img5, categories: 'App design' },
  { id: 7, url: img7, categories: 'UI-UX research' },
  { id: 8, url: img8, categories: 'App design' },
  { id: 9, url: img9, categories: 'Web design' },
  {
    id: 10,
    url: 'https://cdn.motocms.com/src/1200x630/77700/77701-big.jpg',
    categories: 'UI-UX research',
  },
  {
    id: 11,
    url: 'https://assets.materialup.com/uploads/6b1d13aa-c2da-4bae-b493-5efd42ec67aa/preview.jpg',
  },
  {
    categories: 'Projuct design',
    id: 12,
    url: 'https://cdn.dribbble.com/users/2268952/screenshots/16240793/media/e126d4b6930eee3ce9ecba837abea280.png?compress=1&resize=400x300',
  },
  {
    categories: 'App design',
    id: 13,
    url: 'https://d85wutc1n854v.cloudfront.net/live/products/icons/WB0573SK0.jpg?v=4.5.1',
  },
  {
    categories: 'Projuct design',
    id: 14,
    url: 'https://cdn.dribbble.com/users/6047818/screenshots/17057860/media/6b0f98a1e7237d3a4ef5f8f4aa6b8c74.png?compress=1&resize=400x300',
  },
];

export const personalInfo = [
  {
    id: 1,
    email: 'zohanmamunfreelancer@gmail.com',
    text: 'Email Address',
    icons: <MdMarkEmailRead></MdMarkEmailRead>,
  },
  {
    id: 2,
    email: '+088017-8830-3782',
    text: 'Take a number',
    icons: <MdPhoneIphone></MdPhoneIphone>,
  },
  {
    id: 3,
    email: '14 February 2002',
    text: '21 Year Old',
    icons: <MdEditCalendar></MdEditCalendar>,
  },
  {
    id: 4,
    email: 'Mirpur 12, Dhaka-1216,Bangladesh',
    text: 'Location',
    icons: <MdMyLocation></MdMyLocation>,
  },
];

export const Education = [
  {
    id: 1,
    Uname: 'Institute of Science Trade & Technology',
    degree: 'Diploma in Computer Science',
    date: '03 January 2022   Dhaka, Bangladesh',
  },
  {
    id: 2,
    Uname: 'Pallabi Degree College',
    degree: 'Higher Secondary School',
    date: '03 January 2019   Dhaka, Bangladesh',
  },
];

export const Skill = [
  'React JS',
  'JavaScript',
  'Node Js',
  'HTML/CSS',
  'Tailwind CSS',
  'React-router',
  'Next JS',
  'Wordpress',
  'Figna File Convert',
  'REST API',
  'Firebase',
  'JWT Token',
  'Redux',
  'Axios',
  'Material UI',
];

export const positions = [
  {
    id: 1,
    name: 'Font-end Dev.(React or Next JS)',
    time: '2 Year',
  },
  {
    id: 2,
    name: 'Back-end Dev.(Node JS)',
    time: '1 Year',
  },
  {
    id: 3,
    name: 'Wordpres Theme Customizitions ',
    time: '1 Year',
  },
];

export const BlogCardData = [
  {
    id: uuid(),
    title: 'Webstie Ui',
    sortTitle: 'User interface (UI) design',
    discription: `User interface (UI) design is the process designers use to build interfaces
        in software or computerized devices, focusing on looks or style. Designers 
        aim to create interfaces which users find easy to use and pleasurable. UI design 
       refers to graphical user interfaces and other forms—e.g., voice-controlled interfaces.`,
    thumbel:
      'https://cdn.dribbble.com/users/1192538/screenshots/15224028/media/458d4caa0d89efbcb30fb7509ebce75b.png?compress=1&resize=400x300',
    url: 'https://peterdraw.studio/wp-content/uploads/2021/04/Bookoe-Book-Store-Website-UI-Figma-3.webp',
  },

  {
    id: uuid(),
    title: 'Web eCommerce Ui',
    sortTitle: 'How do you describe an ecommerce store',
    discription: `How do you describe an ecommerce store?
     An e-commerce website is one that allows people to buy and sell physical goods, 
     services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website,
     a business can process orders, accept payments, manage shipping and logistics, and provide customer service`,
    thumbel:
      'https://cdn.dribbble.com/users/6218940/screenshots/16040728/media/f32eece581bc3d86555bcd518e81bbf2.png?compress=1&resize=400x300',
    url: 'https://www.sketchappsources.com/resources/source-image/ecommerce-ui-kit-vosidiy.png',
  },
  {
    id: uuid(),
    title: 'Mobile apps are applications that are developed ',
    sortTitle: 'Mobile app is a software application',
    discription: `Mobile apps are applications that are developed to run on a mobile device.
     They are often lightweight versions of software created for your home PC, and may be created to perform a single function
     or a group of related functions. Others are designed with mobility in mind, or exclusively for certain devices.
     How do you write a mobile app description?
      Effective Icon Matters. There are two apps in one category with similar features. ...
      Right Name Is Everything. ...
      Perfect App Description Is a Must. ...
      Great Screenshots and High-Quality Video. ...
      Focus on Accurate Category. ...
      Inspire Users to Leave Positive Reviews. ...
      Translate Content into Different Languages
     `,
    thumbel:
      'https://cdn.dribbble.com/users/1998175/screenshots/16514111/media/bcebc1fbdab8fcbfdcbda0f18b00c5c7.jpg?compress=1&resize=400x300',

    url: 'https://s3-alpha.figma.com/hub/file/1294066929/5bac2248-53d7-466a-a6a0-39326ce33c28-cover.png',
  },
  {
    id: uuid(),
    title: 'How to use POS software?',
    sortTitle: 'What are the benefits of POS software?',
    discription: `The point of sale or point of purchase is the time and place at which a retail transaction is completed.
     At the point of sale, the merchant calculates the amount owed by the customer, indicates that amount, may prepare an 
     invoice for the customer, and indicates the options for the customer to make payment.
     Point of sale (POS) refers to the payment counter in a retail store where customers pay for their purchased goods.
      For example, the counter at McDonald's where you place an order and pay for it is an example of a POS. 
     The desktop on which the staff keys in your order and payment details is a part of the POS termina
     `,
    thumbel:
      'https://cdn.dribbble.com/userupload/3743464/file/original-216492c6491ed240ac3e773a337e06ba.png?resize=400x0',
    url: 'https://agentestudio.com/uploads/ckeditor/pictures/2245/content_self-service_POS_8.png',
  },
];

export const language = [
  {
    name: 'English',
    sName: 'EN',
    language: 'Fluent',
  },
  {
    name: 'Hindi',
    sName: 'HI',
    language: 'Fluent',
  },
  {
    name: 'Bangla',
    sName: 'BN',
    language: 'Native',
  },
  {
    name: 'German',
    sName: 'DE',
    language: 'Fluent',
  },
];

export const experience = [
  {
    number: 2,
    p: (
      <>
        <span>Years</span> <br />
        <span>experience</span>
      </>
    ),
  },
  {
    number: 150,
    p: (
      <>
        <span>Completed</span> <br />
        <span>project</span>
      </>
    ),
  },
  {
    number: 20,
    p: (
      <>
        <span>Companies</span> <br />
        <span>worked</span>
      </>
    ),
  },
];

export const frontData = [
  {
    name: 'HTML',
    uv: 100,
  },
  {
    name: 'CSS',
    uv: 95,
  },
  {
    name: 'JavaScript',
    uv: 85,
  },
  {
    name: 'React-Js',
    uv: 80,
  },
  {
    name: 'Next JS',
    uv: 80,
  },
];
export const backend = [
  {
    name: 'NodeJS',
    uv: 80,
  },
  {
    name: 'Express-Js',
    uv: 70,
  },
  {
    name: 'MongoDB',
    uv: 60,
  },
  {
    name: 'PostgreSQL',
    uv: 50,
  },
];

export const testimonial = [
  {
    id: 1,
    name: 'Jhon Doe',
    title: 'Alexa.com (CEO)',
    image: testLogo2,
  },

  {
    id: 2,
    name: 'Merry Alex',
    title: 'Wp Developer',
    image: testLogo1,
  },
  {
    id: 3,
    name: 'Akindamola ',
    title: 'Plugin Devloper',
    image: testLogo3,
  },
];
