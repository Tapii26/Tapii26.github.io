//Crea un array con los 90 numeros del bombo
let numeros =[];
for(let i =1; i<=90;i++){
    numeros.push(i);
}
//Funcion que se activa cada vez que se pide sacar una bola
function obtenerNumeroAleatorio(){
//Obtiene un numero aleatorio y lo saca del array para que no se repita 
    const indiceAleatorio = Math.floor(Math.random()*numeros.length);
    var numeroAleatorio = numeros[indiceAleatorio];
    
    numeros.splice(indiceAleatorio,1);
//Imprime el numero en el bombo y pone un fondo rojo en la casilla que le corresponda       
    const divId = `${numeroAleatorio}`;
    const div = document.getElementById(divId);

    div.style.backgroundColor = 'red';    
    document.getElementById('numeroBombo').innerHTML = ''+ divId;
//Divide la barra en 90 partes y mengua a medida que van saliendo numeros
    const diferencial = document.getElementById('vinoTinto');
    const ancho = 100;
    const anchoDif = ancho - (90 - numeros.length)*1.11;
    diferencial.style.width = `${anchoDif}%`;
//Añade un pequeño mesaje dependiendo del numero que haya tocado
    if(divId == '1'){
        document.getElementById('pizarra').innerHTML = 'El galán';
    }else if(divId == '2'){
        document.getElementById('pizarra').innerHTML = 'El patito, ¡y se le parece! Otros también lo conocen como el Sol';
    }else if(divId == '3'){
        document.getElementById('pizarra').innerHTML = 'San Cono, el Santo de la buena suerte de los quinieleros';
    }else if(divId == '4'){
        document.getElementById('pizarra').innerHTML = 'La cama… Como la cantidad de patas que tiene una';
    }else if(divId == '5'){
        document.getElementById('pizarra').innerHTML = 'El galo o la espina';
    }else if(divId == '6'){
        document.getElementById('pizarra').innerHTML = 'El perro o el corazón';
    }else if(divId == '7'){
        document.getElementById('pizarra').innerHTML = 'El revólver, la pipa o la muleta. También conocido como siete de la suerte';
    }else if(divId == '8'){
        document.getElementById('pizarra').innerHTML = 'El incendio, la dama, o la señora gorda';
    }else if(divId == '9'){
        document.getElementById('pizarra').innerHTML = 'El zapato o el arroyo';
    }else if(divId == '10'){
        document.getElementById('pizarra').innerHTML = 'La rosa, otros lo conocen como el cañón';
    }else if(divId == '11'){
        document.getElementById('pizarra').innerHTML = 'Las banderillas, el minero o los dos soldaditos';
    }else if(divId == '12'){
        document.getElementById('pizarra').innerHTML = 'El soldado';
    }else if(divId == '13'){
        document.getElementById('pizarra').innerHTML = '¡El número de la mala suerte!';
    }else if(divId == '14'){
        document.getElementById('pizarra').innerHTML = 'El borracho o la cerveza';
    }else if(divId == '15'){
        document.getElementById('pizarra').innerHTML = 'La niña bonita';
    }else if(divId == '16'){
        document.getElementById('pizarra').innerHTML = 'El anillo o la guitarra';
    }else if(divId == '17'){
        document.getElementById('pizarra').innerHTML = 'La desgracia o el barco de vela';
    }else if(divId == '18'){
        document.getElementById('pizarra').innerHTML = 'La sangre, los ojos o el ramillete';
    }else if(divId == '19'){
        document.getElementById('pizarra').innerHTML = 'San José o El Correo para Cuba';
    }else if(divId == '20'){
        document.getElementById('pizarra').innerHTML = 'La fiesta o el tío del queso';
    }else if(divId == '21'){
        document.getElementById('pizarra').innerHTML = 'La mujer o la primavera. Recuerda gritar ¡uno!';
    }else if(divId == '22'){
        document.getElementById('pizarra').innerHTML = 'Si el 2 era el patito, el 22… ¿Qué será? ¡Si! ¡Adivinaste! Los dos patitos';
    }else if(divId == '23'){
        document.getElementById('pizarra').innerHTML = 'El cocinero o el melón';
    }else if(divId == '24'){
        document.getElementById('pizarra').innerHTML = 'El caballo o Nochebuena';
    }else if(divId == '25'){
        document.getElementById('pizarra').innerHTML = 'Si el 24 es Nochebuena, el 25 Navidad';
    }else if(divId == '26'){
        document.getElementById('pizarra').innerHTML = 'La misa o los pollos';
    }else if(divId == '27'){
        document.getElementById('pizarra').innerHTML = 'El peine, la pajarita o la pajarera';
    }else if(divId == '28'){
        document.getElementById('pizarra').innerHTML = 'El cerro o Alicante';
    }else if(divId == '29'){
        document.getElementById('pizarra').innerHTML = 'San Pedro o el viaje';
    }else if(divId == '30'){
        document.getElementById('pizarra').innerHTML = 'Santa Rosa o el león';
    }else if(divId == '31'){
        document.getElementById('pizarra').innerHTML = 'La luz o los caballos';
    }else if(divId == '32'){
        document.getElementById('pizarra').innerHTML = 'Dinero …lo que todos anhelamos';
    }else if(divId == '33'){
        document.getElementById('pizarra').innerHTML = 'La edad de Cristo';
    }else if(divId == '34'){
        document.getElementById('pizarra').innerHTML = 'La cabeza o el garrote';
    }else if(divId == '35'){
        document.getElementById('pizarra').innerHTML = 'El pajarito o el fuego';
    }else if(divId == '36'){
        document.getElementById('pizarra').innerHTML = 'La castaña o la sangre';
    }else if(divId == '37'){
        document.getElementById('pizarra').innerHTML = 'Los eucaliptos o la espada';
    }else if(divId == '38'){
        document.getElementById('pizarra').innerHTML = 'Las piedras o el perro';
    }else if(divId == '39'){
        document.getElementById('pizarra').innerHTML = 'La lluvia o el toro';
    }else if(divId == '40'){
        document.getElementById('pizarra').innerHTML = 'El cura';
    }else if(divId == '41'){
        document.getElementById('pizarra').innerHTML = 'El cuchillo';
    }else if(divId == '42'){
        document.getElementById('pizarra').innerHTML = 'Las zapatillas';
    }else if(divId == '43'){
        document.getElementById('pizarra').innerHTML = 'El balcón o la corona';
    }else if(divId == '44'){
        document.getElementById('pizarra').innerHTML = 'La cárcel o los tacones';
    }else if(divId == '45'){
        document.getElementById('pizarra').innerHTML = 'El vino';
    }else if(divId == '46'){
        document.getElementById('pizarra').innerHTML = 'Los tomates o el sombrero';
    }else if(divId == '47'){
        document.getElementById('pizarra').innerHTML = 'El muerto';
    }else if(divId == '48'){
        document.getElementById('pizarra').innerHTML = 'El borrego. Aunque otros lo conocen como la negra o el muerto que habla';
    }else if(divId == '49'){
        document.getElementById('pizarra').innerHTML = 'La carne';
    }else if(divId == '50'){
        document.getElementById('pizarra').innerHTML = 'El pan';
    }else if(divId == '51'){
        document.getElementById('pizarra').innerHTML = 'El serrucho';
    }else if(divId == '52'){
        document.getElementById('pizarra').innerHTML = 'La madre y el hijo';
    }else if(divId == '53'){
        document.getElementById('pizarra').innerHTML = 'El barco';
    }else if(divId == '54'){
        document.getElementById('pizarra').innerHTML = 'La vaca';
    }else if(divId == '55'){
        document.getElementById('pizarra').innerHTML = 'Los civiles';
    }else if(divId == '56'){
        document.getElementById('pizarra').innerHTML = 'La caída';
    }else if(divId == '57'){
        document.getElementById('pizarra').innerHTML = 'El jorobado';
    }else if(divId == '58'){
        document.getElementById('pizarra').innerHTML = 'El ahogado';
    }else if(divId == '59'){
        document.getElementById('pizarra').innerHTML = 'Las plantas';
    }else if(divId == '60'){
        document.getElementById('pizarra').innerHTML = 'La virgen';
    }else if(divId == '61'){
        document.getElementById('pizarra').innerHTML = 'La escopeta';
    }else if(divId == '62'){
        document.getElementById('pizarra').innerHTML = 'La inundación';
    }else if(divId == '63'){
        document.getElementById('pizarra').innerHTML = 'El casamiento';
    }else if(divId == '64'){
        document.getElementById('pizarra').innerHTML = 'El llanto';
    }else if(divId == '65'){
        document.getElementById('pizarra').innerHTML = 'El cazador';
    }else if(divId == '66'){
        document.getElementById('pizarra').innerHTML = 'La lombriz';
    }else if(divId == '67'){
        document.getElementById('pizarra').innerHTML = 'La mordida';
    }else if(divId == '68'){
        document.getElementById('pizarra').innerHTML = 'Los sobrinos';
    }else if(divId == '69'){
        document.getElementById('pizarra').innerHTML = 'Los vicios… ¿necesitamos explicar el por qué?';
    }else if(divId == '70'){
        document.getElementById('pizarra').innerHTML = 'Los muertos o el sueño';
    }else if(divId == '71'){
        document.getElementById('pizarra').innerHTML = 'El maestro o el excremento';
    }else if(divId == '72'){
        document.getElementById('pizarra').innerHTML = 'La sorpresa';
    }else if(divId == '73'){
        document.getElementById('pizarra').innerHTML = 'El hospital';
    }else if(divId == '74'){
        document.getElementById('pizarra').innerHTML = 'La escalera';
    }else if(divId == '75'){
        document.getElementById('pizarra').innerHTML = 'Los besos';
    }else if(divId == '76'){
        document.getElementById('pizarra').innerHTML = 'Las llamas';
    }else if(divId == '77'){
        document.getElementById('pizarra').innerHTML = 'Las dos banderas';
    }else if(divId == '78'){
        document.getElementById('pizarra').innerHTML = 'La ramera';
    }else if(divId == '79'){
        document.getElementById('pizarra').innerHTML = 'El ladrón';
    }else if(divId == '80'){
        document.getElementById('pizarra').innerHTML = 'La bocha';
    }else if(divId == '81'){
        document.getElementById('pizarra').innerHTML = 'Las flores';
    }else if(divId == '82'){
        document.getElementById('pizarra').innerHTML = 'La pelea o el jarro';
    }else if(divId == '83'){
        document.getElementById('pizarra').innerHTML = 'El mal tiempo, pero ¡esperemos que no sea así tu suerte!';
    }else if(divId == '84'){
        document.getElementById('pizarra').innerHTML = 'La iglesia';
    }else if(divId == '85'){
        document.getElementById('pizarra').innerHTML = 'La linterna';
    }else if(divId == '86'){
        document.getElementById('pizarra').innerHTML = 'El humo';
    }else if(divId == '87'){
        document.getElementById('pizarra').innerHTML = 'Los piojos';
    }else if(divId == '88'){
        document.getElementById('pizarra').innerHTML = 'Las calabazas o las gordas';
    }else if(divId == '89'){
        document.getElementById('pizarra').innerHTML = 'La rata o la gamba';
    }else if(divId == '90'){
        document.getElementById('pizarra').innerHTML = 'El abuelo, la última cifra y la más alta';
    }
}
//Resetea el juego por completo sin necesidad de haber acabado el juego
function resetNumeros(){
//Vacia al completo el array de numeros
    numeros.splice(0,numeros.length);
//introduce de nuevo todos los numeros del 1 al 90 en el array y cambia el fondo de dichos numeros a defecto
    for(let i =1; i<=90;i++){
        numeros.push(i);

        const divId = `${i}`;
        const div = document.getElementById(divId);

        div.style.backgroundColor = '#e4d8af';
    }
//Coloca el ancho de la barra de progreso al 100%
    const barra = document.getElementById('vinoTinto');
    const ancho = 100;
    barra.style.width = `${ancho}%`;
//Coloca el mensaje por defecto en el aside
    document.getElementById('numeroBombo').innerHTML = 'B';
    document.getElementById('pizarra').innerHTML = 'Espero que disfruten!';
//Esconde el input del nombre del ganador y muestra la barra de progreso
    const barraProgreso = document.getElementById('progressBar');
    const cuaderno = document.getElementById('casilla');
    
    barraProgreso.classList.remove('oculto');
    cuaderno.classList.remove('oculto');
    cuaderno.classList.add('oculto');
    
}
//Imprime numeros al azar en el bombo sin mayor transfondo
function rotacionNumerica(){
    const indiceAleatorio = Math.floor(Math.random()*numeros.length);
    var numeroAleatorio = numeros[indiceAleatorio];

    const divId = `${numeroAleatorio}`;

    document.getElementById('numeroBombo').innerHTML = ''+ divId;
    document.getElementById('pizarra').innerHTML = 'Esperando número';

}
//Pequeño bucle que llama a una funcion durante el tiempo que transcurre y a otra funcion cuando ha acabado
function bomboVivo(){

    for(i=0;i<=19;i++){
        setTimeout(function(){
            rotacionNumerica();           

        },i*180)
    }
    setTimeout(function(){
            obtenerNumeroAleatorio();
    },3650)
}
//Personaliza la felicitacion con el nombre que se ha introducido en el input
function felicitarGanador(){

    let nombre;
    nombre = document.getElementById('winnerName').value;

    const wall = document.createElement('h3');
    const texto = document.createTextNode(`Enorabuena ${nombre}! ¿Eras la unica persona que jugaba?`);

    wall.appendChild(texto);

    const container = document.getElementById('wall');
    container.appendChild(wall);
}
//Muestra un div que bloquea los botones y otro con un mensaje de felicitaciones
function mensajeFlotante(){
//Identifica los divs correspondientes y elimina la clase oculto
    const divOculto = document.getElementById('divOculto');
    const fondoOculto = document.getElementById('fondoOculto');

    fondoOculto.classList.remove('oculto');
    divOculto.classList.remove('oculto');
}
//Esconde la barra de progreso y muestra un input para escribir el nombre del ganador
function ponerNombre(){

    const barraProgreso = document.getElementById('progressBar');
    const cuaderno = document.getElementById('casilla');

    barraProgreso.classList.add('oculto');
    cuaderno.classList.remove('oculto');
}
//Funcion para volver a jugar una vez ha habido un ganador
function juegoAcabado(){
//Esconde el mensaje de felicitaciones y el fondo que bloquea los botones
    const divOculto = document.getElementById('divOculto');
    const fondoOculto = document.getElementById('fondoOculto');

    fondoOculto.classList.add('oculto');
    divOculto.classList.add('oculto');
//Esconde el input del nombre y muestra la barra de progreso
    const barraProgreso = document.getElementById('progressBar');
    const cuaderno = document.getElementById('casilla');

    barraProgreso.classList.remove('oculto');
    cuaderno.classList.add('oculto');
//Coloca el mensaje por defecto en el aside
    document.getElementById('wall').innerHTML = '';
    document.getElementById('numeroBombo').innerHTML = 'B';
    document.getElementById('pizarra').innerHTML = 'Que será?';
//Coloca el ancho de la barra de progreso al 100%
    const barra = document.getElementById('vinoTinto');
    const ancho = 100;
    barra.style.width = `${ancho}%`;
}
//Elimina el panel de instrucciones para empezar a jugar
function cerrarInstrucciones(){
    const instructions = document.getElementById('instrucciones');
    const fondoOculto = document.getElementById('fondoOculto');

    instructions.style.display = 'none';
    fondoOculto.classList.add('oculto');
}
function abrirInstrucciones(){
    const fondoOculto = document.getElementById('fondoOculto');
    const instructions = document.getElementById('instrucciones');
    const botonA = document.getElementById('startGame');
    const botonV = document.getElementById('return');

    fondoOculto.classList.remove('oculto');
    instructions.style.display = 'block';
    botonA.classList.add('oculto');
    botonV.classList.remove('oculto');
}
//Funcion del boton Bola va!
const newBall = document.getElementById('addBall');
newBall.addEventListener('click', bomboVivo);
//Funcion del boton Nueva Partida tanto para ordenador como para moviles
const newGameLaptop = document.getElementById('resetLaptop');
const newGameMobile = document.getElementById('resetMobile');
newGameLaptop.addEventListener('click', resetNumeros);
newGameMobile.addEventListener('click', resetNumeros);
//Funcion del boton Listo
const mesCong = document.getElementById('enterName');
mesCong.addEventListener('click',felicitarGanador);
mesCong.addEventListener('click',mensajeFlotante);
//Funcion del boton BINGO
const putName = document.getElementById('win');
putName.addEventListener('click', ponerNombre);
//Funcion del boton Nueva Partida
const finishGame = document.getElementById('finish');
finishGame.addEventListener('click', juegoAcabado);
finishGame.addEventListener('click', resetNumeros);

const start = document.getElementById('startGame');
const comeback = document.getElementById('return');
start.addEventListener('click', cerrarInstrucciones);
comeback.addEventListener('click', cerrarInstrucciones);


const instr = document.getElementById('ayuda');
instr.addEventListener('click',abrirInstrucciones);