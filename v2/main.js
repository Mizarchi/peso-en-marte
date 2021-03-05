const gravedadTierra = 9.81
const gravedadMarte = 3.71
const input = document.getElementById('peso')
const button = document.getElementById('button')
const contenedor = document.getElementById('resultado')

button.addEventListener('click', () => {
	const miPeso = input.value
	const resultPeso = (miPeso / gravedadTierra) * gravedadMarte
	const resultado = 'Tu peso en marte es ' + ~~resultPeso + 'kg'
	contenedor.innerText = resultado
 })

