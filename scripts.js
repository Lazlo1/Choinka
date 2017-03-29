function rysujChoinke(n) {
	for(var x = 1; x < n; x++) {
		var star = '';
		for(var y = 0; y < x*2-1; y++){
			star += '*';
		}
		console.log(star);	
	}
	
}
rysujChoinke(6);