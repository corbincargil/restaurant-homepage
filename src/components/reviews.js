const reviews = () => {
    const body = document.getElementById('body');

    const reviewContainer = document.createElement('div');
    reviewContainer.setAttribute('id','review-container');

    for (let i = 0; i < 3; i++) {
        const newReview = document.createElement('div');
        newReview.classList.add('review');
        newReview.setAttribute('id',`review-${i}`);
        reviewContainer.appendChild(newReview);
    }
    body.appendChild(reviewContainer);

    const reviewOne = document.getElementById('review-0');
    const reviewTwo = document.getElementById('review-1');
    const reviewThree = document.getElementById('review-2');

    const reviewOnePic = document.createElement('img');
    reviewOnePic.src = 'https://cdn-icons.flaticon.com/png/128/3404/premium/3404199.png?token=exp=1652291464~hmac=af62ff749f397fc2376a005a77ceb6a0';
    reviewOne.appendChild(reviewOnePic);
    const reviewTwoPic = document.createElement('img');
    reviewTwoPic.src = 'https://cdn-icons.flaticon.com/png/128/3404/premium/3404417.png?token=exp=1652292884~hmac=604c4c9ff519c129f528506f1a825261';
    reviewTwo.appendChild(reviewTwoPic);
    const reviewThreePic = document.createElement('img');
    reviewThreePic.src = 'https://cdn-icons.flaticon.com/png/128/3404/premium/3404161.png?token=exp=1652292916~hmac=8a0d40ee88b589ab03f21554c505f872';
    reviewThree.appendChild(reviewThreePic);


    const reviewOneRating = document.createElement('h3');
    reviewOneRating.textContent = '4/5';
    reviewOne.appendChild(reviewOneRating);
    const reviewTwoRating = document.createElement('h3');
    reviewTwoRating.textContent = '5/5';
    reviewTwo.appendChild(reviewTwoRating);
    const reviewThreeRating = document.createElement('h3');
    reviewThreeRating.textContent = '5/5';
    reviewThree.appendChild(reviewThreeRating);
    
    const reviewOneText = document.createElement('p');
    reviewOneText.textContent = 'Hands down my favorite dessert place in town.';
    reviewOne.appendChild(reviewOneText);
    const reviewTwoText = document.createElement('p');
    reviewTwoText.textContent = 'The apple pie was the best pie I\'ve ever had! Such a long line though.';
    reviewTwo.appendChild(reviewTwoText);
    const reviewThreeText = document.createElement('p');
    reviewThreeText.textContent = 'The staff was so kind and the pie was delicious. Well worth the trip!';
    reviewThree.appendChild(reviewThreeText);

    return body;
}

export default reviews;