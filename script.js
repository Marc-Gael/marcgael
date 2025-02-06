document.getElementById("showMessage").addEventListener("click", function() {
    const message = document.getElementById("message");
    message.style.display = "block";
    this.textContent = "Message affiché 🎉";
});