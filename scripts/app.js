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
    formFields.forEach(function(field) {
        // get Inhalt vom dazugehörigen label
        let fieldText = field.previousElementSibling.textContent;
        // get required
        let required = field.required;
        // get input type
        let type = field.type;
        // get audio
        textToSpeech = fieldText + "einsprechen. Dieses Feld ist ";
        if (required) {
            textToSpeech += "obligatorisch. ";
        } else {
            textToSpeech += "optional. Wenn Sie dieses Feld nicht ausfüllen wollen, drücken Sie Enter.";
        }

        getAudio(fieldText);
    });
});