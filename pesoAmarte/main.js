const gravedadJupiter = 24.79
const gravedadSaturno = 10.44
const gravedadPluton = 0.62
const gravedadTierra = 9.81
const gravedadMarte = 3.71

const miPeso = prompt('Cuál es tu peso?')
const planeta = prompt('En que planeta te quieres pesar?\n Jupiter = 1\n Saturno = 2\n Plutón = 3\n Marte = 4')
let gravedadPlaneta
let nombrePlaneta 

if (planeta == '1') { 
	gravedadPlaneta = gravedadJupiter
	nombrePlaneta = 'Jupiter'
}

if (planeta == '2') {
	gravedadPlaneta = gravedadSaturno
	nombrePlaneta = 'Saturno'
}

if (planeta == '3') {
	gravedadPlaneta = gravedadPluton
	nombrePlaneta = 'Plutón'
}

if (planeta == '4') {
	gravedadPlaneta = gravedadMarte
	nombrePlaneta = 'Marte'
}


let resultPeso = (miPeso / gravedadTierra) * gravedadPlaneta

resultPeso = resultPeso.toFixed(1)

const resultado = 'tu peso en ' + nombrePlaneta +' es de ' + resultPeso + 'kg'


document.write(resultado)
