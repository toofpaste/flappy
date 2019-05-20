var sprite;
let ratio = 2048 / 1546;
var truckVel = 0;
var truckNegVel = -1;
var truck;
var wheelMaterial;
var allowTruckBounce = true;
var worldMaterial;
var GameScene = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize:


  function GameScene ()
  {
    Phaser.Scene.call(this, { key: 'gameScene', active: true });

    this.player = null;
    this.enemy = null;
    this.cursors = null;
    this.score = 0;
    this.scoreText = null;

  },



  preload: function ()
  {
    this.load.image('bg1', 'assets/11.png');
    this.load.image('bg2', 'assets/10.png');
    this.load.image('bg3', 'assets/9.png');
    this.load.image('bg4', 'assets/8.png');
    this.load.image('bg5', 'assets/7.png');
    this.load.image('bg6', 'assets/6.png');
    this.load.image('bg7', 'assets/5.png');
    this.load.image('bg8', 'assets/4.png');
    this.load.image('bg9', 'assets/3.png');
    this.load.image('bg10', 'assets/2.png');
    this.load.image('bg11', 'assets/1.png');
    this.load.spritesheet('truck', 'assets/car-full.png',{frameWidth: 690, frameHeight: 257});

    // this.load.spritesheet('enemy', 'assets/LightBandit_Spritesheet.png',{frameWidth: 48, frameHeight: 48});
    // this.load.spritesheet('health', 'assets/Gradient_Health_Bar.png', {frameWidth: 203, frameHeight: 26});
    // this.load.spritesheet('health2', 'assets/Gradient_Health_Bar.png', {frameWidth: 203, frameHeight: 26});


  },

  create: function ()
  {
    this.bg1 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg1').setOrigin(0, 0);
		this.bg2 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg2').setOrigin(0, 0);
		this.bg3 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg3').setOrigin(0, 0);
  	this.bg4 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg4').setOrigin(0, 0);
  	this.bg5 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg5').setOrigin(0, 0);
  	this.bg6 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg6').setOrigin(0, 0);
  	this.bg7 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg7').setOrigin(0, 0);
  	this.bg8 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg8').setOrigin(0, 0);
  	this.bg9 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg9').setOrigin(0, 0);
  	this.bg10 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg10').setOrigin(0, 0);
  	this.bg11 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg11').setOrigin(0, 0);


    // this.bg11 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg11').setOrigin(0, 0);
		// this.bg10 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg10').setOrigin(0, 0);
		// this.bg9 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg9').setOrigin(0, 0);
  	// this.bg8 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg8').setOrigin(0, 0);
  	// this.bg7 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg7').setOrigin(0, 0);
  	// this.bg6 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg6').setOrigin(0, 0);
  	// this.bg5 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg5').setOrigin(0, 0);
  	// this.bg4 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg4').setOrigin(0, 0);
  	// this.bg3 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg3').setOrigin(0, 0);
  	// this.bg2 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg2').setOrigin(0, 0);
  	// this.bg1 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg1').setOrigin(0, 0);


		// this.bg4 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg4').setOrigin(0, 900);
		// this.bg5 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg5').setOrigin(0, 900);
    // this.bg1.tileScaleX = this.bg1.tileScaleY =
    // this.bg2.tileScaleX = this.bg2.tileScaleY =
    // this.bg3.tileScaleX = this.bg3.tileScaleY =
    // this.bg4.tileScaleX = this.bg4.tileScaleY =
    // this.bg5.tileScaleX = this.bg5.tileScaleY = 3;

    // var platforms = this.physics.add.staticGroup();
    // var platforms2 = this.physics.add.staticGroup();
    //
		// platforms.create(16 * 2, game.config.height - 16 * 2, 'bg').setScale(4).refreshBody();
  //  platforms2.create(500, 500, 'bg11').setScale(4).setOrigin(-200, 200);
      this.bg1.setScrollFactor(0);
  		this.bg2.setScrollFactor(0);
  		this.bg3.setScrollFactor(0);
      this.bg4.setScrollFactor(0);
      this.bg5.setScrollFactor(0);
      this.bg6.setScrollFactor(0);
      this.bg7.setScrollFactor(0);
      this.bg8.setScrollFactor(0);
      this.bg9.setScrollFactor(0);
      this.bg10.setScrollFactor(0);
      this.bg11.setScrollFactor(0);

  		this.bg11.setDisplaySize(game.config.width, game.config.height);
  		this.bg11.setScale(ratio);

  		this.bg10.setDisplaySize(game.config.width, game.config.height);
  		this.bg10.setScale(ratio);

  		this.bg9.setDisplaySize(game.config.width, game.config.height);
  		this.bg9.setScale(ratio);

      this.bg8.setDisplaySize(game.config.width, game.config.height);
     this.bg8.setScale(ratio);

      this.bg7.setDisplaySize(game.config.width, game.config.height);
      this.bg7.setScale(ratio);

      this.bg6.setDisplaySize(game.config.width, game.config.height);
      this.bg6.setScale(ratio);

      this.bg5.setDisplaySize(game.config.width, game.config.height);
      this.bg5.setScale(ratio);

      this.bg4.setDisplaySize(game.config.width, game.config.height);
      this.bg4.setScale(ratio);

      this.bg3.setDisplaySize(game.config.width, game.config.height);
      this.bg3.setScale(ratio);

      this.bg2.setDisplaySize(game.config.width, game.config.height);
      this.bg2.setScale(ratio);

      this.bg1.setDisplaySize(game.config.width, game.config.height);
      this.bg1.setScale(ratio);

  		// this.bg4.setDisplaySize(game.config.width, game.config.height);
  		// this.bg4.setScale(ratio);
      // //
  		// this.bg5.setDisplaySize(game.config.width, game.config.height);
  		// this.bg5.setScale(ratio);
      // this.health = this.physics.add.sprite(0,0, 'health').setOrigin(0,0);
      // this.health.setCollideWorldBounds(true);
      // this.health2 = this.physics.add.sprite(0,0, 'health2').setOrigin(0,0);
      // this.health2.setCollideWorldBounds(true);

      this.player = this.physics.add.sprite(0, -300, 'truck');

      //this.player = this.physics.add.sprite(0, 0, 'character2');
      // this.enemy = this.physics.add.sprite(1000, 0, 'enemy');
      //   this.enemy.setBounce(0.2);
      //   this.enemy.setCollideWorldBounds(true);
      //   this.enemy.setScale(5);
      //   //this.enemy.body.setSize(14, 7, 31, 35);
      //   this.enemy.body.mass = 50;
      //   this.enemy.body.setFrictionX(-5);
      //   this.enemy.body.setSize(39, 46, false);
      //   this.enemy.body.setOffset(6, 0);
        // var enemyBody = enemy.body.physics.add.staticGroup();
    		this.player.setBounce(0.1);
    		this.player.setCollideWorldBounds(true);
    		this.player.setScale(0.35);
    		//this.player.body.setSize(14, 7, 31, 35);
        this.player.body.mass = 50;
    		this.player.body.setSize(690, 257, false);
    		this.player.body.setOffset(0, 0);
        //this.physics.add.collider(this.enemy, platforms);
    		// this.physics.add.collider(this.player, platforms);
      //  this.physics.add.collider(this.player, platforms2);





  		// this.anims.create({
  		// 	key: 'idle',
  		// 	frames: this.anims.generateFrameNumbers('character2', { start: 59, end: 63 }),
  		// 	frameRate: 4,
  		// 	repeat: -1
  		// });




    //var button = this.add.image(800-16, 16, 'fullscreen', 0).setOrigin(1, 0).setInteractive();

    this.physics.world.bounds.width = 4000;
    //this.physics.world.bounds.height = 800;
    this.cameras.main.setBounds(0, 0, 4000, 720);
    this.cameras.main.startFollow(this.player);
    this.cursors = this.input.keyboard.createCursorKeys();

    var FKey = this.input.keyboard.addKey('F');


    FKey.on('down', function () {

      if (this.scale.isFullscreen)
      {
        //button.setFrame(0);
        this.scale.stopFullscreen();
      }
      else
      {
        //button.setFrame(1);
        this.scale.startFullscreen();
      }

    }, this);
  },
  update: function (time, theta)
  {

    var cursors = this.cursors;
    var player = this.player;
    this.bg1.tilePositionX = this.cameras.main.scrollX * .1 / ratio;
    this.bg2.tilePositionX = this.cameras.main.scrollX * .2 / ratio;
    this.bg3.tilePositionX = this.cameras.main.scrollX * .3 / ratio;
    this.bg4.tilePositionX = this.cameras.main.scrollX * .4 / ratio;
    this.bg5.tilePositionX = this.cameras.main.scrollX * .5 / ratio;
    this.bg6.tilePositionX = this.cameras.main.scrollX * .6 / ratio;
    this.bg7.tilePositionX = this.cameras.main.scrollX * .7 / ratio;
    this.bg8.tilePositionX = this.cameras.main.scrollX * .8 / ratio;
    this.bg9.tilePositionX = this.cameras.main.scrollX * .9 / ratio;
    this.bg10.tilePositionX = this.cameras.main.scrollX * 1.0 / ratio;
    this.bg11.tilePositionX = this.cameras.main.scrollX * 1.1 / ratio;
    // this.bg4.tilePositionX = this.cameras.main.scrollX * .8 / ratio;
    // this.bg5.tilePositionX = this.cameras.main.scrollX * 1 / ratio;
    let onGround = (player.body.touching.down || player.body.blocked.down);
		let moving = false;



      // console.log("enemy" + Math.abs(enemy.body.velocity.x));
      // console.log("player" +isHit);

      // player 863
      // enemy 960
      //accelerateTo: function (gameObject, x, y, speed, xSpeedMax, ySpeedMax)
      if(Math.abs(player.body.velocity.x) < 5.){
        truckVel = 0;
        player.setVelocityX(truckVel);
        player.setGravityX(0);
        moving = false;
      }
        console.log("speed" + truckVel);
    if (cursors.right.isDown && onGround && !cursors.left.isDown) {
      moving = true;
      if(truckVel < 400){
        truckVel += 5;
      }
      cursors.right.on('up', function(event)
      {
        truckVel = 0;
        player.setGravityX(-200);
      });
  			player.setVelocityX(truckVel);
        player.flipX = false;
  		}

  		if (cursors.left.isDown && onGround && !cursors.right.isDown) {
        moving = true;
        if(truckVel < 400){
          truckVel += 5;
        }
        cursors.left.on('up', function(event)
        {
          truckVel = 0;
          player.setGravityX(200);
        });
          player.setVelocityX(truckVel * (-1));
          player.flipX = true;
  		}


    //  if(enHealth > 75){
      // }else if(enHealth <= 75 && enHealth > 50){
      // }else if(enHealth <= 50 && enHealth > 25){
      // }else if(enHealth <= 25 && enHealth > 0){
      // }else if(enHealth <= 0){
      // }
      // if(playHealth > 75){
      // }else if(playHealth <= 75 && playHealth > 50){
      // }else if(playHealth <= 50 && playHealth > 25){
      // }else if(playHealth <= 25 && playHealth > 0){
      // }else if(playHealth <= 0){
      // }
      //
      // if (!enemyGround && !enemyMoving && enHealth > 0) {
  		// } else if(enemyMoving && enemyGround && !isClose && enHealth > 0){
      // }else if(((howClose <= 300) && isHeight && enHealth > 0) || enHit){
      // }else if(enHealth > 0){
  		// }else {
      // }
      //
  		// if (!onGround && !cursors.space.isDown && !isHit && !cursors.shift.isDown && playHealth > 0) {
  		// } else if(cursors.space.isDown && !isHit && playHealth > 0){
      // }else if (moving && playHealth > 0) {
  		// } else if(isHit && playHealth > 0){
      // }else if(cursors.shift.isDown && playHealth > 0){
      // }else if (playHealth > 0){
  		// }else {
      // }
      // if(onGround && cursors.down.isDown && playHealth > 0)
      // {
      // }



  },



});

var config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'phaser-example',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 2048,
    height: 1546
  },
  pixelArt: true,
  antialias: false,﻿
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
      debug: true
    }
  },
  scene: GameScene
};

var game = new Phaser.Game(config);
