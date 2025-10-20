async function makeRequest(method, url, body = null) {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
      body: body ? JSON.stringify(body) : null,
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Virhe: HTTP ${response.status}`);
    }

    const data = await response.json();
    console.log(`${method} onnistui:`, data);
  } catch (err) {
    console.error(`${method} epäonnistui:`, err.message);
  }
}

const errorUrl = "https://reqres.in/api/unknown/23";

document.getElementById("getBtn").addEventListener("click", () => {
  makeRequest("GET", errorUrl);
});

document.getElementById("postBtn").addEventListener("click", () => {
  makeRequest("POST", errorUrl, { name: "test", job: "testaaja" });
});

document.getElementById("putBtn").addEventListener("click", () => {
  makeRequest("PUT", errorUrl, { name: "päivitetty", job: "dev" });
});

document.getElementById("deleteBtn").addEventListener("click", () => {
  makeRequest("DELETE", errorUrl);
});
