const displayAbout = () => {
    const body = document.createElement('div');
    const header = document.getElementById('header');
    body.setAttribute('id','body');
    header.after(body);

    const banner = document.createElement('img');
    banner.classList.add('banner');
    banner.src = 'https://img.freepik.com/free-vector/big-family-meeting_74855-5220.jpg?size=626&ext=jpg&ga=GA1.2.648966740.1652227311';
    body.appendChild(banner);

    const info = document.createElement('p');
    info.classList.add('info');
    info.textContent = 'The Pie Hole started as a dream... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
    body.appendChild(info);

    const hours = document.createElement('img');
    hours.classList.add('hours');
    hours.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9gRvRvauFAQDlmNzzWeIX1wi7Up9WqH0xVmx__Ag8llsX_PHjYBPLTqQm5ZtB3DVs6Q&usqp=CAU';
    body.appendChild(hours);

    return body;
}

export default displayAbout;