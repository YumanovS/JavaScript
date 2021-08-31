function name(){
	const board = document.querySelector('#board');
	const letters = ['A','B','C','D','E','F','G','H'];
	for (var i = 0; i <= 9; i++) {
		var row = document.createElement('div');
		for (var j = 0; j <= 9; j++) {
			var column = document.createElement('div');
			row.append(column);
			if (i != 0 && i!= 9) {
				if (j != 0 && j != 9) {
					if (i % 2 == j % 2) {
						column.className = 'black';
					};
				};
			};
			if (i == 0 || i == 9) {
				if (j != 0 && j != 9) {
					column.textContent = j;
				};
			};
			if (j == 0 || j == 9) {
				if (i != 0 && i != 9) {
					column.textContent = letters[i-1];
				};
			};
			if (i == 0 || i == 9 || j == 0 || j == 9){
				column.className = 'wood';
			};
		};
		board.append(row);
		row.className = 'outer';
	};
	
};

name()