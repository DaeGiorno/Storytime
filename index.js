function goToPage(pageNumber) {
    // Hide the current page
    document.querySelector(".page.active").classList.remove("active");
    
    // Show the selected page
    document.getElementById(`page${pageNumber}`).classList.add("active");
}
