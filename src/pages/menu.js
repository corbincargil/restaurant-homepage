//menu page
const displayMenu = () => {
    const body = document.createElement('div');
    const header = document.getElementById('header');
    body.setAttribute('id','body');
    header.after(body);

    const heading = document.createElement('h2');
    heading.textContent = 'Choose from the following options: ';
    body.appendChild(heading);

    const pies = document.createElement('div')
    pies.classList.add('pies');
    for (let i = 0; i < 4; i++) {
        const newPie = document.createElement('div');
        newPie.classList.add('pie');
        newPie.setAttribute('id',`pie-${i}`);
        pies.appendChild(newPie);
    }
    body.appendChild(pies);

    const apple = document.createElement('h3');
    apple.textContent = 'APPLE';
    const applePic = document.createElement('img');
    applePic.src = 'https://kristineskitchenblog.com/wp-content/uploads/2021/04/apple-pie-1200-square-592-2.jpg';
    const pieZero = document.getElementById('pie-1');
    pieZero.appendChild(apple);
    pieZero.appendChild(applePic);

    const lemon = document.createElement('h3');
    lemon.textContent = 'LEMON';
    const lemonPic =document.createElement('img');
    lemonPic.src = 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18125855/051116001-01-lemon-meringue-pie-recipe-main.jpg';
    const pieOne = document.getElementById('pie-0');
    pieOne.appendChild(lemon);
    pieOne.appendChild(lemonPic);

    const choco = document.createElement('h3');
    choco.textContent = 'CHOCOLATE DELIGHT';
    const chocoPic = document.createElement('img');
    chocoPic.src = 'https://www.giftofhospitality.com/wp-content/uploads/2021/02/chocolate-delight-8-500x375.jpg';
    const pieTwo = document.getElementById('pie-2');
    pieTwo.appendChild(choco);
    pieTwo.appendChild(chocoPic);

    const cherry = document.createElement('h3');
    cherry.textContent = 'CHERRY';
    const cherryPic = document.createElement('img');
    cherryPic.src = 'https://www.shugarysweets.com/wp-content/uploads/2020/09/cherry-pie-9-720x720.jpg';
    const piethree = document.getElementById('pie-3');
    piethree.append(cherry);
    piethree.append(cherryPic);



    


    
    return body;
}
export default displayMenu;

