!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/fortify/",t(t.s=2)}([function(e,t){e.exports=Phaser},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.COLORS={DEFAULT:"#ffffff",LOSE:"#f2704c",WIN:"#fab142"},i=t.DATA={SHAPES:"shapes"},o=t.FONTS={DEFAULT:"Arial"},a=t.FRAMES={BACKGROUND:"kids-room",BEAR:"bear",PILLOW:"pillow",SOCCERBALL:"soccerball",START_BUTTON:"start-button",TITLE:"title"},c=t.SCENES={BOOT:"BOOT",GAME_OVER:"GAME_OVER",INTRO:"INTRO",MAIN:"MAIN",WIN:"WIN"},s=t.SIZES={SMALL:16,MEDIUM:32,LARGE:48},l=t.TEXTURES={SHEET:"sheet"};t.default={COLORS:r,DATA:i,FONTS:o,FRAMES:a,SCENES:c,SIZES:s,TEXTURES:l}},function(e,t,n){"use strict";n(3);var r=n(4),i=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a=n(17),c={backgroundColor:"#3b746e",width:600,height:800,title:"Fortify",url:"https://remarkablegames.org/fortify/",version:"0.5.1",scene:[r.Boot,r.Intro,r.Lose,r.Main,r.Win],physics:{default:"matter",matter:{debug:!1}}},s=new o.default.Game(c);(0,a.addResizeListener)(s)},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5);Object.defineProperty(t,"Boot",{enumerable:!0,get:function(){return r(i).default}});var o=n(9);Object.defineProperty(t,"Intro",{enumerable:!0,get:function(){return r(o).default}});var a=n(10);Object.defineProperty(t,"Lose",{enumerable:!0,get:function(){return r(a).default}});var c=n(11);Object.defineProperty(t,"Win",{enumerable:!0,get:function(){return r(c).default}});var s=n(12);Object.defineProperty(t,"Main",{enumerable:!0,get:function(){return r(s).default}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=n(0),l=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{key:c.SCENES.BOOT}))}return o(t,e),a(t,[{key:"preload",value:function(){var e=this.load;e.atlas(c.TEXTURES.SHEET,n(6),n(7)),e.json(c.DATA.SHAPES,n(8))}},{key:"create",value:function(){this.scene.start(c.SCENES.INTRO)}}]),t}(s.Scene);t.default=l},function(e,t,n){e.exports=n.p+"static/media/game-sprites.b9fbeb03.png"},function(e,t){e.exports={textures:[{image:"game-sprites.png",format:"RGBA8888",size:{w:1004,h:893},scale:1,frames:[{filename:"bear",rotated:!1,trimmed:!1,sourceSize:{w:80,h:118},spriteSourceSize:{x:0,y:0,w:80,h:118},frame:{x:0,y:0,w:80,h:118}},{filename:"kids-room",rotated:!1,trimmed:!1,sourceSize:{w:602,h:803},spriteSourceSize:{x:0,y:0,w:602,h:803},frame:{x:80,y:0,w:602,h:803}},{filename:"pillow",rotated:!1,trimmed:!1,sourceSize:{w:123,h:109},spriteSourceSize:{x:0,y:0,w:123,h:109},frame:{x:682,y:0,w:123,h:109}},{filename:"soccerball",rotated:!1,trimmed:!1,sourceSize:{w:199,h:198},spriteSourceSize:{x:0,y:0,w:199,h:198},frame:{x:805,y:0,w:199,h:198}},{filename:"start-button",rotated:!1,trimmed:!1,sourceSize:{w:317,h:90},spriteSourceSize:{x:0,y:0,w:317,h:90},frame:{x:0,y:803,w:317,h:90}},{filename:"title",rotated:!1,trimmed:!1,sourceSize:{w:253,h:56},spriteSourceSize:{x:0,y:0,w:253,h:56},frame:{x:317,y:803,w:253,h:56}}]}],meta:{app:"https://www.codeandweb.com/texturepacker",version:"3.0",smartupdate:"$TexturePacker:SmartUpdate:a5c1bc0b08ec2da4d71a7876e3ddd9ed:11f097a898b838f63dbcbc758bbbee2d:6c31e76162759595c120c84b8850a36e$"}}},function(e,t){e.exports={generator_info:"Shape definitions generated with PhysicsEditor. Visit https://www.codeandweb.com/physicseditor",soccerball:{type:"fromPhysicsEditor",label:"soccerball",isStatic:!1,density:.10000000149011612,restitution:0,friction:.10000000149011612,frictionAir:.009999999776482582,frictionStatic:.5,collisionFilter:{group:0,category:1,mask:255},fixtures:[{label:"soccerball-fixture",isSensor:!1,circle:{x:100,y:98,radius:99.32774033471213}}]},pillow:{type:"fromPhysicsEditor",label:"pillow",isStatic:!1,density:.10000000149011612,restitution:0,friction:.10000000149011612,frictionAir:.009999999776482582,frictionStatic:.5,collisionFilter:{group:0,category:1,mask:255},fixtures:[{label:"pillow-fixture",isSensor:!1,vertices:[[{x:111,y:108.5},{x:118,y:108.5},{x:122.5,y:105},{x:122.5,y:95},{x:120.5,y:93},{x:106,y:103.5}],[{x:112,y:6.5},{x:107,y:10.5},{x:120.5,y:23},{x:122.5,y:20},{x:122.5,y:11},{x:121,y:8.5},{x:118,y:6.5}],[{x:-.5,y:3},{x:-.5,y:13},{x:1.5,y:15},{x:16,y:4.5},{x:10,y:-.5},{x:4,y:-.5}],[{x:11,y:101.5},{x:16,y:97.5},{x:1.5,y:85},{x:-.5,y:88},{x:-.5,y:97},{x:2,y:100.5}],[{x:1.5,y:85},{x:16,y:97.5},{x:30,y:100.5},{x:49,y:101.5},{x:64,y:4.5},{x:1.5,y:19},{x:-.5,y:27},{x:-.5,y:74}],[{x:120.5,y:23},{x:107,y:10.5},{x:104,y:10.5},{x:49,y:101.5},{x:55,y:103.5},{x:106,y:103.5},{x:122.5,y:81},{x:122.5,y:34}],[{x:120.5,y:93},{x:122.5,y:81},{x:106,y:103.5}],[{x:91,y:7.5},{x:70,y:6.5},{x:49,y:101.5},{x:104,y:10.5}],[{x:16,y:4.5},{x:1.5,y:15},{x:1.5,y:19},{x:64,y:4.5}],[{x:64,y:4.5},{x:49,y:101.5},{x:70,y:6.5}]]}]},bear:{type:"fromPhysicsEditor",label:"bear",isStatic:!1,density:.10000000149011612,restitution:0,friction:.10000000149011612,frictionAir:.009999999776482582,frictionStatic:.5,collisionFilter:{group:0,category:1,mask:255},fixtures:[{label:"",isSensor:!1,vertices:[[{x:-.5,y:74},{x:19.5,y:74},{x:61,y:71.5},{x:16,y:51.5}],[{x:64,y:114.5},{x:68.5,y:104},{x:61,y:71.5},{x:19.5,y:74},{x:42.5,y:102}],[{x:68,y:-.5},{x:53,y:5.5},{x:64,y:48.5},{x:74.5,y:35},{x:78,y:6.5}],[{x:24,y:117.5},{x:42.5,y:102},{x:19.5,y:74},{x:15.5,y:110}],[{x:.5,y:7},{x:0,y:19.5},{x:16,y:51.5},{x:61,y:71.5},{x:64,y:48.5},{x:10,y:-.5},{x:9,y:-.5}],[{x:53,y:5.5},{x:10,y:-.5},{x:64,y:48.5}],[{x:73,y:76.5},{x:79.5,y:73},{x:64,y:48.5},{x:61,y:71.5}]]}]},"kids-room":{type:"fromPhysicsEditor",label:"kids-room",isStatic:!1,density:.10000000149011612,restitution:0,friction:.10000000149011612,frictionAir:.009999999776482582,frictionStatic:.5,collisionFilter:{group:0,category:1,mask:255},fixtures:[{label:"",isSensor:!1,vertices:[[{x:0,y:713},{x:602,y:703},{x:602,y:0},{x:0,y:0}]]}]}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=n(0),l=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{key:c.SCENES.INTRO}))}return o(t,e),a(t,[{key:"create",value:function(){var e=this.game.config.width/2;this.add.image(e,291,c.TEXTURES.SHEET,c.FRAMES.BEAR),this.add.image(e,401,c.TEXTURES.SHEET,c.FRAMES.TITLE),this.add.image(e,521,c.TEXTURES.SHEET,c.FRAMES.START_BUTTON),this.input.once("pointerdown",this.play,this)}},{key:"play",value:function(){this.scene.start(c.SCENES.MAIN,1)}}]),t}(s.Scene);t.default=l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=n(0),l=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{key:c.SCENES.GAME_OVER}))}return o(t,e),a(t,[{key:"init",value:function(e){this.level=e}},{key:"create",value:function(){var e=this.game.config.width/2;this.add.text(e,200,"Teddy got hit =(",{color:c.COLORS.LOSE,fontFamily:c.FONTS.DEFAULT,fontSize:c.SIZES.MEDIUM}).setOrigin(.5),this.add.image(e,300,c.TEXTURES.SHEET,c.FRAMES.BEAR).setAngle(90),this.add.text(e,400,"Try again?",{color:c.COLORS.LOSE,fontFamily:c.FONTS.DEFAULT,fontSize:c.SIZES.MEDIUM}).setOrigin(.5),this.input.once("pointerdown",this.tryAgain,this)}},{key:"tryAgain",value:function(){this.scene.start(c.SCENES.MAIN,this.level)}}]),t}(s.Scene);t.default=l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=n(0),l=function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{key:c.SCENES.WIN}))}return o(t,e),a(t,[{key:"init",value:function(e){this.level=e}},{key:"create",value:function(){var e=this.game.config.width/2;this.add.text(e,200,"You saved teddy =)",{color:c.COLORS.WIN,fontFamily:c.FONTS.DEFAULT,fontSize:c.SIZES.MEDIUM}).setOrigin(.5),this.add.image(e,300,c.TEXTURES.SHEET,c.FRAMES.BEAR),this.add.text(e,400,"Click to continue",{color:c.COLORS.WIN,fontFamily:c.FONTS.DEFAULT,fontSize:c.SIZES.MEDIUM}).setOrigin(.5),this.input.once("pointerdown",this.continueGame,this)}},{key:"continueGame",value:function(){this.scene.start(c.SCENES.MAIN,this.level+1)}}]),t}(s.Scene);t.default=l},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),l=n(0),u=n(13),f=n(16),y=function(e){return e&&e.__esModule?e:{default:e}}(f),d=l.Math.DegToRad(90),p=function(e){return"Pillows: "+e},h=function(e){return"Level "+e},b=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{key:s.SCENES.MAIN}))}return a(t,e),c(t,[{key:"init",value:function(e){this.level=e;var t=y.default[e];if(!t)return void this.scene.start(s.SCENES.INTRO);this.cratesAllowed=t.cratesAllowed,this.totalBalls=t.totalBalls,this.ballSpeed=t.ballSpeed,this.balls=[],this.cratesPlaced=0,this.shapes=this.cache.json.get(s.DATA.SHAPES),this.teddy=null}},{key:"create",value:function(){var e=this,t=this.game.config,n=t.width,r=t.height,i=this.matter.world;i.setBounds(0,0,n,r-90,128,!0,!0,!1,!0),this.add.image(0,0,s.TEXTURES.SHEET,s.FRAMES.BACKGROUND).setOrigin(0,0),this.teddy=new u.Teddy(i,200,750),this.cratesLeftText=this.add.text(25,25,p(this.cratesAllowed-this.cratesPlaced),{color:s.COLORS.DEFAULT,fontFamily:s.FONTS.DEFAULT,fontSize:s.SIZES.LARGE});var o=this.add.text(0,0,h(this.level),{color:s.COLORS.DEFAULT,fontFamily:s.FONTS.DEFAULT,fontSize:s.SIZES.LARGE});o.setPosition(n-o.width-25,25),this.input.on("pointerdown",function(t){e.cratesPlaced<e.cratesAllowed&&(new u.Pillow(i,t.x,t.y).init(),e.cratesPlaced++,e.cratesLeftText.text=p(e.cratesAllowed-e.cratesPlaced))},this),i.on("collisionstart",function(e,t,n){t&&t.gameObject&&t.gameObject.onCollision&&t.gameObject.onCollision(n),n&&n.gameObject&&n.gameObject.onCollision&&n.gameObject.onCollision(t)},this)}},{key:"launchBall",value:function(){var e=l.Math.Between(0,this.game.config.width-200),t=this.matter.add.sprite(e,-200,s.TEXTURES.SHEET,s.FRAMES.SOCCERBALL,{shape:this.shapes[s.FRAMES.SOCCERBALL]}),n=(this.teddy.x-e)*(1/this.ballSpeed),i=(this.teddy.y- -200)*(1/this.ballSpeed);t.setScale(.5),t.setMass(30),t.setVelocity(n,i),t.setBounce(1),t.setFriction(0,0,0),t.setFrictionAir(.005),this.balls=[].concat(r(this.balls),[t])}},{key:"update",value:function(e,t){var n=this.teddy.body.angle;if(n>=d||n<=-d)return void this.scene.start(s.SCENES.GAME_OVER,this.level);this.balls.length===this.totalBalls&&this.balls.reduce(function(e,t){if(!e)return!1;if(t&&t.body){if(t.body.speed*t.body.speed+t.body.angularSpeed*t.body.angularSpeed<.1)return!0}return!1},!0)&&this.scene.start(s.SCENES.WIN,this.level),this.balls.length!==this.totalBalls&&this.cratesPlaced===this.cratesAllowed&&this.launchBall()}}]),t}(l.Scene);t.default=b},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(14);Object.defineProperty(t,"Pillow",{enumerable:!0,get:function(){return r(i).default}});var o=n(15);Object.defineProperty(t,"Teddy",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=n(0),l=function(e){function t(e,n,o,a,s,l){r(this,t);var u=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,o,c.TEXTURES.SHEET,c.FRAMES.PILLOW,{shape:e.scene.cache.json.get(c.DATA.SHAPES)[c.FRAMES.PILLOW]}));return e.scene.add.existing(u),u}return o(t,e),a(t,[{key:"init",value:function(){this.setVelocity(0),this.setBounce(0),this.setFriction(1),this.setFrictionAir(0),this.setMass(300)}}]),t}(s.Physics.Matter.Sprite);t.default=l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=n(0),l=function(e){function t(e,n,o,a,s,l){r(this,t);var u=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,o,c.TEXTURES.SHEET,c.FRAMES.BEAR,{shape:e.scene.cache.json.get(c.DATA.SHAPES)[c.FRAMES.BEAR]}));return u.setScale(.5),e.scene.add.existing(u),u}return o(t,e),a(t,[{key:"onCollision",value:function(e){if(null!==e.gameObject){var t=this.world.scene;t.scene.start(c.SCENES.GAME_OVER,t.level)}}}]),t}(s.Physics.Matter.Sprite);t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={1:{cratesAllowed:3,totalBalls:1,ballSpeed:80},2:{cratesAllowed:4,totalBalls:2,ballSpeed:70},3:{cratesAllowed:5,totalBalls:3,ballSpeed:60}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addResizeListener=function(e){var t=function(){var t=e.canvas,n=void 0,r=void 0;window.innerWidth?(n=window.innerWidth,r=window.innerHeight):(n=window.screen.width,r=window.screen.height);var i=n/r,o=t.width/t.height,a=void 0,c=void 0;i<o?(a=n,c=n/o):(a=r*o,c=r),t.style.width=a+"px",t.style.height=c+"px"};return document.addEventListener("DOMContentLoaded",function(){t(),window.addEventListener("resize",t)}),t}}]);
//# sourceMappingURL=main.ebdb2221.js.map