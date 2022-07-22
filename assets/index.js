import MediaPlayer from "./mediaPlayer.js";
const video = document.querySelector('video');
const button = document.querySelector('button#play-button');

const player = new MediaPlayer({video});
button.onclick = () => player.togglePlay();

// call
function saludar() {
    console.log(`hola, soy ${this.nombre} ${this.apellido}`);
}
const persona = {nombre:'juan', apellido:'lopez'}
saludar.call(persona);

function caminar(metros, direccion) {
    console.log(`${this.nombre}: caminar ${metros} -> ${direccion}`);
}
caminar.call(persona, 300, 'norte');
// apply
caminar.apply(persona, [200, 'sur'])
// bind
const persona1 = {nombre:'jorge', apellido:'lopez'}
const saludoPersona1 = saludar.bind(persona1);
saludoPersona1();
const persona1Camina = caminar.bind(persona1)
persona1Camina(200,'este');

const buttons = document.getElementsByClassName('boton-call');
// buttons.forEach(button => {
Array.prototype.forEach.call(buttons, (button,index) => {
    button.onclick = (button) => alert('call: '+index);
});

// Prototype
function Persona(name) {
    // const persona = Object.create(Persona.prototype)
    // persona.name = name;
    // persona.saludar = function() {console.log(`hola soy ${this.name}`)};
    // return persona;
    this.name = name
}
Persona.prototype.saludar = function() {console.log(`hola soy ${this.name}`)};
const juan = new Persona('juan obj');
const pepe = new Persona('pepe obj');
juan.saludar();
pepe.saludar();