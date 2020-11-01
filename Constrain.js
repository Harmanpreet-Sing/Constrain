class Constrain{
constructor(bodyX,bodyY){
var options = {
bodyA:bodyX,
bodyB:bodyY,
stiffness : 0.9,
length : 1.2
}

this.XYZ = Matter.Constraint.create(options);

World.add(world,this.XYZ);
  }

}