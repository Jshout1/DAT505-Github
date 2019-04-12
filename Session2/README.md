# Homework
# Usage
```javascript
var texture = new THREE.TextureLoader().load ('texture/crate.gif');
var material1 = new THREE.MeshNormalMaterial( { map: texture } );

var texture = new THREE.TextureLoader().load ( 'texture/lensflare0.png');
var material2 = new THREE.MeshNormalMaterial( { map: texture} );

var texture = new THREE.TextureLoader().load ( 'texture/chuang.jpg');
var material3 = new THREE.MeshNormalMaterial( { map: texture} );
```
Define a texture as a material

```javascript
geometry1 = new THREE.CubeGeometry(30, 30, 100);
mesh1 = new THREE.Mesh( geometry1, material1 );
mesh1.position.z = -5000;

// Add mesh to scene
scene.add( mesh1 );
```
add a mesh to the scene and put the texture material on the mesh
