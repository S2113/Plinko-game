class particle
{


constructor ()
{

  
   this.x=random (50,width-50);
   this.y=random (0,50);
   this.body=Bodies.circle(this.x,this.y,10);
   this.colour=color (random(0,225),random (0,225),random (0,225));
   World.add (world,this.body);

}


display ()
{

push ();
fill (this.colour);
ellipseMode (CENTER);
ellipse (this.body.position.x,this.body.position.y,20,20);
pop ();





}



}