const savePersonalInfo = require('savePersonalInfo');
const loadPersonalInfo = require('loadPersonalInfo');

// Eine Funktion zur Anzeige der geladenen persönlichen Informationen
function displayPersonalInfo(personalInfo) {
    // Die Daten in das HTML-Dokument einfügen
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<p>Vorname: " + personalInfo.firstName + "</p>" +
        "<p>Nachname: " + personalInfo.lastName + "</p>";
}

// Eine Funktion zum Hinzufügen eines Event-Listeners für das Formular
function addFormSubmitListener() {
    document.getElementById("personalInfoForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Standardformularverhalten verhindern

        // Die eingegebenen Daten abrufen
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;

        // Die Funktion zum Speichern der Daten aufrufen
        savePersonalInfo(firstName, lastName);

        // Zur nächsten Seite weiterleiten
        window.location.href = "../html/output.html";
    });
}

// Die Funktionen aufrufen, wenn die Seite geladen wird
window.onload = function() {
    loadPersonalInfo(displayPersonalInfo); // Lade die gespeicherten Daten und rufe dann displayPersonalInfo auf
    addFormSubmitListener();
};
document.addEventListener('DOMContentLoaded', function() {
    /*
    Schritt 1: Es wird gesagt, was zu tun ist

    Schritt 2: Erstes Feld ausfüllen
        2.1 Feld Titel per text to speech ausgeben (Name, Required or not, Input-typ)
        2.2 Feld bfüllen

    Schritt 3: Daten speichern

    Schritt 4: Seite schliessen
    */
    // Schritt 1
    let startTextTitle = document.getElementById('title').textContent;
    let startTextContent = document.getElementById('info').textContent;
    let startText = startTextTitle + '. ' + startTextContent;
    getAudio(startText);

    // Schritt 2
    // durch jedes feld iterieren. Es soll der Titel des Feldes per text to speech ausgegeben werden, ob es required ist und welchen input typ es hat
    // dann muss der Input gefüllt werden
    let formFields = document.querySelectorAll('input');
    formFields.forEach(async function(field) {
        // get Inhalt vom dazugehörigen label
        let fieldText = field.previousElementSibling.textContent;
        // get required
        let required = field.required;
        // get input type
        let type = field.type;
        switch (type) {
            case 'text':
                type = 'Text';
                break;
            case 'email':
                type = 'Email';
                break;
            case 'number':
                type = 'Nummer';
                break;
            case 'date':
                type = 'Datum';
                break;
            case 'password':
                type = 'Passwort';
                break;
            case 'tel':
                type = 'Telefonnummer';
                break;
            case 'checkbox':
                type = 'Checkbox';
                break;
            case 'radio':
                type = 'Radio';
                break;
            case 'file':
                type = 'Datei';
                break;
            case 'submit':
                type = 'Absenden';
                break;
            case 'reset':
                type = 'Zurücksetzen';
                break;
            case 'button':
                type = 'Knopf';
                break;
            case 'hidden':
                type = 'Versteckt';
                break;
            case 'image':
                type = 'Bild';
                break;
            case 'color':
                type = 'Farbe';
                break;
            case 'range':
                type = 'Bereich';
                break;
            case 'search':
                type = 'Suche';
                break;
            case 'url':
                type = 'URL';
                break;
            case 'month':
                type = 'Monat';
                break;
            case 'week':
                type = 'Woche';
                break;
            case 'time':
                type = 'Zeit';
                break;
            case 'datetime-local':
                type = 'Datum und Zeit';
                break;
            default:
                type = 'Unbekannt';
        }
        // get audio
        textToSpeech = fieldText + " einsprechen. Dieses Feld ist ";
        if (required) {
            textToSpeech += "obligatorisch. ";
        } else {
            textToSpeech += "optional. Wenn Sie dieses Feld nicht ausfüllen wollen, drücken Sie Enter.";
        }
        textToSpeech += "Der Input-Typ ist " + type + ".";

        getAudio(textToSpeech).then(() => {
            // get response
            let response = getTextFromVoice();
            field.value = response;
        });
    });
});