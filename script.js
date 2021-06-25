window.onload = () => {
  
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
    
  class Background {
     constructor(source) {
       this.posX = 0;
       this.posY = 0;

       const img = new Image();
       img.src = source;
       img.onload = () => {
         this.img = img;
         this.draw();
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
      
      const img = new Image();
      img.src = source;
      img.onload = () => {
        this.img = img;
        console.log('teste')
        this.draw();
      }
    }
    draw() {
      ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
      console.log(this)
    }
  }

  const player = new Player('./Images/Messi.png', 250, 180, 50, 50);

//  function updateCanvas(){
//   // background.draw();
//   // player.draw();
//   requestAnimationFrame(updateCanvas);
//  }

// const playerImg = new Image();
// playerImg.src = 'Images/messi_test.png'
// ctx.drawImage(playerImg, 50, 50, 200, 200);
// document.body.appendChild(playerImg);
// console.log(playerImg)

//  updateCanvas();
  
  // class Maze {

    // }
    
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