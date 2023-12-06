

const gravity = 0.2;




class Cat{
    constructor(x,y,s){
        this.x = x
        this.y = y
        this.s = s
        this.status = "idle"; //default status i,e walking
        this.graphic = catIdle; //default graphic matching status
        this.jumpMode = false
        this.jumpPower = 0
        this.speed = 5
        
        
    }

    //display function
    display(){
        
        image(this.graphic,this.x,this.y,this.s,this.s)
        //rect(this.x,this.y + 45,100,10)
    }

    //move
    move(){
        this.graphic = catIdle
        this.sensorLeft = this.x - 2
        this.sensorRight = this.x + TILESIZE + 2
        this.sensorTop = this.y-2;
        this.sensorBottom = this.y+TILESIZE+2;
        this.middleX = this.x+TILESIZE/2;
        this.middleY = this.y+TILESIZE/2;
        
    
        //console.log(this.x,this.y)

        if(keyIsDown(UP_ARROW)){
            let id = getTile(this.middleX + 15, this.sensorTop + 15,level1)
            let id2 = getTile(this.middleX + 15,this.sensorTop + 15,level2)
            fill("pink")
            ellipse(this.middleX+15,this.sensorTop + 15,5,5)
            if(isEdge(id) === false && isMarket(id2) === false 
            && isAnimalShop(id2) === false && isFarm(id2) === false
            && isStudyRoom(id2) === false && isStudyRoomDoor(id2) === false ){
                this.graphic = catRun
                this.y -= this.speed
            }

            
        }

        if(keyIsDown(DOWN_ARROW)){
            let id = getTile(this.middleX + 15, this.sensorBottom + 35,level1)
            let id2 = getTile(this.middleX + 15, this.sensorBottom + 10,level2)
            fill("pink")
            ellipse(this.middleX + 15,this.sensorBottom + 35,5,5)
            console.log("key is down",id)
            if(isEdge(id) === false && isMarket(id2) === false 
            && isAnimalShop(id2) === false && isFarm(id2) === false
            && isStudyRoom(id2) === false){
                this.graphic = catRun
                this.y += this.speed
            }
        
        }

        if(keyIsDown(LEFT_ARROW)){
            let id = getTile(this.sensorLeft, this.middleY + 20,level1)
            let id2 = getTile(this.sensorLeft, this.middleY + 20, level2)
            fill("pink")
            ellipse(this.sensorLeft,this.middleY + 20,5,5)
            if(isEdge(id) === false && isMarket(id2) === false 
            && isAnimalShop(id2) === false && isFarm(id2) === false
            && isStudyRoom(id2) === false ){
                this.graphic = catRun
                this.x -= this.speed
            }
              
            
        }

        if(keyIsDown(RIGHT_ARROW)){
            let id = getTile(this.sensorRight+30, this.middleY+20,level1)
            let id2 = getTile(this.sensorRight+30,this.middleY + 20, level2 )
            fill("pink")
            ellipse(this.sensorRight+30,this.middleY+20,5,5)
            if(isEdge(id) === false && isMarket(id2) === false 
            && isAnimalShop(id2) === false && isFarm(id2) === false
            && isStudyRoom(id2) === false){
                this.graphic = catRun
                this.x += this.speed
            }
        }

    
    }

    move2(){
        this.graphic = catIdle
        this.sensorLeft = this.x - 2
        this.sensorRight = this.x + TILESIZE + 2
        this.sensorTop = this.y-2;
        this.sensorBottom = this.y+TILESIZE+2;
        this.middleX = this.x+TILESIZE/2;
        this.middleY = this.y+TILESIZE/2;

        if(keyIsDown(UP_ARROW)){
            fill("pink")
            ellipse(this.middleX+15,this.sensorTop + 15,5,5)
                this.graphic = catRun
                this.y -= this.speed
            

            
        }

        if(keyIsDown(DOWN_ARROW)){
            fill("pink")
            ellipse(this.middleX + 15,this.sensorBottom + 35,5,5)
                this.graphic = catRun
                this.y += this.speed
            
        
        }

        if(keyIsDown(LEFT_ARROW)){
            fill("pink")
            ellipse(this.sensorLeft,this.middleY + 20,5,5)
            
            this.graphic = catRun
            this.x -= this.speed
        }
              
        
        if(keyIsDown(RIGHT_ARROW)){

            fill("pink")
            ellipse(this.sensorRight+30,this.middleY+20,5,5)
           
            this.graphic = catRun
            this.x += this.speed
            
        }

    }



    // jump(){

    //     if( key === "j" && this.jumpMode === false){
    //         this.jumpMode = true
    //         this.jumpPower = -15
    //     }


    //     if (this.jumpMode){
    //         this.y += this.jumpPower
    //         this.jumpPower += gravity

    //         if(this.y + this.s >= 400){
    //             this.jumpMode = false
    //             this.jumpPower = 0
    //             this.y = 400 - this.s
    //         }
    //     }

    // }
   
   


}

