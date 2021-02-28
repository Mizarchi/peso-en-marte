const gravedadTierra = 9.81
const gravedadMarte = 3.71

const miPeso = prompt('Cuál es tu peso?')
const resultPesoAmarte = (miPeso / gravedadTierra) * gravedadMarte

const resultado = 'tu peso en marte es ' + resultPesoAmarte

document.write(resultado)
