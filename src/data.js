import tour1 from './images/fuji_lake.jpg';
import tour2 from './images/mount_fuji_night.jpg';
import tour3 from './images/japan_night_city.jpg';
import tour4 from './images/kiyomizu-temple.jpg';

export const pageLinks = [
    { id: 1, href: '#home', text: 'Home' },
    { id: 2, href: '#about', text: 'About' },
    { id: 3, href: '#services', text: 'Services' },
    { id: 4, href: '#tours', text: 'Tours' },
];

export const iconLinks = [
    { id: 1, href: "https://www.facebook.com/", icon: "fa-brands fa-facebook"},
    { id: 2, href: "https://twitter.com/", icon: "fa-brands fa-twitter"},
    { id: 3, href: "https://www.instagram.com/", icon: "fa-brands fa-instagram"}
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'Aug 26th, 2024',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facere in culpa odio repudiandae, cupiditate natus architecto reprehenderit hic autem!',
    location: 'China',
    duration: '6',
    cost: '2100',
  },
  {
    id: 2,
    image: tour2,
    date: 'Aug 26th, 2024',
    title: 'Tibet Adventure',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quis voluptas fugit quaerat autem consequuntur tempore nemo? Eius, repellat dolore.',
    location: 'China',
    duration: '6',
    cost: '2100',
  },
  {
    id: 3,
    image: tour3,
    date: 'Aug 5th, 2024',
    title: 'Tibet Adventure',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quis voluptas fugit quaerat autem consequuntur tempore nemo? Eius, repellat dolore.',
    location: 'China',
    duration: '6',
    cost: '2100',
  },
  {
    id: 4,
    image: tour4,
    date: 'Dec 26th, 2024',
    title: 'Kyoto Adventure',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quis voluptas fugit quaerat autem consequuntur tempore nemo? Eius, repellat dolore.',
    location: 'Japan',
    duration: '11',
    cost: '15000',
  },
];

export const services = [
  {
    id: 1,
    icon: 'fa-solid fa-wallet',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus adipisci exercitationem quidem error labore odio harum aut ducimus quis!',
  },
  {
    id: 2,
    icon: 'fa-solid fa-tree',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modiminima at deleniti tempore sint, quasi aut dicta porro doloribus sapiente.',
  },
  {
    id: 3,
    icon: 'fa-solid fa-socks',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modiminima at deleniti tempore sint, quasi aut dicta porro doloribus sapiente.',
  }
];