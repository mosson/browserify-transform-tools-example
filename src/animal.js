'use strict';

class Animal {
  constructor(attrs) {
    for( let key in attrs ) {
      this[key] = attrs[key]
    };
  }

  say () {
    console.log(this.name);
  }
}

export default Animal;
