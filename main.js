import './style.css'
import Experience from './Experience/Experience'

const experience = new Experience(document.querySelector('.experience-canvas'))
let count = 0;
if(window.pageYOffset==0){
    count=1;


}
if(count===1)
{
    document.getElementsByClassName('intro-text').style.opacity = 1;}