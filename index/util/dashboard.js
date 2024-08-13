const playerNumberEl = document.getElementById("player_numbers");
const marchandizeEl = document.getElementById("marchandize_number");
// players
async function fetchPlayers() {
  try {
    const response = await fetch(
      `http://localhost:4040/api/v1/mpesago/?q=`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch package data");
    }
    const data = await response.json();
    if (data.generalReport.length === 0) {
      playerNumberEl.textContent = 0;
    }
    playerNumberEl.textContent = data.generalReport.length;
  } catch (error) {
    console.error("Error fetching package data:", error);
  }
}

fetchPlayers();

// ,marchandize
