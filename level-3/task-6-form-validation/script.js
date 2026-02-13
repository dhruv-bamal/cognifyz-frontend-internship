// --- Task 4 (background color) ---
const bgBtn = document.getElementById("bgBtn");
const colors = ["#f3f6ff", "#fff3e0", "#e8f5e9", "#fce4ec", "#ede7f6"];
let i = 0;

if (bgBtn) {
  bgBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
  });
}

// --- Task 5 (API integration) ---
const loadBtn = document.getElementById("loadPostsBtn");
const postsDiv = document.getElementById("posts");
const statusDiv = document.getElementById("status");

async function loadPosts() {
  statusDiv.textContent = "Loading posts...";
  postsDiv.innerHTML = "";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    if (!res.ok) throw new Error("Request failed: " + res.status);

    const data = await res.json();

    statusDiv.textContent = "Loaded successfully ✅";

    data.forEach((post) => {
      const card = document.createElement("div");
      card.className = "post";

      card.innerHTML = `
        <h3>${post.id}. ${post.title}</h3>
        <p>${post.body}</p>
      `;

      postsDiv.appendChild(card);
    });
  } catch (err) {
    statusDiv.textContent = "Error loading posts ❌";
    postsDiv.innerHTML = `<p>${err.message}</p>`;
  }
}

if (loadBtn) {
  loadBtn.addEventListener("click", loadPosts);
}

// --- Task 6: Form validation ---
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      formStatus.textContent = "Please fill all fields ❌";
      formStatus.style.color = "red";
      return;
    }

    if (!email.includes("@")) {
      formStatus.textContent = "Please enter a valid email ❌";
      formStatus.style.color = "red";
      return;
    }

    formStatus.textContent = "Form submitted successfully ✅";
    formStatus.style.color = "green";

    form.reset();
  });
}