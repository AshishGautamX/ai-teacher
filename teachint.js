document.getElementById("createClassBtn").addEventListener("click", function() {
    document.getElementById("classForm").classList.remove("hidden");
});

document.getElementById("generateLinkBtn").addEventListener("click", function() {
    const className = document.getElementById("className").value.trim();
    if (className) {
        const classLink = `https://ai-teaching.com/class/${btoa(className)}`;
        document.getElementById("classLink").textContent = classLink;
        document.getElementById("classLinkContainer").classList.remove("hidden");
    } else {
        alert("Please enter a class name.");
    }
});