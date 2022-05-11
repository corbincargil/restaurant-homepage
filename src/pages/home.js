import banner from '../components/banner';
import footer from '../components/footer';
import reviews from '../components/reviews';

const home = () => {
    const content = document.getElementById('content');
    const body = document.createElement('div');
    const header = document.getElementById('header');
    body.setAttribute('id','body');
    header.after(body);

    banner();
    reviews();
    return body;
}

export default home;