const banner = () => {
    const content = document.getElementById('content');

    const banner = document.createElement('div');
    banner.classList.add('banner');

    const img = document.createElement('img');
    img.src = 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/03/berry-pies.jpg?quality=82&strip=1&w=640';

    const slogan = document.createElement('h3');
    slogan.textContent = '\"The best pies in South Texas!\"';

    banner.appendChild(img);
    banner.appendChild(slogan);
    content.appendChild(banner);
    return content;
}

export default banner; 