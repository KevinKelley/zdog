/* globals makeBuilding, makeDome */

// -------------------------- demo -------------------------- //

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var w = 192;
var h = 192;
var minWindowSize = Math.min( window.innerWidth, window.innerHeight );
var zoom = Math.min( 7, Math.floor( minWindowSize / w ) );
// var zoom = 5;
var pixelRatio = window.devicePixelRatio || 1;
zoom *= pixelRatio;
var canvasWidth = canvas.width = w * zoom;
var canvasHeight = canvas.height = h * zoom;
// set canvas screen size
if ( pixelRatio > 1 ) {
  canvas.style.width = canvasWidth / pixelRatio + 'px';
  canvas.style.height = canvasHeight / pixelRatio + 'px';
}

var isRotating = false;

// colors
// var white = 'white';
// var southWall = white;
// var westWall = '#CDE';
// var eastWall = '#8AD';
// var roof = '#06B';
// var northWall = roof;
// var navy = '#037';
// var midnight = '#024';

Shape.defaults.fill = true;
Shape.defaults.stroke = false;

var camera = new Shape({
  rendering: false,
  rotate: {
    y: -TAU/8,
  },
});

var island = new Shape({
  rendering: false,
  addTo: camera,
  scale: { x: 1/Math.sin(TAU/8), z: 1/Math.sin(TAU/8) }
});

// Shape.defaults.lineWidth = 1/zoom;

// -- illustration shapes --- //


// lil house in front
var buildAnchor0 = new Shape({
  rendering: false,
  addTo: island,
  translate: { x: 17, z: -24 },
});

makeBuilding({
  width: 8,
  height: 8,
  depth: 10,
  gable: 'ns',
  addTo: buildAnchor0,
  nsWindows: [
    { x: 0 },
  ],
  ewWindows: [
    { x: -2 },
    { x: 2 },
  ],
});

// -----  ----- //

// lil house to the west
var buildAnchor1 = new Shape({
  rendering: false,
  addTo: island,
  translate: { x: 47, z: -16 },
});

makeBuilding({
  width: 8,
  height: 8,
  depth: 10,
  gable: 'ns',
  addTo: buildAnchor1,
  nsWindows: [
    { x: 0 },
  ],
  ewWindows: [
    { x: -2 },
    { x: 2 },
  ],
});

// -----  ----- //

// 2 story gable, east end
var buildAnchor2 = new Shape({
  rendering: false,
  addTo: island,
  translate: { x: 55, z: -4 },
});

makeBuilding({
  width: 8,
  height: 14,
  depth: 10,
  gable: 'ns',
  addTo: buildAnchor2,
  nsWindows: [
    { x: 0, y: -5 },
    { x: 0, y: -11 },
  ],
  ewWindows: [
    { x: -2, y: -5 },
    { x: 2, y: -5 },
    { x: -2, y: -11 },
    { x: 2, y: -11 },
  ],
});

// 1 story slantS, west
var buildAnchor3 = new Shape({
  rendering: false,
  addTo: island,
  translate: { x: 0, z: -26 },
});

makeBuilding({
  width: 14,
  height: 8,
  depth: 6,
  gable: 'slantS',
  addTo: buildAnchor3,
  nsWindows: [
    { x: -4 },
    { x: 0 },
    { x: 4 },
  ],
  ewWindows: [
    { x: 0 }
  ],
});

// 2.5 story slantS, east
var buildAnchor4 = new Shape({
  rendering: false,
  addTo: island,
  translate: { x: 42, z: -6 },
});

makeBuilding({
  width: 14,
  height: 20,
  depth: 6,
  gable: 'slantS',
  addTo: buildAnchor4,
  nsWindows: [
    { x: -4, y: -17 },
    { x:  0, y: -17 },
    { x:  4, y: -17 },
  ],
  ewWindows: [
    { x: 0, y: -17 }
  ],
});

// ----- cathedral ----- //

var cathBaseAnchor = new Shape({
  rendering: false,
  addTo: island,
  translate: { x: 28, z: -12 },
});

// cathedral base
makeBuilding({
  width: 10,
  height: 12,
  depth: 18,
  gable: 'cap',
  addTo: cathBaseAnchor,
  nsWindows: [
    { x: -2, y: -3 },
    { x:  2, y: -3 },
    { x: -2, y: -9 },
    { x:  2, y: -9 },
  ],
  ewWindows: [
    { style: 'circle', x: -6, y: -9 },
    { style: 'circle', x: -2, y: -9 },
    { style: 'circle', x: 2, y: -9 },
    { style: 'circle', x: 6, y: -9 },
    { height: 6, x: -6, y: -5 },
    { height: 6, x: -2, y: -5 },
    { height: 6, x: 2, y: -5 },
    { height: 6, x: 6, y: -5 },
  ],
});

// cathedral 2nd story
var cath2ndAnchor = new Shape({
  rendering: false,
  addTo: cathBaseAnchor,
  translate: { y: -14 },
});

makeBuilding({
  width: 8,
  height: 8,
  depth: 8,
  gable: 'cap',
  addTo: cath2ndAnchor,
  nsWindows: [
    { x: 0, y: -5 },
  ],
  ewWindows: [
    { x: 0, y: -5 },
  ],
});

// cathedral 3rd story

var cath3rdAnchor = new Shape({
  rendering: false,
  addTo: cathBaseAnchor,
  translate: { y: -24 },
});

makeBuilding({
  width: 6,
  height: 6,
  depth: 6,
  addTo: cath3rdAnchor,
  gable: 'flat',
  nsWindows: [
    { x: 0, y: -3 },
  ],
  ewWindows: [
    { x: 0, y: -3 },
  ],
});

// cathedral dome

makeDome({
  size: 6,
  addTo: cathBaseAnchor,
  translate: { y: -30 },
});

// -----  ----- //

// 2 story gable, east, behind cathdral on hill
var anchor6 = new Shape({
  rendering: false,
  addTo: island,
  translate: { x: 27, z: 6, y: -14 },
});

makeBuilding({
  width: 8,
  height: 16,
  depth: 10,
  gable: 'ns',
  addTo: anchor6,
  nsWindows: [
    { style: 'circle', x: 0, y: -13 },
  ],
  ewWindows: [
    { style: 'circle', x: -2, y: -7 },
    { style: 'circle', x:  2, y: -7 },
    { x: -2, y: -13 },
    { x: 2, y: -13 },
  ],
});

// ----- west side ----- //

// 2 story gable, center west
var anchor7 = new Shape({
  rendering: false,
  addTo: island,
  translate: { x: 14, z: -13 },
});

makeBuilding({
  width: 10,
  height: 16,
  depth: 8,
  gable: 'ew',
  addTo: anchor7,
  ewWindows: [
    { x: 0, y: -13, style: 'circle', },
    { x: 0, y: -7, height: 6 },
  ],
  nsWindows: [
    { x: -2, y: -7, height: 6 },
    { x: 2, y: -7, height: 6 },
    { x: -2, y: -13 },
    { x: 2, y: -13 },
  ],
});

// 2 story gable, west end
var anchor8 = new Shape({
  rendering: false,
  addTo: island,
  translate: { x: -14, z: -25 },
});

makeBuilding({
  width: 10,
  height: 14,
  depth: 8,
  gable: 'ew',
  addTo: anchor8,
  ewWindows: [
    { x: 0, y: -11, height: 4 },
  ],
  nsWindows: [
    { x: -2, y: -11, height: 4 },
    { x:  2, y: -11, height: 4 },
  ],
});

// shack, west end
var anchor9 = new Shape({
  rendering: false,
  addTo: island,
  translate: { x: -13, z: -34 },
});

makeBuilding({
  width: 8,
  height: 8,
  depth: 6,
  gable: 'ns',
  addTo: anchor9,
  nsWindows: [
    { x: 0, y: -5 },
  ],
  ewWindows: [
    { style: 'circle' },
  ],
});

// 2 story, west center, 1st hill
var anchor10 = new Shape({
  rendering: false,
  addTo: island,
  translate: { x: 3, z: -10, y: -8 },
});

makeBuilding({
  width: 8,
  height: 16,
  depth: 10,
  gable: 'ns',
  addTo: anchor10,
  nsWindows: [
    { x: 0, y: -13 },
  ],
  ewWindows: [
    { x: -2, y: -13 },
    { x:  2, y: -13 },
    { x: -2, y: -5 },
    { x:  2, y: -5 },
  ],
});

// west mansion
var mansionAnchor = new Shape({
  rendering: false,
  addTo: island,
  translate: { x: -14, z: -14, y: -8 },
});

makeBuilding({
  width: 14,
  height: 18,
  depth: 10,
  gable: 'cap',
  addTo: mansionAnchor,
  nsWindows: [
    { x: -4, y: -15, style: 'circle' },
    { x:  0, y: -15, style: 'circle' },
    { x:  4, y: -15, style: 'circle' },
    { x: -4, y: -11, height: 10 },
    { x:  0, y: -11, height: 10 },
    { x:  4, y: -11, height: 10 },
  ],
  ewWindows: [
    { x: -2, y: -15 },
    { x:  2, y: -15 },
    { x: -2, y: -9, height: 8 },
    { x:  2, y: -9, height: 8 },
  ],
});


// ----- central tower ----- //

var centralTowerAnchor = new Shape({
  rendering: false,
  addTo: island,
  translate: { y: -16 },
});

makeBuilding({
  width: 6,
  depth: 6,
  height: 16,
  addTo: centralTowerAnchor,
  gable: 'cap',
  nsWindows: [
    { x: 0, y: -7, style: 'circle' }
  ],
  ewWindows: [
    { x: 0, y: -13, style: 'circle' }
  ],
});

// central tower 2nd story
var centralTower2ndAnchor = new Shape({
  rendering: false,
  addTo: centralTowerAnchor,
  translate: { y: -18 },
});

makeBuilding({
  width: 6,
  depth: 6,
  height: 8,
  addTo: centralTower2ndAnchor,
  gable: 'flat',
  nsWindows: [
    { x: 0, y: -5 }
  ],
  ewWindows: [
    { x: 0, y: -5 }
  ],
});

makeDome({
  size: 4,
  addTo: centralTower2ndAnchor,
  translate: { y: -8 },
});

// -----  ----- //

var shapes = camera.getShapes();

// -- animate --- //

function animate() {
  update();
  render();
  requestAnimationFrame( animate );
}

animate();

// -- update -- //

function update() {
  camera.rotate.y += isRotating ? +TAU/150 : 0;

  // rotate
  camera.update();
  shapes.forEach( function( shape ) {
    shape.updateSortValue();
  });
  // perspective sort
  shapes.sort( function( a, b ) {
    return b.sortValue - a.sortValue;
  });
}

// -- render -- //

function render() {
  ctx.clearRect( 0, 0, canvasWidth, canvasHeight );
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  ctx.save();
  ctx.scale( zoom, zoom );
  ctx.translate( w/2, h/2 );

  shapes.forEach( function( shape ) {
    shape.render( ctx );
  });

  ctx.restore();
}

// ----- inputs ----- //

// click drag to rotate
var dragStartAngleX, dragStartAngleY;

new Dragger({
  startElement: canvas,
  onPointerDown: function() {
    isRotating = false;
    dragStartAngleX = camera.rotate.x;
    dragStartAngleY = camera.rotate.y;
  },
  onPointerMove: function( pointer, moveX, moveY ) {
    var angleXMove = moveY / canvasWidth * TAU;
    var angleYMove = moveX / canvasWidth * TAU;
    camera.rotate.x = dragStartAngleX + angleXMove;
    camera.rotate.y = dragStartAngleY + angleYMove;
  },
});


document.querySelector('.reset-button').onclick = function() {
  camera.rotate.set({ x: 0, y: -TAU/8 });
};
