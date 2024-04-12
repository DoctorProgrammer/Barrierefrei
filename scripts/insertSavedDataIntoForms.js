// Eine Funktion zum Laden der gespeicherten persönlichen Informationen und Einfügen in das Testformular
function insertSavedDataIntoTestForm() {
    // Laden der gespeicherten Daten aus localStorage
    var personalInfoJSON = localStorage.getItem("personalInfo");

    // Überprüfen, ob Daten vorhanden sind
    if (personalInfoJSON) {
        // Die JSON-Daten in ein JavaScript-Objekt umwandeln
        var personalInfo = JSON.parse(personalInfoJSON);

        // Einfügen der geladenen Daten in das Testformular
        var firstNameField = document.getElementById("firstName");
        var lastNameField = document.getElementById("lastName");
        if (personalInfo["firstName"]) {
            firstNameField.value = personalInfo["firstName"];
        }
        if (personalInfo["lastName"]) {
            lastNameField.value = personalInfo["lastName"];
        }

        console.log('Gespeicherte Daten erfolgreich in das Testformular eingefügt.');
    } else {
        console.error('Keine gespeicherten Daten gefunden.');
    }
}

// Aufruf der Funktion zum Einfügen der gespeicherten Daten in das Testformular, wenn das Dokument vollständig geladen ist
document.addEventListener('DOMContentLoaded', insertSavedDataIntoTestForm);
