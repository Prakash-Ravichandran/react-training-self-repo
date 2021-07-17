import './styles/index.css';
import './scss/index.scss';

let packages = ['recharts','redux','react-bootstrap','babel'];
let components = ['Image','CheckBox','Label','Buttons','modal','pop-over'];

console.log(`Packages are - ${packages} , components are - ${components}`);

let packCompo = [...packages,...components];
console.log(packCompo);

let countries = ['India','Australia','berma'];

let newcountries = ['Bangladesh','Nepal'];

let newarray = [...countries,...newcountries];

console.log(newarray);