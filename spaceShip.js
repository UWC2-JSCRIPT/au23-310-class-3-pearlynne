// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`
class SpaceShip {
	constructor(name, topSpeed) {
		this.name = name;
		this.topSpeed = topSpeed;
	}

	accelerate(){
		const {name, topSpeed} = this;
		console.log(`${name} is moving to ${topSpeed}`)
	}
}


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const ship1 = new SpaceShip("ship1", 100)
ship1.accelerate()
const ship2 = new SpaceShip("ship2", 300)
ship2.accelerate()
