function loadPersonalInfo() {
    if (typeof(Storage) !== "undefined") {
        // Die gespeicherten Daten aus localStorage abrufen
        var personalInfoJSON = localStorage.getItem("personalInfo");

        // Überprüfen, ob Daten vorhanden sind
        if (personalInfoJSON) {
            // Die JSON-Daten in ein JavaScript-Objekt umwandeln
            var personalInfo = JSON.parse(personalInfoJSON);

            // Die Daten in das html-Dokument einfügen
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = "<p>Vorname: " + personalInfo.firstName + "</p>" +
                "<p>Nachname: " + personalInfo.lastName + "</p>";
        } else {
            console.error('Keine gespeicherten Daten gefunden.');
        }
    } else {
        console.error('Ihr Browser unterstützt kein localStorage.');
    }
}
