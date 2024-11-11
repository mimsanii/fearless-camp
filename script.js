document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const church = document.getElementById('church').value;
    const payment = document.getElementById('payment').value;

    alert(`Thank you, ${name}! You have registered for Fearless Camp using ${payment}.`);
    document.getElementById('registration-form').reset();
});

// Photo Modal functionality
const modal = document.getElementById("photo-modal");
const modalImage = document.getElementById("modal-image");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImage.src = this.src;
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
