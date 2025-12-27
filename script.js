function performSearch() {
    // 1. Get user input
    const query = document.getElementById('query').value.trim();
    
    // 2. Validate input
    if (!query) {
        alert("Please enter a search query!");
        return;
    }

    // 3. Build the Absolute URL (fixes the 404 error)
    const fullUrl = "www.google.com" + encodeURIComponent(query);
    
    // 4. Perform the search in a new tab
    console.log("Performing search for: " + query);
    window.open(fullUrl, '_blank');
}
