window.onload = () => {
   
  const canvas = document.getElementsByClassName("canvas");
  const ctx = canvas.getContext('2d');
  
  class Backgroung {
     constructor() {
       this.posX = 0;
       this.posY = 0;

       const img = new Image();
       img.src = 
     }
     
   }
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