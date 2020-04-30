let card = document.querySelectorAll('.card');
let cardFlipped=false;
card.forEach(target=>target.addEventListener( 'click', function() {
    if(target.classList.contains('done')){return;}
    target.classList.add('is-flipped');
    target.classList.add('done');
    let a=parseInt(document.getElementById('move').innerHTML);
        document.getElementById("audio").play();
    a--;
    if(a===-1){
        document.getElementById("fail").play();
        document.getElementById('hide').style.display='block';
        document.getElementsByClassName('board').style.opacity='0.3';

    }
    let newmove=a.toString();
    document.getElementById('move').innerHTML=newmove;

    if(!cardFlipped){
        cardFlipped=target;
    }else if(cardFlipped){
        if(cardFlipped.getAttribute('data-emoji')===target.getAttribute('data-emoji')){
            document.getElementById("match").play();
            cardFlipped=false;
        }else{
            setTimeout(()=>{
                cardFlipped.classList.remove('is-flipped');
                target.classList.remove('is-flipped');
                document.getElementById("fail").play();
                cardFlipped.classList.remove('done');
                target.classList.remove('done');
                cardFlipped=false;
            },600);
        }
    }
}
));
(function shuffle() {
    card.forEach(target => {
        let ramdomPos = Math.floor(Math.random() * 12);
        target.style.order = ramdomPos;
    });
})();



