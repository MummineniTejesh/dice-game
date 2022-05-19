document.querySelector("button").addEventListener("click",roll);

function roll(){
    var ranOne=Math.floor(Math.random()*6);
    var ranTwo=Math.floor(Math.random()*6);
    var one=ranOne+1;
    var two=ranTwo+1;
    document.querySelector(".one").src="dice"+one+".png";
    document.querySelector(".two").src="dice"+two+".png";
    if(one>two)
    {
        document.querySelector(".winner").innerHTML="🏆 Player one wins";
    }
    else if(two>one)
    {
        document.querySelector(".winner").innerHTML="Player two wins 🏆 ";
    }
    else
    {
        document.querySelector(".winner").innerHTML="It's a draw";
    }
}
