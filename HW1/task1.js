const Tc = 25;

function toTf(Tc){
	let Tf;
	Tf = (9 / 5) * Tc + 32;
	return Tf;
}

alert(toTf(Tc))