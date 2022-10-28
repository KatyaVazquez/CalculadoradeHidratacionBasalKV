console.log('holi mi primer proyecto :)');
let contenedor = document.getElementById('contenedor');
const CALCULAR = document.getElementById('CALCULAR');
const ERROR = document.getElementById('error');
const VOLUMEN = document.getElementById('volumen');
const  FLUJO = document.getElementById('flu');
const MANTENIMIENTO = document.getElementById ('mantenimiento'); 
const AUXI = document.getElementById('auxi');
const VOLUMEN2 = document.getElementById ('volumen2');
const FLUJOHOR = document.getElementById ('flujohor');
const MANTENIMIENTO2 = document.getElementById ('mantenimiento2');
CALCULAR.addEventListener('click', () => {
    console.log('Se hizo click!')
}); 
CALCULAR.addEventListener('click', () => {
    const datito = document.getElementById('datito').value
    console.log('dato ingresado: ', datito);
    // IF dentro del  Listener - ayuda memoria pa mi
    if (datito > 0  && datito<30 ){
        ERROR.style.display = 'none';
        let flu1 = calcFlujo(datito);
        let flujo = flu1/24;
        let mantenimiento = flujo*1.5;
        //el innerHTML es parte del Modelo de (DOM) y se utiliza para establecer o devolver el contenido HTML de un elemento.// 
        VOLUMEN.innerHTML = flu1 + 'cc/h' + 'diario';
        MANTENIMIENTO.innerHTML = ' m+m/2= '  + mantenimiento  +  ' cc/hr ';
        FLUJO.innerHTML = flujo + ' cc/hr ';
        FLUJO.style.display = 'block';
        VOLUMEN.style.display = 'block';
        MANTENIMIENTO.style.display = 'block';
        //Me divague un montón pero lo iré mejorando
    
    } else {
        //En style se declara la const block muestra, none pa qué no se vea
        ERROR.style.display = 'block';
        FLUJO.style.display = 'none';
        VOLUMEN.style.display = 'none';
        MANTENIMIENTO.style.display = 'none';
    };
}); 
CALCULAR.addEventListener('click', () => {
    const datito = document.getElementById('datito').value
    console.log('dato ingresado: ', datito);
    if (datito > 30){
        let auxi = calcularSC(datito);
        let volumen = auxi*1500;
        let volumen2= auxi*2000;
        let flujohor = volumen/24;
        let mantenimiento2 = flujohor*1.5;
        VOLUMEN.innerHTML = volumen + 'SC1500 cc diario';
        VOLUMEN2.innerHTML = volumen2  + 'cc diario';
        FLUJOHOR.innerHTML = flujohor + 'cc/hr';
        MANTENIMIENTO2.innerHTML = ' m+m/2= ' + mantenimiento2 + ' cc/hr ';
        VOLUMEN.style.display = 'block';
        FLUJOHOR.style.display = 'block';
        VOLUMEN2.style.display ='block';
        MANTENIMIENTO2.style.display = 'block';

    };
});
// Aquí procedemos a realizar los calculos - declarando la función 'calcFlujo' se procede a ejecutar el algoritmo//
function calcFlujo(datito){
    let flu1 = 0;
    //Cuando el niño tiene hasta 10kg: 100cc por cada kilo.
    if (datito<11){
        flu1 = datito*100;
  
    };
    //Luego, por cada kilo arriba de 10 y hasta 20kg, se suman 50cc.
    if (datito>10 && datito<21){
        flu1 = 1000 + (datito-10)*50;

    };
    //Por cada kilo arriba de 20kg se suman 20cc.
    if (datito>20 && datito<31){
        flu1 = 1500 + (datito-20)*20;
    };
    return flu1;
};
function calcularSC(datito){
    // nuestro dato nos leía como caracter, entonces procedemos a realizar la sgt solución
    datito=Number(datito);
    let volumen = 0;
    let volumen2 = 0;
    let auxi=0;
    if (datito>30){
        auxi = ( (datito * 4) + 7)/(datito + 90);
    };
    return auxi;
}; 
