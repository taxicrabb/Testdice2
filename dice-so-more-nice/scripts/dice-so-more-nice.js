
Hooks.on('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({ id: "LCD - Forbidden Knowledge", name: "🐸 Forbidden Knowledge" }, "default");
   
  dice3d.addTexture("skincraft", {
    name: "🐸 Vile Vellum",
    composite: "darken",
    source: "modules/lordudice/graphics/dice/skin.webp",
	bump: "modules/lordudice/graphics/dice/skin-bump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Dark Words Colours',
        description: "🐸 Dark Words",
        category: "LCD - Forbidden Knowledge",
        background: "#3b3c50",
		foreground: '#949494',
		outline: '#260000',
        edge: '#1a1b24',
		texture: 'skincraft',
		material: 'metal',
		fontScale: {
          "d100":1.1,
		  "d20": 1.1,
          "d12":1.2,
		  "d10": 1.1,
		  "d8": 1.2,
          "d6":1.5,
		  "d4":1.3,
          "d2":1.3
        },
        font:"Jim Nightshade"
      },"default");
    });
