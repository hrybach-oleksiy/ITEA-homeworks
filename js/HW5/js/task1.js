// 1. Створити об'єкт Point, що містить дві властивості: "x" та "y" - координати точки, і метод GetQuadrant, що обчислює, в якому квадранті в декартовій системі координат знаходиться дана точка. Протестуйте цей об'єкт, змінюючи значення його координат, та повторно викликаючи метод GetQuadrant.;

const point = {
    x: 0,
    y: 0,

    getQuadrant() {
        if (this.x > 0 && this.y > 0) {
            console.log('Point is in quadrant I');
        };

        if (this.x < 0 && this.y > 0) {
            console.log('Point is in quadrant II');
        };

        if (this.x < 0 && this.y < 0) {
            console.log('Point is in quadrant III');
        };

        if (this.x > 0 && this.y < 0) {
            console.log('Point is in quadrant IV');
        };

        if (this.x === 0 && this.y === 0) {
            console.log('Point is in the beginning of the coordinates');
        };
    }
};

point.getQuadrant();