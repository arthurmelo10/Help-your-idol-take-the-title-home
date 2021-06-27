window.onload = () => {
  
  const canvas = document.getElementById("canvas");
  const start = document.getElementById("start-game");
  const ctx = canvas.getContext('2d');

  start.addEventListener('click', updateCanvas)

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
        console.log('teste')
        // this.draw();
      }
    }
    draw() {
      ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
      // console.log(this)
    }
    moveLeft(){
      if(this.posX > 0){
        this.posX -= this.speed;
      }
    }
    moveRight(){
      if(this.posX < canvas.width - this.width){
        this.posX += this.speed;
      }
    }
    moveUp(){
      if(this.posY > 0){
        this.posY -= this.speed;
      }
    }
    moveDown(){
      if(this.posY < canvas.height - this.width){
        this.posY += this.speed;
      }
    }
  }

  const player = new Player('./Images/Messi.png', 250, 180, 50, 50);

 function updateCanvas(){
  console.log(updateCanvas);
  clearCanvas();
  background.draw();
  player.draw();
  walls.forEach((wall) => {wall.draw()})
  requestAnimationFrame(updateCanvas);
 }

  let maze = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ];
  console.log(maze[0].length)
  class Wall {
    constructor(x,y){
      this.posX = x;
      this.posY = y;
      this.width = 10;
      this.height = 20;
    }
    draw() {
      ctx.fillStyle = "red";
      ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }    
  }
  
  const walls = [];
  
  for(let i = 0; i < maze.length; i+=1){ //linha
    for(let j = 0; j < maze[i].length; j+=1){ //coluna
      if(maze[i][j] === 1){
        walls.push(new Wall(j*10, i*20))
      }      
    }
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
    //     constructor() {
    //       this.currentTime = 0;
    //       this.intervalId = null;
    //     }
      
    //     start(callback) {
    //       this.intervalId = setInterval(() => {
    //         this.currentTime += 1
    //       },1000)
    //     }
      
    //     getMinutes() {
    //       return Math.floor(this.currentTime/60);
    //     }
      
    //     getSeconds() {
    //       return this.currentTime%60
    //     }
      
    //     computeTwoDigitNumber(value) {
    //     // let minutes = this.getMinutes();
    //     // let seconds = this.getSeconds();
    //     if (value < 10) {
    //       return '0' + value;
    //     } else {
    //       return value.toString();
    //     }
    //     }
    //     // if (seconds < 10) {
    //     //   seconds = '0' + this.getSeconds();
    //     // } else if (seconds >= 10) {
    //     //   seconds = this.getSeconds();
    //     // }
    //     // let minutes = (this.getMinutes() < 10 ? '0': '') + this.getMinutes(); 
    //     // let seconds = (this.getSeconds() < 10 ? '0': '') + this.getSeconds();
    //     // value = minutes || seconds
    //     stop() {
    //       clearInterval(this.intervalId)
    //     }
      
    //     reset() {
    //       this.currentTime = 0;
    //     }
      
    //     split() {
    //       let visualSplit = this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds())
    //       return visualSplit
    //     }
    // }
      
}