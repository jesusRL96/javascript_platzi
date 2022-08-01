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
people.push(1);

let strAndNbum: Array<string | number> = [];
strAndNbum.push('Juan');
strAndNbum.push(1);

// Enum
enum Color {
    Rojo='Rojo', Verde='Verde', Azul='Azul'
}
let colorFavorito: Color = Color.Verde;
console.log(`Color favorito ${colorFavorito}`);