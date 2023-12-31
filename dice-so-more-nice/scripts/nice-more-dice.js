
Hooks.on('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({ id: "Mapleleaf", name: "⧋ Maple Leaf" }, "default");
   
  dice3d.addTexture("Mapleleaf", {
    name: "⧋ Maple Leaf",
    composite: "darken",
    source: "modules/nice-more-dice/textures/Mapleleaf.webp",
	bump: "modules/nice-more-dice/textures/Mapleleaf.webp"
    });

Hooks.on('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({id:"TD",name:"⧋ Test d4 (d4, special)"}, "default");

   dice3d.addDicePreset({
     type: "d4",
	      labels: [
       "modules/nice-more-dice/faces/testd/d4-1.webp",
       "modules/nice-more-dice/faces/testd/d4-2.webp",
       "modules/nice-more-dice/faces/testd/d4-3.webp",
       "modules/nice-more-dice/faces/testd/d4-4.webp"
     ],
     system: "TD"
	 
   },"d4");

});
