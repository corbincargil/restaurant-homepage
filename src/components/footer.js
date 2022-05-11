const footer = () => {
    const content = document.getElementById('content');

    const footerContainer = document.createElement('div');
    footerContainer.setAttribute('id','footer');

    const footerTop = document.createElement('div');
    footerTop.setAttribute('id','footer-top');
    footerTop.textContent = 'Created by Corbin Cargil';
    footerContainer.appendChild(footerTop);

    const gitHubLogo = document.createElement('img');
    gitHubLogo.src = 'https://cdn.iconscout.com/icon/free/png-256/github-3215409-2673827.png';
    footerTop.appendChild(gitHubLogo);

    const footerBottom = document.createElement('div');
    footerBottom.setAttribute('id','footer-bottom');
    footerBottom.textContent = 'As part of ';
    footerContainer.appendChild(footerBottom);

    
    
    content.appendChild(footerContainer);
    return content;
}
export default footer;