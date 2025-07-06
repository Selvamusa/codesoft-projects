<script>
// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Create Back to Top button
const backToTop = document.createElement("button");
backToTop.textContent = "↑ Top";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

// Style Back to Top button
Object.assign(backToTop.style, {
  position: "fixed",
  bottom: "30px",
  right: "30px",
  padding: "10px 15px",
  fontSize: "16px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#0077cc",
  color: "#fff",
  cursor: "pointer",
  display: "none",
  zIndex: "1000"
});

// Show/hide button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Scroll to top on click
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>
