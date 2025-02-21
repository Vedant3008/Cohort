class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    
    area() {
        const area = this.width * this.height;
          return area;
    }
    
    paint() {
             console.log('Painting with color'+" " +this.color);
    }
    
 }
 
const rect = new Rectangle(2, 4,"Red")
const area = rect.area();
const color = rect.paint();
console.log(area);

//Date

const trump = new Date();
console.log(trump.getFullYear());

//Map
const map = new Map();
map.set('name','Vedant');
map.set('age','21');

const firstName = map.get('name');
console.log(firstName)