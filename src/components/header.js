import clearBody from "../functions/clear-body-contents";
import home from "../pages/home";

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
    about.textContent = 'About';
    location.textContent = 'Location';
    navigation.appendChild(menu);
    navigation.appendChild(about);
    navigation.appendChild(location);

    header.appendChild(logo);
    header.appendChild(navigation);
    content.appendChild(header);
    return content;
}

export default header;
