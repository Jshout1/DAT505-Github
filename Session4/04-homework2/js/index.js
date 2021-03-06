var renderer, scene, camera;
var controls
var cubes = [];
var rot = 0;

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
  H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  var ambLight = new THREE.AmbientLight(0xFFFFFF);
  ambLight.position.set(0, 1000, 0);
  ambLight.add(spotLight);
  scene.add(ambLight);
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -35; x < 40; x += 5) { // Start from -35 and sequentially add one every 5 pixels
    for (var y = -35; y < 40; y += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF/*position:Math.random(),rot:Math.random()*/});
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;

      mesh.position.x = x;
      mesh.position.z = y;
      mesh.scale.y=0.5;
      mesh.rotation.x=Math.random()*2*Math.PI;;
      mesh.rotation.y=Math.random()*2*Math.PI;;
      mesh.rotation.z=Math.random()*2*Math.PI;;


      scene.add(mesh);
      cubes.push(mesh);
    }
  }

  console.log(cubes);
  document.body.appendChild(renderer.domElement);
}
function drawFrame(){
  requestAnimationFrame(drawFrame);
  rot+=0.01;
  cubes.forEach(function(c,i){
    c.rotation.z=rot;

});


  //forEach takes all the array entries and passes the c as the object, and i as the index
  //cubes.forEach(function(c, i) {
    //c.rotation.x = rot; //Rotate the object that is referenced in c
  //});

  renderer.render(scene, camera);
}

init();
drawFrame();
