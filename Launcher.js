class Launcher{
    constructor(body,point){
     var  options={
         bodyA:body,
         pointB:point,
         stiffness:0.004,
         length:1
            
        }
        this.bodyA=body
        this.pointB=point
        this.launcher = Matter.Constraint.create(options)
        World.add(world,this.launcher)
    }
    display(){
    var posA = this.bodyA.position;
    var posB = this.pointB
    strokeWeight(3)   
    line(posA.x,posA.y,posB.x,posB.y)
    }
     fly() {

        this.launcher.bodyA=null


     }
}