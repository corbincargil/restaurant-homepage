import clearBody from "../functions/clear-body-contents";
import home from "../pages/home";
import displayMenu from "../pages/menu";
import displayAbout from "../pages/about";
import displayLocation from "../pages/location";

const header = () => {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    header.setAttribute('id','header');

    const logo = document.createElement('h1');
    logo.setAttribute('id','main-title');
    logo.textContent = 'The Pie Hole';
    logo.addEventListener('click', () => {
        clearBody();
        home();
    })

    const navigation = document.createElement('ul');
    navigation.classList.add('navigation');
    const menu = document.createElement('li');
    const about = document.createElement('li');
    const location = document.createElement('li');
    menu.textContent = 'Menu';
    menu.addEventListener('click', () => {
        clearBody();
        displayMenu();
    })
    about.textContent = 'About';
    about.addEventListener('click', () => {
        clearBody();
        displayAbout();
    })
    location.textContent = 'Location';
    location.addEventListener('click', () => {
        clearBody();
        displayLocation();
    })
    navigation.appendChild(menu);
    navigation.appendChild(about);
    navigation.appendChild(location);

    header.appendChild(logo);
    header.appendChild(navigation);
    content.appendChild(header);
    return content;
}

export default header;
