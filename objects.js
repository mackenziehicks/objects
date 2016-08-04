function createCar(make, model, year, color) {
  var speed = 0;
  return {
    carMaker: make,
    carModel: model,
    carYear: year,
    carColor: color,
    getSpeed: function() {return speed;},
    accelerate: function() {
      if (speed >= 76) {
          speed = 85;
        } else {
      speed = speed + 10;}
    },
    brake: function() {
      if (speed <=7){
        speed = 0;}
      else {
      speed = speed - 7;}
      },
    failedBrake: function(){
      var slow = getRandom(0, Math.floor(speed/2));
      speed = speed - slow;
    },
    getData: function() {return this.carMaker+" "+ this.carModel+" "+this.carYear+" "+this.carColor;},
    // accelerateTo50: function(){
    //   while (speed < 50){
    //     this.accelerate();
    //   }
    // },
    // stop: function(){
    //   while (speed > 6){
    //     this.brake();
    //   }
    //   while (speed > 0){
    //     speed--;
    //   }
    // }
  };
}

function accelerateTo70(x){
  while (x.getSpeed() < 70)
  {x.accelerate();}
}

function stop(x){
  while (x.getSpeed() > 0)
  {x.brake();}
}

function getRandom(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function failedBrake(x){
  var slow = getRandom(0, x.getSpeed()/2);
  console.log(slow);
  while (x.getSpeed() > 0)
  {speed--;}
}
