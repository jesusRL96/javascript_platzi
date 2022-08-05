// boolean
let muted: boolean = true;
muted = false;
// Number
let numerador: number = 254;
let denominator: number = 200;
let resultado = numerador / denominator;

// String
let nombre: string = 'Jesus';

// arrays
let people: string[] = [];
people = ["Isabel", "Nicole", "Pepe"]
// people.push(1);

let strAndNbum: Array<string | number> = [];
strAndNbum.push('Juan');
strAndNbum.push(1);

// Enum
enum Color {
    Rojo='Rojo', Verde='Verde', Azul='Azul'
}
let colorFavorito: Color = Color.Verde;
console.log(`Color favorito ${colorFavorito}`);

// Functions
function add(a: number, b: number): number  {
    return a + b;
}
const sum = add(10,15)

function createAdder(a: number): (number) => number {
    return function (b: number): number {
        return a + b
    }
}

const addFour = createAdder(4);
const sumAdder = addFour(6);

function fullName(firstName: string, lastName?: string, age: number = 0): string {
    return `${firstName} ${lastName} (${age})`;
}

const yo = fullName('jesus', 'rl', 20);
const def = fullName('pepe');
console.log(yo);

interface Rectangulo {
    ancho: number
    alto: number
    color?: Color
}

let rectangulo: Rectangulo = {
    ancho: 20,
    alto: 20,
    // color: Color.Rojo
};

function area(r: Rectangulo): number {
    return r.ancho * r.alto;
}

console.log(area(rectangulo));

rectangulo.toString = function() {return `Un rectangulo de color ${this.color||'indefinido'}`};
console.log(rectangulo.toString());
