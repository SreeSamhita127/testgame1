class between{
    constructor(){
        this.level1 = createButton("level1");
        this.level2 = createButton("level2");
        this.level3 = createButton("level3");
        this.level4 = createButton("level4");
        this.level5 = createButton("level5");
    }
    display(){
        this.level1.position(800,90);
        this.level2.position(800,120);
        this.level3.position(800,150);
        this.level4.position(800,180);
        this.level5.position(800,210);

        this.level1.mousePressed(()=>{
            gameState = 1
            this.level1.hide();
            console.log("hi")
        })
    }
    hideAll(){
        this.level2.hide();
        this.level3.hide();
        this.level4.hide();
        this.level5.hide();
    }
}