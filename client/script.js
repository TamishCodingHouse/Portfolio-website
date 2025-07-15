function toggleTheme() {
    alert("Dark Mode feature is currently unavailable ")
}


const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
    };

    try {
        const response = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        alert("Something went wrong.");
    }
});
