class Asteroid{
    constructor(){
        
        var spawn=random([1,2,3,3,3,3,3])

        switch(spawn){
        case 1:
             this.body=createSprite(random(-25,0),random(0,250))
             this.body.velocityX=random(6,8)
             this.body.velocityY=random(10,12)
             break;
        case 2:
             this.body=createSprite(random(width,width+25),random(0,250))
             this.body.velocityX=random(-8,-6)
             this.body.velocityY=random(10,12)
             break;
        case 3:
            this.body=createSprite(random(20,width-20),random(-30,0))
            this.body.velocityY=random(10,14)
            this.body.velocityX=0
        }

        this.image=loadImage("asteroid (1).png")
        this.body.addImage(this.image) 
    }
}