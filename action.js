let player_1='';
let player_2='';
let count=0;
var player_1_name= localStorage.getItem("player1");
var player_2_name= localStorage.getItem("player2");
var player_1_selection;
var player_2_selection;
if(localStorage.getItem("ch")==="X" || localStorage.getItem("ch")==="x"){
    document.querySelector('.player-1-option').innerHTML='<img style="height: 50px; margin-left: 30px;" src="X.jpeg" alt="">';
    document.querySelector('.player-2-option').innerHTML='<img style="height: 50px; margin-left: 30px;" src="O.jpeg" alt="">';
}else{
    document.querySelector('.player-1-option').innerHTML='<img style="height: 50px; margin-left: 30px;" src="O.jpeg" alt="">';
    document.querySelector('.player-2-option').innerHTML='<img style="height: 50px; margin-left: 30px;" src="X.jpeg" alt="">';
}
document.querySelector('.player-1-name').innerHTML=player_1_name;
document.querySelector('.player-2-name').innerHTML=player_2_name;

if(localStorage.getItem("ch")==="X" || localStorage.getItem("ch")==="x"){
      player_1='<img src="X.jpeg" alt="" class="button_inside">';
      player_2='<img src="O.jpeg" alt="" class="button_inside">';
}
else{
    player_1='<img src="O.jpeg" alt="" class="button_inside">';
    player_2='<img src="X.jpeg" alt="" class="button_inside">';
}
function button(b){
    if(count===0){
        count=1;
        const currbutt= document.querySelector(b);
        console.log(currbutt.innerHTML)
        console.log('<img src="white.jpeg" alt="" class="button_inside">')
        console.log(currbutt.innerHTML==='<img src="white.jpeg" alt="" class="button_inside">')
        if(currbutt.innerHTML==='<img src="white.jpeg" alt="" class="button_inside">'){
            currbutt.innerHTML=player_1;
        //  console.log(currbutt.innerHTML);
        }else if(currbutt.innerHTML===player_1 || currbutt.innerHTML===player_2){
            alert("Choose the 'Empty'box");
            count=0;
        }
        if(checkWin()){
            alert(`-----${player_1_name} Win-----`)
            return;
        }
        if(checkTie()){
            alert('-------Match Tie-------')
        }
       console.log(typeof currbutt.innerHTML);
    }else{
        count=0;
        const currbutt= document.querySelector(b);
        console.log('Player-2')
        if(currbutt.innerHTML==='<img src="white.jpeg" alt="" class="button_inside">'){
            currbutt.innerHTML=player_2;
        }else if(currbutt.innerHTML===player_1 || currbutt.innerHTML===player_2){
            alert("Choose the 'Empty' box");
            count=1;
        }
        if(checkWin()){
            alert(`-----${player_2_name} Win-----`)
        }
        if(checkTie()){
            alert('-------Match Tie-------')
        }
    }
}
let board=[[document.querySelector('.t00'),document.querySelector('.t01'),document.querySelector('.t02')],
             [document.querySelector('.t10'),document.querySelector('.t11'),document.querySelector('.t12')],
             [document.querySelector('.t20'),document.querySelector('.t21'),document.querySelector('.t22')]];
function checkWin() {
    for(let i=0;i<3;i++){
        if(board[i][0].innerHTML === board[i][1].innerHTML && board[i][1].innerHTML === board[i][2].innerHTML && board[i][0].innerHTML !== '<img src="white.jpeg" alt="" class="button_inside">' ){
            return true;
        }
    }
    //check colomns
    for(let i=0;i<3;i++){
        if(board[0][i].innerHTML === board[1][i].innerHTML && board[1][i].innerHTML === board[2][i].innerHTML && board[0][i].innerHTML !== '<img src="white.jpeg" alt="" class="button_inside">' ){
            return true;
        }
    }
    if(board[0][0].innerHTML === board[1][1].innerHTML && board[1][1].innerHTML === board[2][2].innerHTML && board[0][0].innerHTML!=='<img src="white.jpeg" alt="" class="button_inside">')
    return true;
    if(board[0][2].innerHTML === board[1][1].innerHTML && board[1][1].innerHTML === board[2][0].innerHTML && board[0][2].innerHTML!=='<img src="white.jpeg" alt="" class="button_inside">')
    return true;
    return false;
}
function checkTie() {
    for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        if(board[i][j].innerHTML==='<img src="white.jpeg" alt="" class="button_inside">')
        return false;
    }
}
return true;
}