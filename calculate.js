class Calculate {
  constructor(b, c){
    this.b = b;
    this.c = c;
  }

  add(){
    return this.b + this.c;
  }
  subtract(){
    return this.b - this.c;
  }
  multiply(){
    return this.b * this.c;
  }
  divide(){
    return this.b / this.c;
  }
}

module.exports = Calculate;