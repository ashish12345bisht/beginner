//alert("hello there!");
function ageInDays(){
    var birthyear=prompt('enter your birth year!');
    var ageindays=(2020-birthyear)*365;
    var h1=document.createElement('h1');
    var textAnswer= document.createTextNode('you are '+ ageindays+' days old');
    h1.setAttribute('id','ageindays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageindays').remove();
}

function generateCat()
{
    var image= document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&rect=37%2C29%2C4955%2C3293&q=45&auto=format&w=926&fit=clip";
    div.appendChild(image);
}

function catRemover()
{
    document.getElementById("flex-box-container-2").innerHTML="";
}
function rps(yourChoice)
{
    var humanChoice, botChoice;
    humanChoice= yourChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    var result = decideWinner(humanChoice, botChoice);
    var message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt()
{
    return Math.floor(Math.random()*3);
}

function numberToChoice(number)
{
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice)
{
    var rpsDatabase = 
    {
        'rock':{'scissors':1, 'rock': 0.5, 'paper': 0},
        'paper':{'rock':1, 'paper': 0.5, 'scissors': 0},
        'scissors':{'paper':1, 'scissors': 0.5, 'rock': 0}
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourChoice, computerScore];
}

function finalMessage([yourScore, computerScore])
{
    if (yourScore === 0)
    {
        return {'message':"You lost", 'color':'red'};
    } 
    else if(yourScore===0.5) 
    {
        return {'message':'you tied','color':'yellow'};
    } 
    else 
    {
        return {'message':'you lost','color':'green'};
    }   
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage)
{
    var imagesDatabase=
    {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHtml = "<img src='"+imagesDatabase[humanImageChoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    botDiv.innerHtml = "<img src='"+imagesDatabase[botImageChoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    messageDiv.innerHtml = "<h1 style='"+finalMessage['color']+"; font-size: 60px padding: 30px;'>"+ finalMessage['message']+"</h1>";
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}