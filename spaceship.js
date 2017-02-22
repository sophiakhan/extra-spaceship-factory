var spaceship1 = {
    topSpeed: '2lyph',
    shipName: 'Galaxy Cruiser',

    launch: function() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')

    setTimeout(function(){ alert("Landing Successful. Welcome to Mars."); }, 3000);
    }
}

spaceship1.launch();

var spaceship2 = new Object()
spaceship2.topSpeed = '100lyph'
spaceship2.shipName = 'The Wayfarer'
spaceship2.launch = function() {
    console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')

setTimeout(function(){ alert("Welcome to Jupiter."); }, 3000);
}

spaceship2.launch();

var FastShip = function(topSpeed, shipName) {
    this.topSpeed = '50000lyph'
    this.shipName = 'Space Blaster'
    this.launch = function() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    }
    setTimeout(function(){ alert("Welcome to Pluto."); }, 3000);
}

var fasterShip = new FastShip()

fasterShip.launch();

class SlowShip {
    constructor() {
        this.topSpeed = '1lyph'
        this.shipName = 'World Whisperer'
    }

    launch(){
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    }
}

var slowerShip = new SlowShip();

slowerShip.launch();

// adventurer mode 
//1

var spaceship1Copy = Object.assign(spaceship1, {topSpeed: '3lyph', shipName: 'Glaxay Cruiser II'});

spaceship1Copy.launch();

var spaceship2Clone = Object.assign(spaceship2, {topSpeed: '50lyph', shipName: 'Star Seeker'});

spaceship2Clone.launch();

//2

var fastestShip = new FastShip();
fastestShip.topSpeed = '700000';
fastestShip.shipName = 'Mars Launcher';

fastestShip.launch();

var slowestShip = new SlowShip();
slowestShip.topSpeed = '.5lyph';
slowestShip.shipName = 'Star Gazer';

slowestShip.launch();

//3





