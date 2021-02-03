window.onload = function() {



    const createAligned = (scene, count, texture, scrollFactor) => {
        let x = 0;
        for (let i = 0; i < count; ++i) {
            const m = scene.add.image(x, scene.scale.height, texture).
            setOrigin(0, 1).
            setScrollFactor(scrollFactor);
            x += m.width;
        }
    }

    /* ------------------------------------------------------------------------------------*/



    console.log("Successful task");
    var config = {
        type: Phaser.AUTO,
        scale: {
            mode: Phaser.Scale.FIT,
            width: 1200,
            height: 1000,
        },
        backgroundColor: 0xff00cc,
        parent: 'mynetwork',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {
                    y: 1000,
                },
                debug: false,
            }
        },

        scene: {
            preload: preload,
            create: create,
            update: update,
        }

    };

    let game = new Phaser.Game(config);
    console.log(game);






    function preload() {
        console.log("In Preload");
        this.load.image("sky", "Assets/sky.png");
        this.load.image("mountain", "Assets/mountains.png");
        this.load.image("plateau", "Assets/plateau.png");
        this.load.image("ground", "Assets/ground.png");
        this.load.image("plants", "Assets/plant.png");
        this.load.image("bird", "Assets/bird.png");
        this.load.image("bird2", "Assets/bird2.png");
        this.load.image("bird3", "Assets/bird3.png");
        this.load.image("bird4", "Assets/bird4.png");
        this.load.image("bird5", "Assets/bird5.png");
        this.load.image("dot", "Assets/line.png");
        this.load.image("you", "Assets/you.png");
        this.load.image("light", "Assets/light.png");
        this.load.image("one", "Assets/one.png");
        this.load.image("two", "Assets/two.png");
        this.load.image("three", "Assets/three.png");
        this.load.image("four", "Assets/four.png");
        this.load.image("five", "Assets/five.png");
        this.load.image("ship", "Assets/manme.png");
        this.load.image("chidi", "Assets/chidi.png");
        this.load.image("chidi2", "Assets/chidi2.png");

    }

    //  var speed = 4;
    // the closer it to the player,  move every thing in the backgrond in the differnet speed,
    function create() {

        const width = this.scale.width;
        const height = this.scale.height;
        console.log(width, height);
        sky = this.add.image(width * 0.5, height * 0.5, 'sky').setScrollFactor(0);
        createAligned(this, 100, 'mountain', 0.25)





        bird = this.add.image(810, 130, 'bird').setScrollFactor(0);

        light = this.add.image(100, 700, 'light').setScrollFactor(0.2);


        createAligned(this, 100, 'plateau', 0.5)
        createAligned(this, 100, 'ground', 1)
        createAligned(this, 100, 'plants', 1.25)
        this.cameras.main.setBounds(0, 0, width * 100, height);

        one = this.add.text(420, 95, "Type GO", {
            font: "100px Luminari, fantasy",
            fill: "#DA70D6",
            align: "center"
        }).setScrollFactor(0);

        two = this.add.text(360, 200, "Typing Multi-player", {
            font: "50px Luminari, fantasy",
            fill: "#DA70D6",
            align: "center"
        }).setScrollFactor(0);

        three = this.add.text(280, 200, "The", {
            font: "50px Luminari, fantasy",
            fill: "#000000",
            align: "center"
        }).setScrollFactor(0);

        four = this.add.text(764, 200, "Game", {
            font: "50px Luminari, fantasy",
            fill: "#000000",
            align: "center"
        }).setScrollFactor(0);

        five = this.add.text(400, 400, "Time", {
            font: "50px Luminari, fantasy",
            fill: "#000000",
            align: "center"
        }).setScrollFactor(0);
        six = this.add.text(510, 400, "to kill the", {
            font: "50px Luminari, fantasy",
            fill: "#DA70D6",
            align: "center"
        }).setScrollFactor(0);

        seven = this.add.text(710, 400, "keypad", {
            font: "50px Luminari, fantasy",
            fill: "#000000",
            align: "center"
        }).setScrollFactor(0);
        chidi = this.add.image(596, 484, 'chidi2').setScrollFactor(0);

    }

    let speed = 0;

    function update() {
        const cam = this.cameras.main;
        if (speed >= 30) speed = 30;
        cam.scrollX += speed;
        speed += 0.02;

    }


}