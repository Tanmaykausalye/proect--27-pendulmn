class Chain{
    constructor(bodyA,bodyB, offsetX, offsetY){

   this.offsetX = offsetX
   this.offsetY = offsetY

var options={

bodyA : bodyA,
bodyB : bodyB,
stiffness : 0.05,
length : 500,
pointAB : {x:this.offsetX, y:this.offsetY}

}

this.chain = Constraint.create(options);

World.add(world, this.chain)

    }
 
    display(){


  var point1 = this.chain.bodyA.position
  var point2 = this.chain.bodyB.position

  line(point1.x,point1.y,point2.x,point2.y)

    }

}