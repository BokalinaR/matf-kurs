let ime = "";

function ucitajIme() {
    let osoba = prompt("Please enter your name", "John Doe");

    if (osoba == null || osoba == "") {
        ime = "User cancelled the prompt.";
    } else {
        ime = osoba;
    }

    return ime;
};

let runda = 0;
let pobeda_racunar = 0;
let pobeda_korisnik = 0;
let list = document.querySelectorAll("img");
//console.log(list)

for (let l of list) {
    l.addEventListener('click', izracunaj)
}

ucitajIme();
console.log(ime);

function izracunaj() {

    let korisnik = this.cloneNode();
    korisnik.removeAttribute('style');
    korisnik.removeAttribute('class');
    korisnik.setAttribute('class', 'slika1');

    let cvor = document.getElementById("korisnik");
    cvor.appendChild(korisnik);

    let comp = list[Math.floor(Math.random() * list.length)];
    show(comp);

    document.getElementById("racunar").hidden = false;
    document.getElementById("korisnik").hidden = false;

    let kor = korisnik.dataset.framework;
    let komp = comp.dataset.framework;

    if (kor == komp) {
        document.getElementById('kor').style.display = "none";
        document.getElementById('comp').style.display = "none";
        document.getElementById('nereseno').style.display = "block";
        runda++;
        //alert('Izjednaceno');
    } else if (kor == 'p') {
        if (komp == 'k') {
            document.getElementById('kor').style.display = "block";
            document.getElementById('comp').style.display = "none";
            document.getElementById('nereseno').style.display = "none";
            pobeda_korisnik++;
            runda++;
        } else {
            document.getElementById('kor').style.display = "none";
            document.getElementById('comp').style.display = "block";
            document.getElementById('nereseno').style.display = "none";
            pobeda_racunar++;
            runda++;
        }
    } else if (kor == 'k') {
        if (komp == 'm') {
            document.getElementById('kor').style.display = "block";
            document.getElementById('comp').style.display = "none";
            document.getElementById('nereseno').style.display = "none";
            pobeda_korisnik++;
            runda++;
        } else {
            document.getElementById('kor').style.display = "none";
            document.getElementById('comp').style.display = "block";
            document.getElementById('nereseno').style.display = "none";
            pobeda_racunar++;
            runda++;
        }
    } else if (kor == 'm') {
        if (komp == 'p') {
            document.getElementById('kor').style.display = "block";
            document.getElementById('comp').style.display = "none";
            document.getElementById('nereseno').style.display = "none";
            pobeda_korisnik++;
            runda++;
        } else {
            document.getElementById('kor').style.display = "none";
            document.getElementById('comp').style.display = "block";
            document.getElementById('nereseno').style.display = "none";
            pobeda_racunar++;
            runda++;
        }
    }

    console.log(runda);

    if (runda === 5) {
        if (pobeda_korisnik > pobeda_racunar) {
            alert("YOU WIN, CONGRATULATIONS!")
            posaljiRezultat(ime, pobeda_korisnik);
        } else {
            alert("Computer win!");
        }


        restart();
    }

}

function show(obj) {
    let comp1 = obj.cloneNode();
    comp1.removeAttribute('style');
    comp1.removeAttribute('class');
    comp1.setAttribute('class', 'slika1');

    let cvor = document.getElementById("racunar");
    cvor.appendChild(comp1);
    //  	console.log(comp1)
}

function restart() {
    runda = 0;
    pobeda_racunar = 0;
    pobeda_korisnik = 0;

    for (let l of list) {
        l.addEventListener('click', izracunaj)
    }

    document.getElementById('kor').style.display = "none";
    document.getElementById('comp').style.display = "none";
    document.getElementById('nereseno').style.display = "none";

    document.getElementById('racunar').hidden = true;
    document.getElementById('korisnik').hidden = true;

    ucitajIme();
    console.log(ime);
}

const posaljiRezultat = async(ime, rez) => {
    try {
        const URL = 'http://localhost:3002/';
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                name: ime,
                score: rez
            })
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);

    } catch (err) {
        console.error(err);
    }
}