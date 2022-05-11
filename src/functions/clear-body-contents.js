import footer from '../components/footer';
//clears the contents of the main body of the page
//plan is to clear all the 'next sibling's of the header, then add the footer
const clearBody = () => {
    const content = document.getElementById('content');
    const header = document.getElementById('header');
    const body = document.getElementById('body');
    if (body){body.remove();}
    // while (header.nextElementSibling) {
    //     header.nextElementSibling.remove();
    // }
    // footer();
}
export default clearBody;