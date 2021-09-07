

/* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. */
let studente = {
    'nome' : 'ivan',
    'cognome' : 'nastro',
    'eta' : 26 + ' anni'
};

/* Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto. */
for(let key in studente){
    console.log(key);
    console.log(studente[key]);
}

/* Creare un array di oggetti di studenti. */
let studenti = [
    {
        'nome' : 'ivan',
        'cognome' : 'nastro',
        'eta' : 26 + ' anni'
    },
    {
        'nome' : 'paolo',
        'cognome' : 'paoli',
        'eta' : 45 + ' anni'
    },
    {
        'nome' : 'maria',
        'cognome' : 'rossi',
        'eta' : 19 + ' anni'
    }   
]

/* Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome. */
for(let i=0 ; i< studenti.length; i++){
   let nuovoStudente = studenti[i];
   let nomeStudente = nuovoStudente['nome'];
   let cognomeStudente = nuovoStudente['cognome'];
   console.log(nomeStudente);
   console.log(cognomeStudente);
}

/* Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente 
inserendo nell’ordine: nome, cognome e età. */
studenti.push({
    'nome' : prompt('inserisci il nome del nuovo studente'),
    'cognome' : prompt('inserisci il cognome del nuovo studente'),
    'eta' : prompt('inserisci l età del nuovo studente')

});

console.log(studenti);