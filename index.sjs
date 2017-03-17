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
    mySprite.wait(random(200, 800));
  });
}
