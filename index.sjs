whenPageLoads {
  center = new Sprite(0, 0);
  mySprite = new Sprite(0, 0, "toilet-paper.png");
  mySprite.hide();
  mySprite.setYTo(-150);
  forever({
    force = random(8, 25);
    mySprite.setXTo(random(-230, 230));
    mySprite.pointInDirection(center);
    mySprite.turn(random(-20, 20));
    clone = mySprite.clone();
    clone.show();
    xspeed = Math.sin(mySprite.direction) * force;
    yspeed = Math.cos(mySprite.direction) * force;
    while (clone.x > -240 || clone.x < 240 || clone.y > -180) {
      wait(1).then({
        yspeed--;
        clone.changeXBy(xspeed);
        clone.changeYBy(yspeed);
        clone.pointInDirection(Math.atan(xspeed / yspeed));
        if(yspeed < 0) {
          clone.turn(-180);
        }
      })
    }
    clone.delete();
  }, random(200, 800));
}
