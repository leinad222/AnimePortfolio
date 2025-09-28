// Example Anime Database
const animeDatabase = {
  "anime1": {
    title: "Anime Title 1",
    description: "This is a description of Anime 1. It includes story details, main characters, and background info.",
    poster: "poster1.jpg",
    episodes: [
      { number: 1, file: "episode1.mp4" },
      { number: 2, file: "episode2.mp4" },
      { number: 3, file: "episode3.mp4" }
    ]
  },
  "anime2": {
    title: "Anime Title 2",
    description: "This is a description of Anime 2. Another story with cool characters!",
    poster: "poster2.jpg",
    episodes: [
      { number: 1, file: "anime2_ep1.mp4" },
      { number: 2, file: "anime2_ep2.mp4" }
    ]
  }
};

// Helper: Get URL parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Render Anime Details Page
if (document.getElementById("animeTitle")) {
  const animeId = getQueryParam("id"); // e.g. anime_details.html?id=anime1
  const anime = animeDatabase
}
const toggleBtn = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("active",);
  });
  navbar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
