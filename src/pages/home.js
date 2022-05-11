import banner from '../components/banner';
import reviews from '../components/reviews';

const home = () => {
    const content = document.getElementById('content');
    const body = document.createElement('div');
    body.setAttribute('id','body');
    content.appendChild(body);

    banner();
    reviews();
    return body;
}

export default home;