
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var world;
var engine;
var space;

function keyPressed() {

	if (keyCode === LEFT_ARROW) {
		Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: 20 })

	}

	if (keyCode === RIGHT_ARROW) {
		Body.applyForce(ball, { x: 0, y: 0 }, { x: 20, y: 0 })
	}

	if (keyCode === UP_ARROW) {
		Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -30 })

	}
}
cestoEsquerdo = shapeColor(blue);

function setup() {
	createCanvas(800, 500);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 500, 900, 20);
	right = new Ground(800, 200, 20, 620);
	left = new Ground(2, 200, 20, 620);
	top_wall = new Ground(300, 10, 1000, 20);
	cestoEsquerdo = new Ground(600, 480, 5, 70);
	cestoDireiro = new Ground(680, 480, 5,70);


	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restituition: 1,
		friction: 1,
		density: 1
	}
	let ground_options = {
		isStatic: true
	};


	ball = Bodies.circle(200, 100, 20, ball_options);
	World.add(world, ball);

	this.body = Bodies.rectangle(400, 500, 900, 20, ground_options);
	World.add(world, this.body);



	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {

	background(50);
	Engine.update(engine);
	drawSprites();
	top_wall.show();
	left.show();
	right.show();
	cestoEsquerdo.show();
	cestoDireiro.show();



	ellipse(ball.position.x, ball.position.y, 15);
	rect(this.body.position.x, this.body.position.y, 900, 20);
}



