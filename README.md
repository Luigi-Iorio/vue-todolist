# Vue To Do List

### Descrizione

L'obbiettivo di questa repo è quello di creare una to do list completa con VueJs.

Le funzionalità sono:

- Visualizzare la lista di cose da fare
- Se l'attività è stata fatta visualizzare il testo sbarrato
- "X" laterale per eliminare il todo dalla lista
- Input e bottone per aggiungere nuovi elementi alla lista
- Aggiungere elementi alla lista anche con il tasto enter
- Toggle per aggiungere/rimuovere testo sbarrato

## Risoluzione in linguaggio naturale

1. Creare la struttura html con un solo todo
2. Creare in data() un array di oggetti (le chiavi saranno: text, done)
3. Visualizzare tutti i todo utilizzando la direttiva v-for sull'elemento che si deve ripetere
4. Creare una condizione nella classe per visualizzare il testo sbarrato
5. Aggiungere una "X" per rimuovere todo, al click eseguire una funzione che rimuove l'elemento dall'array
6. Aggiungere elementi alla lista tramite input. Creare una varibile vuota, la varibile verrà popolata utilizzando la direttiva v-model sull'input, eseguire una funzione al click sul bottone per pushare la nuova todo nell'array (visulizzarla nella lista)
7. Con keyup.enter aggiungere elemento (tramite input) alla lista
8. Toggle su classe per sbarrare il testo
