// Funktion zum Laden der gespeicherten persönlichen Informationen aus localStorage
function loadPersonalInfo() {
    // Überprüfen, ob der Browser localStorage unterstützt
    if (typeof(Storage) !== "undefined") {
        // Die gespeicherten Daten aus localStorage abrufen
        var personalInfoJSON = localStorage.getItem("personalInfo");

        // Überprüfen, ob Daten vorhanden sind
        if (personalInfoJSON) {
            // Die JSON-Daten in ein JavaScript-Objekt umwandeln
            var personalInfo = JSON.parse(personalInfoJSON);

            // Die Daten in das html-Dokument einfügen
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = ""; // Leeren Sie das Ausgabe-Div zuerst
            outputDiv.innerHTML = "<p>Vorname: " + personalInfo.firstName + "</p>" +
                "<p>Nachname: " + personalInfo.lastName + "</p>"+
                "<p>Email: " + personalInfo.email + "</p>"; // Stellen Sie sicher, dass email korrekt abgerufen wird
        } else {
            console.error('Keine gespeicherten Daten gefunden.');
        }
    } else {
        console.error('Ihr Browser unterstützt kein localStorage.');
    }
}


// Die Funktion zum Laden der gespeicherten Daten aufrufen, wenn die Seite geladen wird
window.onload = loadPersonalInfo;
