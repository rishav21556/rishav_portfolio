
// working with the navbar
const aboutMe = document.getElementById('navbar-aboutme');
const skills = document.getElementById('navbar-skills');
const porfolio = document.getElementById('navbar-portfolio');
const contact = document.getElementById('navbar-contact');
const home = document.getElementById('navbar-home');

console.log(aboutMe, skills, porfolio, contact);

aboutMe.addEventListener('click', () => {
    window.location.href  = 'aboutMe';
});
skills.addEventListener('click', () => {    
    window.location.href = 'skills';
} );
porfolio.addEventListener('click', () => {
    window.location.href = 'portfolio';
});
home.addEventListener('click',()=>{
    console.log("hello");
    window.location.href = '/';
})