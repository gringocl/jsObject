function Wrench( measurment, end1, end2, length, material ) {

  this.measurment = measurment;
  this.end1 = end1;
  this.end2 = end2;
  this.length = length;
  this.material = material;
}
Wrench.prototype.toString = function () {
  return this.material + " " + this.measurment + " wrench, has a " + this.end1 + " and a " + this.end2 + " end and is " + this.length + " long."
}

var oe6ptsae = new Wrench ("SAE", "6PT", "Open", "Xtra", "Black Anodized");
console.log(oe6ptsae.toString() );
