class Pendulum{
    constructor(x,y,radius,color){
        var options={
          'restitution' :1,
          'friction' :0,
          'frictionAir':0,
          'density':15,
          slop : 1,
          inertia : Infinity
        }
        this.body=Bodies.circle(x,y,radius,options);    
        this.radius=radius;  
        this.color=color; 
        this.x=x;
        this.y=y;
        World.add(world,this.body);

}
      display(){
        var pos=this.body.position;
        
        //ellipseMode(CENTER);
        fill(this.color);
        ellipse(pos.x,pos.y,this.radius*2);   
        
    }
}