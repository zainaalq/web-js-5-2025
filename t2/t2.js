async function createUser() {
  try {
    const url = "https://reqres.in/api/users";

    // otetaan arvot kentistä
    const name = document.getElementById("nameInput").value;
    const job = document.getElementById("jobInput").value;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
      body: JSON.stringify({ name, job }),
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Virhe: HTTP ${response.status}`);
    }

    const data = await response.json();

    
    console.log("Saatiin vastaus:", data);
  } catch (err) {
    console.error("Jokin meni pieleen:", err.message);
  }
}

document.getElementById("postBtn").addEventListener("click", createUser);
