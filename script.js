let card1 = document.getElementById('hover1')
let card2 = document.getElementById('hover2')
let card3 = document.getElementById('hover3')

card1.addEventListener('mouseover', function(){
    card1.style.backgroundColor = 'rgb(0, 0, 68)';
    card1.querySelector('img').style.opacity = '0';
    card1.querySelector('.nameproject').style.opacity = '0';
    card1.querySelector('.description').style.display = 'block';
});

card1.addEventListener('mouseout', function(){
    card1.style.backgroundColor= '';
    card1.querySelector('img').style.opacity = '';
    card1.querySelector('.nameproject').style.opacity = '';
    card1.querySelector('.description').style.display = '';
});

card2.addEventListener('mouseover', function(){
    card2.style.backgroundColor = 'rgb(0, 0, 68)';
    card2.querySelector('img').style.opacity = '0';
    card2.querySelector('.nameproject').style.opacity = '0';
    card2.querySelector('.description').style.display = 'block';
});

card2.addEventListener('mouseout', function(){
    card2.style.backgroundColor= '';
    card2.querySelector('img').style.opacity = '';
    card2.querySelector('.nameproject').style.opacity = '';
    card2.querySelector('.description').style.display = '';
});

card3.addEventListener('mouseover', function(){
    card3.style.backgroundColor = 'rgb(0, 0, 68)';
    card3.querySelector('img').style.opacity = '0';
    card3.querySelector('.nameproject').style.opacity = '0';
    card3.querySelector('.description').style.display = 'block';
});

card3.addEventListener('mouseout', function(){
    card3.style.backgroundColor= '';
    card3.querySelector('img').style.opacity = '';
    card3.querySelector('.nameproject').style.opacity = '';
    card3.querySelector('.description').style.display = '';
});