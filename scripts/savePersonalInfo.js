// Eine Funktion zum Speichern der persönlichen Informationen in localStorage
function savePersonalInfo(firstName, lastName) {
    // Überprüfen, ob der Browser localStorage unterstützt
    if (typeof(Storage) !== "undefined") {
        // Erstellen eines Objekts mit den eingegebenen Daten
        var personalInfo = {
            firstName: firstName,
            lastName: lastName
        };

        // Konvertieren des Objekts in JSON
        var personalInfoJSON = JSON.stringify(personalInfo);

        // Speichern der JSON-Daten in localStorage
        localStorage.setItem("personalInfo", personalInfoJSON);

        console.log('Die Daten wurden erfolgreich gespeichert.');
    } else {
        console.error('Ihr Browser unterstützt kein localStorage.');
    }
}

// Das Formular abfangen, um die eingegebenen Daten zu speichern
document.getElementById("personalInfoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Standardformularverhalten verhindern

    // Die eingegebenen Daten abrufen
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    // Die Funktion zum Speichern der Daten aufrufen
    savePersonalInfo(firstName, lastName);

    // Zum nächsten Seitenausgabe.html weiterleiten
    window.location.href = "output.html";
});
