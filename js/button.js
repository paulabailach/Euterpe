document.getElementById("ofertas-button").addEventListener("click", function() {
    const sidebar = document.getElementById("sidebar");
    
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }
});
