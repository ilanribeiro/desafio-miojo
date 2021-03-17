const tempoMinimoDePreparo = (tempoMiojo, ampulhetas) => {
  //  implemente a lógica aqui. 
	ampulhetas.sort((a,b) => a - b);
	console.log(ampulhetas);
	const difAmpulhetas = ampulhetas[1]-ampulhetas[0];
	console.log(difAmpulhetas)
	if (difAmpulhetas === 0) {
		return false
	}

	if (difAmpulhetas === tempoMiojo) {
		return ampulhetas[1];
	}

	if (difAmpulhetas < tempoMiojo) {
		const tempoRestante = tempoMiojo - difAmpulhetas
		console.log(tempoRestante)
		const doubleMin = ampulhetas[0] * 2;
		return doubleMin;
	}

}

export default tempoMinimoDePreparo;
