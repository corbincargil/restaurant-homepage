const displayLocation = () => {
    const body = document.createElement('div');
    const header = document.getElementById('header');
    body.setAttribute('id','body');
    header.after(body);

    const heading = document.createElement('h2');
    heading.textContent = 'Our home is in San Antonio, TX';
    body.appendChild(heading);

    const address = document.createElement('p');
    address.textContent = '123 Sunset Blvd, San Antonio, TX, 78015';
    body.appendChild(address);

    const mapPic = document.createElement('img');
    mapPic.src = 'https://gisgeography.com/wp-content/uploads/2020/06/San-Antonio-Map-Texas-1265x1262.jpg';
    body.appendChild(mapPic);

    const hours = document.createElement('img');
    hours.classList.add('hours');
    hours.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9gRvRvauFAQDlmNzzWeIX1wi7Up9WqH0xVmx__Ag8llsX_PHjYBPLTqQm5ZtB3DVs6Q&usqp=CAU';
    body.appendChild(hours);

    return body
}

export default displayLocation;