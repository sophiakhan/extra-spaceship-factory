var spaceship1 = {
    topSpeed: '2lyph',
    shipName: 'Galaxy Cruiser',

    launch: function() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    }
}

spaceship1.launch();

var spaceship2 = new Object()
spaceship2.topSpeed = '100lyph'
spaceship2.shipName = 'The Wayfarer'
spaceship2.launch = function() {
    console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
}

spaceship2.launch();

var FastShip = function() {
    this.topSpeed = '50000lyph'
    this.shipName = 'Space Blaster'
    this.launch = function() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    }
}

var fastestShip = new FastShip()

fastestShip.launch();

class SlowShip {
    constructor() {
        this.topSpeed = '1lyph'
        this.shipName = 'World Whisperer'
    }

    launch(){
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    }
}

var slowestShip = new SlowShip();

slowestShip.launch();

// adventurer mode 

