//async => tämä funktio odottaa verkosta tulevaa vastausta (await)
async function getUser(){

// haetaan nappi html:stä
    const button = document.getElementById("fetchBtn");
    button.disabled = true; //napin pois päältä haku aikana
    button.textContent = "haetaan..."; //napin teksti muuttuu

    try {
        const url = 'https://reqres.in/api/users/1';
        // lisätään asetuksiin api-avain jotta ilman tätä pyyntö ei toimi
        const options = {
            headers: {
                'x-api-key': 'reqres-free-v1',
            },
        };

        const response = await fetch(url, options);
        // jos vastaus ei onnistuu
        if (!response.ok) {
            throw new Error(`Virhe: HTTP ${response.status}`);
        }

        // Muutetaan vastaus JSON-muodosta JavaScript-olioksi
        const data = await response.json();

        // Tulostetaan saatu data selaimen konsoliin
        console.log('Saatiin data:', data);
    } catch (err) {
        // Jos jokin meni pieleen, kerrotaan se konsolissa
        console.error('Jokin meni pieleen:', err);
    } finally {
        // Lopuksi palautetaan nappi takaisin normaaliksi
        button.disabled = false;
        button.textContent = 'Hae käyttäjä';
    }
}

// Kun nappia klikataan, suoritetaan getUser-funktio
document.getElementById('fetchBtn').addEventListener('click', getUser);
