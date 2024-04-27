// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
// Primo step: eliminare gli spazi e i segni di punteggiatura:
// Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")

// Esempio:
// Input: “i topi non avevano nipoti”
// Output: true


function verPalindroma(strDaVerificare) {
    let strNospace = strDaVerificare.replace(/\W/g, "")
    let arraystrNospace = strNospace.split("");
    if (arraystrNospace.join() == arraystrNospace.reverse().join()){
        return true;
    }
    else {
        return false;
    };
}

let check = verPalindroma("i topi non avevano nipoti")

console.log(check);
