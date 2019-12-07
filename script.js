let list = document.querySelectorAll("img");
console.log(list)

for (let l of list) {
	l.addEventListener('click', izracunaj)
}

function izracunaj(){
	
	let korisnik = this.cloneNode();
	korisnik.removeAttribute('style');
	korisnik.removeAttribute('class');
	korisnik.setAttribute('class', 'slika1');
	
	let cvor = document.getElementById("korisnik");
	cvor.appendChild(korisnik);
	
	let comp = list[Math.floor(Math.random() * list.length)];
	show(comp);
	
	let kor = korisnik.dataset.framework;
	let komp = comp.dataset.framework;
	
	if(kor == komp){
		document.getElementById('kor').style.display = "none";
		document.getElementById('comp').style.display = "none";
		alert('Izjednaceno');
	} else if (kor == 'p'){
		if(komp == 'k'){
			document.getElementById('kor').style.display = "initial";
			document.getElementById('comp').style.display = "none";
		}
		else{
			document.getElementById('kor').style.display = "none";
			document.getElementById('comp').style.display = "block";
		}
	}else if (kor == 'k'){
		if(komp == 'm'){
			document.getElementById('kor').style.display = "block";
			document.getElementById('comp').style.display = "none";
		}
		else{
			document.getElementById('kor').style.display = "none";
			document.getElementById('comp').style.display = "block";
		}
	}else if (kor == 'm'){
		if(komp == 'p'){
			document.getElementById('kor').style.display = "block";
			document.getElementById('comp').style.display = "none";
		}
		else{
			document.getElementById('kor').style.display = "none";
			document.getElementById('comp').style.display = "block";
		}
	}
}

function show(obj){
	let comp1 = obj.cloneNode();
	comp1.removeAttribute('style');
	comp1.removeAttribute('class');
	comp1.setAttribute('class', 'slika1');
	
 	let cvor = document.getElementById("racunar");
	cvor.appendChild(comp1);
//  	console.log(comp1)
}
