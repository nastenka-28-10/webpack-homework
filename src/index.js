import "./scss/style.scss";
import Person from './Person';


const person = new Person('Anastasiia', 'Grigorenko');
document.getElementById('root').innerHTML = person.sayHi();