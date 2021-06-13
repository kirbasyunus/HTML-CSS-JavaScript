
const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

const drawRect = (x,y,w,h,color) => {
    ctx.fillStyle = color
    ctx.fillRect(x,y,w,h)
}
const drawText = (text,x,y,color) => {   // score için
  ctx.fillStyle = color
  ctx.font = '50px Arial'
  ctx.fillText(text,x,y)
}
const drawCircleF = (x,y,r,color) => {  // içi dolu daire oluştur
ctx.fillStyle = color
ctx.beginPath()
ctx.arc(x,y,r,0,2 * Math.PI)
ctx.closePath()
ctx.fill()                        // çemberin içini doldur
}
var snake = {
    x: canvas.width/2,
    y: canvas.height/2,
    w: 18,
    h: 18,
    color:'rgb(36, 32, 33)',
    speed:50,
    velocityX: 0,
    velocityY:0,
    stop: true

}

function randomX(min,max){
  return Math.floor(((Math.random() * (max - min)) + min)/10)*10
}
function randomY(min,max){
  return Math.floor(((Math.random() * (max - min)) + min)/10)*10

}
function randomZ(min,max){
  return Math.floor(((Math.random() * (max - min)) + min)/10)*10

}
const forage = {
  x: randomX(65, 405),
  y: randomY(65, 535),
  w: 18,
  h: 18,
  color : 'yellow',
  velocityX: 1,
  velocityY:1,
  stop: false

}
const badFood = {
  x: randomX(15,435),
  y: 15,
  k: 50,
  r: 15,
  color : 'skyblue',
  velocityX: 2,
  velocityY:0,
  stop: false
}

const badFoodA = {
  x: randomX(15,435),
  y: 15,
  k: 50,
  r: 15,
  color : 'skyblue',
  velocityX: 2,
  velocityY:0,
  stop: false
}
const badFoodB = {
  x: 15,
  y: randomZ(15,585),
  k: 50,
  r: 15,
  color : 'purple',
  velocityX: 2,
  velocityY:0,
  stop: false
}
const badFoodC = {
  x: 200,
  y: 250,
  k: 50,
  r: 15,
  color : 'purple',
  velocityX: 2,
  velocityY:0,
  stop: false
}

var xPos =snake.velocityX
var yPos =snake.velocityY
var score = 0
const update = () => {
  snake.x += parseInt(xPos)
  snake.y += parseInt(yPos)
  if (snake.x >= forage.x - 12 && forage.x > snake.x - 12 && -12 + snake.y < forage.y && forage.y < snake.y + 10  ){
      score = score + 1
      forage.x = randomX(0, 430)
      forage.y = randomY(0, 580)
      if (score % 5 === 0){
        snake.velocityX += 10
        snake.velocityY += 10
      }


}

  if (badFood.x === 15)
    snake.x = 445
  else if (badFood.x === 445)
    snake.x = 0
  else if (badFood.y === 0)
    badFood.y = 585
  else if (badFood.y === 585)
    badFood.y = 0
    // duvardan geçme

     if (snake.x === -4 || snake.x === 445 || snake.y === -4 || snake.y === 585 ){
      alert("scores: "+score)
      location.reload();

    }
  // if (snake.x >= badFoodC.x - 30 && badFoodC.x > snake.x - 12 &&  snake.y >= badFoodC.y - 30 && badFoodC.y > snake.y - 12 ){
  //   alert("scores: "+score,location.reload())
  //   clearInterval(interval);

//   }
if ( score > 0 ){
  drawCircleF( badFood.x,badFood.y,badFood.r,badFood.color)

  badFood.x += 0
  badFood.y += 1
  if (badFood.y === 585){
   badFood.y = 15
   badFood.x = 0

    badFood.x = randomX(15,435)
  }

    if(score > 1){
      badFood.y += 1
    }
    if (snake.x >= badFood.x - 30 && badFood.x > snake.x - 12 &&  snake.y >= badFood.y - 30 && badFood.y > snake.y - 12 ){
      alert("scores: "+score,location.reload())
      clearInterval(interval);

    }
}
if ( score > 1 ){
  drawCircleF( badFoodA.x,badFoodA.y,badFoodA.r,'green')

  badFoodA.x += 0
  badFoodA.y += 1
  if (badFoodA.y === 585){
   badFoodA.y = 15
   badFoodA.x = 0
    badFoodA.x = randomY(15,435)


    if(score > 2){
      badFoodA.x += 0
      badFoodA.y += 1
    }

    }
    if (snake.x >= badFoodA.x - 30 && badFoodA.x > snake.x - 12 &&  snake.y >= badFoodA.y - 30 && badFoodA.y > snake.y - 12 ){
      alert("scores: "+score,location.reload())
      clearInterval(interval);
}
  }
    if ( score > 3 ){
      drawCircleF( badFoodB.x,badFoodB.y,badFoodB.r,'purple')

      badFoodB.x += 1
      badFoodB.y += 0
     if (badFoodB.x === 435){
       badFoodB.x = 15
       badFoodB.x = 0
        badFoodB.y = randomY(20,585)


       if(score > 5){
          badFoodB.x += 1
          badFoodB.y += 0
        }

      }
      if (snake.x >= badFoodB.x - 30 && badFoodB.x > snake.x - 12 &&  snake.y >= badFoodB.y - 30 && badFoodB.y > snake.y - 12 ){
        alert("scores: "+score,location.reload())
        clearInterval(interval);

      }
}
  if(score > 4){
    forage.x += forage.velocityX
    forage.y += forage.velocityY
    if (forage.y === canvas.height || forage.y===0)
      forage.velocityY -= 2*forage.velocityY


    if (forage.x === canvas.width || forage.x === 0)//sağ ve solu da kapatır
      forage.velocityX -= 2*forage.velocityX

  }

  //  console.log(badFoodB.x,badFoodA.x,forage.x);

}
//if ( score > -1 ){//deneme için yemek C
//  drawCircleF( badFoodC.x,badFoodC.y,badFoodC.r,badFoodC.color)
//}


//Yön tuşlarını kullanma
function move(e) {
    if (e.keyCode==37&&snake.velocityX!==1) {
      xPos=0;
      yPos=0;
      xPos-=1;
    }
    if(e.keyCode==39&&snake.velocityY!==1){
      xPos=0;
      yPos=0;
      xPos+=1;
    }
    if (e.keyCode==38&&snake.velocityX!==-1){
      yPos=0;
      xPos=0;
      yPos-=1;
    }
    if(e.keyCode==40&&snake.velocityY!==-1){
      xPos=0;
      yPos=0;
      yPos+=1;

    }

}

/*var score = -1
//function scoreFood() { }
  if ((snake.x < forage.x < snake.x + 5) && (snake.y < forage.y < snake.y + 5 )){
if (snake.x === forage.x && snake.y === forage.y ){
    score = score + 1
    forage.x = (randomX(0, 430) )*5

    forage.y = randomY(0, 580)%10 *10
    console.log(forage.x);
}*/
        document.onkeydown=move;
render = () => {
drawRect(0,0,canvas.width,canvas.height,'rgb(36, 32, 33)')
drawRect(snake.x,snake.y,snake.w,snake.h,'crimson')
drawRect(forage.x,forage.y,forage.w,forage.h,'yellow')
drawText("score : ",125,35,'#000')
drawText(score,290,35,'#000')


}


const game = () => {
  render()
  update()
  //food()
}
var fps = 180
setInterval(game,1000/fps)
