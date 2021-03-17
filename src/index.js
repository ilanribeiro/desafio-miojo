const tempoMinimoDePreparo = (tempoMiojo, ampulhetas) => {
  //  implemente a lógica aqui. 
	ampulhetas.sort((a,b) => a - b);
	const ampulhetaMaior = ampulhetas[1];
	const ampulhetaMenor = ampulhetas[0];
	const difAmpulhetas = ampulhetaMaior-ampulhetaMenor;
	
	if (difAmpulhetas === 0) {
		return false
	}

	if (difAmpulhetas === tempoMiojo) {
		return ampulhetaMaior;
	}

	if (difAmpulhetas < tempoMiojo) {
		const tempoRestante = tempoMiojo - difAmpulhetas
		const doubleMin = ampulhetaMenor * 2;
		return doubleMin;
	}

}

export default tempoMinimoDePreparo;
