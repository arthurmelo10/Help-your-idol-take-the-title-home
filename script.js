window.onload = () => {
  
  const canvas = document.getElementById("canvas");
  const start = document.getElementById("start-game");
  const timer = document.getElementById("timer");
  const scoreElement = document.getElementById("score");
  const ctx = canvas.getContext('2d');
  

  start.addEventListener('click', updateCanvas)
  // timer.addEventListener('click', updateCanvas)

  document.addEventListener('keydown', (e) => {
    switch(e.key) {
      case 'ArrowLeft':
        player.moveLeft();
        break;
      case 'ArrowRight':
        player.moveRight();
        break;
      case 'ArrowUp':
        player.moveUp();
        break;
      case 'ArrowDown':
        player.moveDown();
        break;
    }
  })

 
  function clearCanvas() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
  }
 
  //Class Background
  class Background {
     constructor(source) {
       this.posX = 0;
       this.posY = 0;

       const img = new Image();
       img.src = source;
       img.onload = () => {
         this.img = img;
        //  this.draw();
        }
    }
    draw() {
      ctx.drawImage(this.img, this.posX, this.posY, canvas.width, canvas.height);  
    }     
  }
  
  const background = new Background('./Images/view-of-football-field-vector_test.jpg'); //https://www.vecteezy.com/vector-art/1265829-view-of-football-field

  // Class Player
    class Player {
      constructor(source, x, y, w, h){
        this.posX = x;
        this.posY = y;
        this.width = w;
        this.height = h;
        this.speed = 10;
      
        const img = new Image();
        img.src = source;
        img.onload = () => {
          this.img = img;
          // console.log('teste')
        // this.draw();
        }
      }
      draw() {
        ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
        // console.log(this)
      }
      top(){
        return this.posY;
      }
      bottom(){
        return this.posY + this.height
      }
      left(){
        return this.posX;
      }
      right(){
        return this.posX + this.width;
      }
      moveLeft(){
        if((this.posX > 0) && !wallsCollision()){
          this.posX -= this.speed;
        } else {
          this.posX + 1
        }
      }
      moveRight(){
        if((this.posX < canvas.width - this.width) && !wallsCollision()){
          this.posX += this.speed;
        } else {
          this.posX - 1
        }
      }
      moveUp(){
        if((this.posY > 0) && !wallsCollision()){
          this.posY -= this.speed;
       } else {
         this.posY + 1
       }

      }
      moveDown(){
        if((this.posY < canvas.height - this.width) && !wallsCollision()){
          this.posY += this.speed;
        } else {
          this.posY - 1
        }
      }
      checkCollision(obj){
        return !(
          this.top() > obj.bottom() || 
          this.bottom() < obj.top() || 
          this.left() > obj.right() || 
          this.right() < obj.left()
        );
      }
    }

  const player = new Player('./Images/Messi.png', 250, 180, 50, 50);
  
  // Class Ball
  class Ball {
    constructor(source,x,y){
      this.posX = x;
      this.posY = y;
      this.width = 25;
      this.height = 25;

      const img = new Image();
      img.src = source;
      img.onload = () => {
        this.img = img; 
      }
    }
    draw() {
      ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
    }
    top(){
      return this.posY;
    }
    bottom(){
      return this.posY + this.height
    }
    left(){
      return this.posX;
    }
    right(){
      return this.posX + this.width;
    }
  }

  
  let ball1 = new Ball('./Images/soccer-ball.png', 25, 35)
  let ball2 = new Ball('./Images/soccer-ball.png', 85, 340)
  let ball3 = new Ball('./Images/soccer-ball.png', 500, 340)
  let ball4 = new Ball('./Images/soccer-ball.png', 438, 35)
  // let ball5 = new Ball('./Images/soccer-ball.png', 250, 300)

  let balls = [
    ball1,
    ball2,
    ball3,
    ball4,
    // ball5
  ]

  function updateBalls() {
   for(let i = 0; i < balls.length; i+=1){
     balls[i].draw();
   } 
  }

  let score = 0;
  
  function ballsCollision(){
    console.log("collision");
    for (let i = 0; i < balls.length; i+=1){
      if(player.checkCollision(balls[i])){
        score += 1;
        balls.splice(i,1);
        console.log("ball");      
      }
    }
  }
  
  function showScore(){
    scoreElement.innerHTML = score;
  }

  function stopGame() {
    if(counter === 0){
      console.log('STOP');
      cancelAnimationFrame(updateCanvas);
    }
  }
  
  function gameOver(){
    if(score >= 4){
      ctx.fillStyle = "red";
      ctx.font = '72px cursive';
      ctx.textAlign = 'center';
      ctx.fillText("VICTORY !!", 275, 215);
    } else {
      ctx.fillStyle = "black";
      ctx.font = '72px cursive';
      ctx.textAlign = 'center';
      ctx.fillText("IT'S OVER", 275, 215); 
    }
  }
 
 function updateCanvas(){
  console.log(updateCanvas);
  showScore();
  clearCanvas();
  background.draw();
  walls.forEach((wall) => {wall.draw()})
  player.draw();
  updateBalls();
  ballsCollision();
  if(showTime() > 0){
    requestAnimationFrame(updateCanvas);
  } else {
    stopGame();
    gameOver();
  }
  }

  let maze = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ];
  console.log(maze[0].length)
  let w = 10;
  let h = 20;
  
  class Wall {
    constructor(x,y){
      this.posX = x;
      this.posY = y;
      this.width = w;
      this.height = h;
    }
    draw() {
      ctx.fillStyle = "brown";
      ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
    top(){
      return this.posY;
    }
    bottom(){
      return this.posY + this.height
    }
    left(){
      return this.posX;
    }
    right(){
      return this.posX + this.width;
    }
  }
  
  const walls = [];
  
  for(let i = 0; i < maze.length; i+=1){ //linha
    for(let j = 0; j < maze[i].length; j+=1){ //coluna
      if(maze[i][j] === 1){
        walls.push(new Wall(j*w, i*h))
      }      
    }
  }
  
  function wallsCollision() {
    for( let i = 0; i < walls.length; i+=1){
      if(player.checkCollision(walls[i])){
        return true
      }
    }
  }

  let counter = 15
  let intervalId = setInterval(() => {
    counter -=1
    if(counter === 0) clearInterval(intervalId)
  },1000)
  
  function showTime(){
    return timer.innerHTML = counter;
  }


  // function createWall(){
  //   const min
  // }


  //  setTimeout(updateCanvas, 2000); 

  // const playerImg = new Image();
  // playerImg.src = 'Images/messi_test.png'
  // ctx.drawImage(playerImg, 50, 50, 200, 200);
  // document.body.appendChild(playerImg);
  // console.log(playerImg)

  //  updateCanvas();
  
      
  // class Timer {
  //   constructor() {
  //     this.currentTime = 0;
  //     this.intervalId = null;
  //   }
    
  //   start() {
  //     this.intervalId = setInterval(() => {
  //       this.currentTime += 1
  //     },1000)
  //   }
    
  //   getMinutes() {
  //     return Math.floor(this.currentTime/60);
  //   }
    
  //   getSeconds() {
  //     return this.currentTime%60
  //   }
    
  //   computeTwoDigitNumber(value) {
  //   if (value < 10) {
  //     return '0' + value;
  //   } else {
  //     return value.toString();
  //   }
  //   }

  //   stop() {
  //     clearInterval(this.intervalId)
  //   }
    
  //   reset() {
  //     this.currentTime = 0;
  //   }
    
  //   split() {
  //     let visualSplit = this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds())
  //     return visualSplit
  //   }
  // }

  // const time = new Timer();
  
  // function showTime() {
  //   time.start();
  //   time.getMinutes();
  //   time.getSeconds();
  //   return timer.innerHTML = time.split();
  // }

  
}