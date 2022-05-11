import banner from '../components/banner';
import reviews from '../components/reviews';

const home = () => {
    const body = document.createElement('div');
    body.classList.add('body');
    banner();
    reviews();

    // const content = document.getElementById('content');
    // content.appendChild(body);
}

export default home;