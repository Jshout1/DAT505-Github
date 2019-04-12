//Global variables
var scene, camera, renderer;
var geometry1, material1, mesh1;
var geometry2, material2, mesh2;
var geometry3, material3, mesh3;
var geometry4, material4, mesh4;
var geometry5, material5, mesh5;
var geometry6, material6, mesh6;
var geometry7, material7, mesh7;
var geometry8, material8, mesh8;
var geometry9, material9, mesh9;
var geometry10, material10, mesh10;
var geometry11, material11, mesh11;
var geometry12, material12, mesh12;



function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}






var texture = new THREE.TextureLoader().load ('texture/crate.gif');
var material1 = new THREE.MeshNormalMaterial( { map: texture } );

var texture = new THREE.TextureLoader().load ( 'texture/lensflare0.png');
var material2 = new THREE.MeshNormalMaterial( { map: texture} );

var texture = new THREE.TextureLoader().load ( 'texture/chuang.jpg');
var material3 = new THREE.MeshNormalMaterial( { map: texture} );



function geometry(){



  // Create a Cube Mesh with basic material ---------
  geometry1 = new THREE.CubeGeometry(30, 30, 100);
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.z = -5000;

  // Add mesh to scene
  scene.add( mesh1 );
  // Create a Cube Mesh with basic material ---------
  geometry2 = new THREE.CubeGeometry(30, 30, 100);
  mesh2 = new THREE.Mesh( geometry2, material1 );
  mesh2.position.z = -5000;

  // Add mesh to scene
  scene.add( mesh2 );
  // Create a Cube Mesh with basic material ---------
  geometry3 = new THREE.TorusBufferGeometry(200, 7, 320, 2000);
  mesh3 = new THREE.Mesh( geometry3, material1 );
  mesh3.position.z = -5000;

  // Add mesh to scene
  scene.add( mesh3 );

  // Create a Cube Mesh with basic material ---------
  geometry4 = new THREE.TorusBufferGeometry(200, 7, 320, 2000);
  mesh4 = new THREE.Mesh( geometry4, material1 );
  mesh4.position.z = -5000;

  // Add mesh to scene
  scene.add( mesh4 );

  // Create a Cube Mesh with basic material ---------
  geometry5 = new THREE.CubeGeometry(30, 30, 100);
  mesh5 = new THREE.Mesh( geometry5, material2 );
  mesh5.position.z = -5000;
  mesh5.position.x = -500;
  // Add mesh to scene
  scene.add( mesh5 );
  // Create a Cube Mesh with basic material ---------
  geometry6 = new THREE.CubeGeometry(30, 30, 100);
  mesh6 = new THREE.Mesh( geometry6, material2 );
  mesh6.position.z = -5000;
  mesh6.position.x = -500;
  // Add mesh to scene
  scene.add( mesh6 );
  // Create a Cube Mesh with basic material ---------
  geometry7 = new THREE.TorusBufferGeometry(200, 7, 320, 2000);
  mesh7 = new THREE.Mesh( geometry7, material2 );
  mesh7.position.z = -5000;
  mesh7.position.x = -500;
  // Add mesh to scene
  scene.add( mesh7 );

  // Create a Cube Mesh with basic material ---------
  geometry8 = new THREE.TorusBufferGeometry(200, 7, 320, 2000);
  mesh8 = new THREE.Mesh( geometry8, material2 );
  mesh8.position.z = -5000;
  mesh8.position.x = -500;
  // Add mesh to scene
  scene.add( mesh8 );

  // Create a Cube Mesh with basic material ---------
  geometry9 = new THREE.CubeGeometry(30, 30, 100);
  material9 = new THREE.MeshBasicMaterial( { color: "#FFCC66" } );
  mesh9 = new THREE.Mesh( geometry9, material3 );
  mesh9.position.z = -5000;
  mesh9.position.x = 500;
  // Add mesh to scene
  scene.add( mesh9 );
  // Create a Cube Mesh with basic material ---------
  geometry10 = new THREE.CubeGeometry(30, 30, 100);
  material10 = new THREE.MeshBasicMaterial( { color: "#FFCC66" } );
  mesh10 = new THREE.Mesh( geometry10, material3 );
  mesh10.position.z = -5000;
  mesh10.position.x = 500;
  // Add mesh to scene
  scene.add( mesh10 );
  // Create a Cube Mesh with basic material ---------
  geometry11 = new THREE.TorusBufferGeometry(200, 7, 320, 2000);
  material11 = new THREE.MeshBasicMaterial( { color: "#FFCC66" } );
  mesh11 = new THREE.Mesh( geometry11, material3 );
  mesh11.position.z = -5000;
  mesh11.position.x = 500;
  // Add mesh to scene
  scene.add( mesh11 );

  // Create a Cube Mesh with basic material ---------
  geometry12 = new THREE.TorusBufferGeometry(200, 7, 320, 2000);
  material12 = new THREE.MeshBasicMaterial( { color: "#FFCC66" } );
  mesh12 = new THREE.Mesh( geometry12, material3 );
  mesh12.position.z = -5000;
  mesh12.position.x = 500;
  // Add mesh to scene
  scene.add( mesh12 );


}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.03; //Continuously rotate the mesh
  mesh1.rotation.x += 0.03;
  mesh2.rotation.y += 0.03; //Continuously rotate the mesh
  mesh2.rotation.y += 0.03;
  mesh3.rotation.x += 0.03; //Continuously rotate the mesh
  mesh3.rotation.y += 0.03;
  mesh4.rotation.x += 0.03; //Continuously rotate the mesh
  mesh4.rotation.z += 0.03;
  mesh5.rotation.x += 0.03; //Continuously rotate the mesh
  mesh5.rotation.x += 0.03;
  mesh6.rotation.y += 0.03; //Continuously rotate the mesh
  mesh6.rotation.y += 0.03;
  mesh7.rotation.x += 0.03; //Continuously rotate the mesh
  mesh7.rotation.y += 0.03;
  mesh8.rotation.x += 0.03; //Continuously rotate the mesh
  mesh8.rotation.z += 0.03;
  mesh9.rotation.x += 0.03; //Continuously rotate the mesh
  mesh9.rotation.x += 0.03;
  mesh10.rotation.y += 0.03; //Continuously rotate the mesh
  mesh10.rotation.y += 0.03;
  mesh11.rotation.x += 0.03; //Continuously rotate the mesh
  mesh11.rotation.y += 0.03;
  mesh12.rotation.x += 0.03; //Continuously rotate the mesh
  mesh12.rotation.z += 0.03;
  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
