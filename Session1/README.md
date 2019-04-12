# Homework
# Usage

```javascript
function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry1 = new THREE.CubeGeometry(30, 30, 100);
  material1 = new THREE.MeshBasicMaterial( { color: "#00FA9A" } );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.z = -1000;
```
Create a basic mesh with basic material
```javascript
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
  renderer.setClearColor("#000000");
  ```
  set the rotation speed and angle to the mesh
