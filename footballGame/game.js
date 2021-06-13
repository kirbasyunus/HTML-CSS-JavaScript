const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

const drawRect = (x,y,w,h,color) => { //dikdörtgeni tanımlıyoruz
    ctx.fillStyle = color             // içini doludur
    ctx.fillRect(x,y,w,h)
}
const drawCircleF = (x,y,r,color) => {  // içi dolu daire oluştur
ctx.fillStyle = color
ctx.beginPath()
ctx.arc(x,y,r,0,2 * Math.PI)
ctx.closePath()
ctx.fill()                        // çemberin içini doldur
}
const drawCircleS = (x,y,r,w,color) => {  // içi boş çember oluştur
ctx.strokeStyle = color
ctx.lineWidth = w                           // çember kalınlığı
ctx.beginPath()
ctx.arc(x,y,r,0,2 * Math.PI)
ctx.closePath()
ctx.stroke()
}
const drawText = (text,x,y,color) => {   // score için
  ctx.fillStyle = color
  ctx.font = '50px Arial'
  ctx.fillText(text,x,y)
}
const user = {


  score : 0

}

var ball = {
  x:canvas.width/2,
  y:300,
  r:13,
  color:'crimson',
  speed:5,
  velocityX: 3,
  velocityY:4,
  stop: true
}
const com = {
  x: canvas.width - 30,
  y: ball.y,
  w:10,
  h:100,
  color:'#fff',

  score : 0

}
/*let ball1 = {
  x:canvas.width/2,
  y:canvas.height/2,
  r:13,
  color:'crimson',
  speed:5,
  velocityX: -5,
  velocityY:-5 ,
  stop: true
}*/
const update = () => {
  ball.x += ball.velocityX
  ball.y += ball.velocityY
  if (ball.y === canvas.height || ball.y===0)
    ball.velocityY -= 2*ball.velocityY


  if (ball.x === canvas.width || ball.x === 0)//sağ ve solu da kapatır
    ball.velocityX -= 2*ball.velocityX


  drawRect(870,ball.y,10,100,'#fff')

  let comLvl = 0.1
  com.y += (ball.y - (com.y + com.h/2)) * comLvl

  if (ball.y>com.y && ball.y<com.y-100 )
    ball.velocityY -= 2*ball.velocityY


  /*ball1.x += ball1.velocityX
  ball1.y += ball1.velocityY
  if (ball1.y === canvas.height || ball1.y===0){
    ball1.velocityY -= 2*ball1.velocityY

  }
  if (ball1.x === canvas.width || ball1.x === 0){
    ball1.velocityX -= 2*ball1.velocityX

  }*/


}

const render = () => {
  drawRect(0,0,canvas.width,canvas.height,'#008374')
  drawRect(canvas.width/2-2,0,4,600,'#fff')
  drawCircleF(450,300,15,'#fff')
  drawCircleS(450,300,40,10,'#333')
  drawCircleS(450,300,70,20,'#6365')
  drawText("score",385,50,'#000')
  drawText(user.score,385,95,'#fff')
  drawText(com.score,485,95,'#fff')
  drawRect(30,canvas.height/2-50,10,100,'#fff')
  drawRect(870,ball.y-50,10,100,'#fff')
  drawCircleF(ball.x,ball.y,ball.r,ball.color)
// drawRect(870,ball.y,10,100,'#fff')

  //drawCircleF(ball1.x,ball1.y,ball1.r,ball1.color)

}
const game = () => {
  update()
  render()
}
const fps = 60
setInterval(game,1000/fps)
















































//
