// Created with Motiva Layama v2.1 2101 LITE https://www.motivacg.com/layama
// Rendered with Layama for Unreal

function getLayamaCameras()
{
   var layamaCameras = [];
   layamaCameras.push({n: "Layama0002", a: "CineCameraActor", p: {x:390, y:160, z:580}, l: {x:391, y:160, z:580},f: [75.4128,0.0380411,0.354041,0.934456],c: [1,1,1,1]});
   layamaCameras.push({n: "Layama0009", a: "CineCameraActor2", p: {x:580, y:160, z:700}, l: {x:580, y:160, z:699}, f: [113.212,0.000911087,0.999291,-0.0376413], c: [1,1,1,1]});
   layamaCameras.push({n: "Layama0016", a: "CineCameraActor3", p: {x:600, y:160, z:430}, l: {x:601, y:160, z:430}, f: [158.195,0.0422537,0.999106,0.00109198], c: [1,1,1,1]});
   layamaCameras.push({n: "Layama0023", a: "CineCameraActor4", p: {x:940, y:160, z:600}, l: {x:939, y:160, z:600}, f: [70.6503,0.454022,0.826503,-0.332801], c: [1,1,1,1]});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = [];
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

