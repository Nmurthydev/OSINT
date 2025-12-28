function launchDork() {
    // 1. Get the domain the user typed (e.g., example.com)
    const target = document.getElementById('target').value.trim();
    
    // 2. Get the dork pattern from the dropdown (e.g., site:TARGET inurl:admin)
    const dorkTemplate = document.getElementById('dorkType').value;

    if (!target) {
        alert("Please enter a target domain first!");
        return;
    }

    // 3. Replace the word "TARGET" in the dork with the actual domain
    const finalQuery = dorkTemplate.replace("TARGET", target);

    // 4. Create the final URL with HTTPS and the search path
    // The "https://" prevents the 404 error
    const fullUrl = "" + encodeURIComponent(finalQuery);

    // 5. Open in a new tab
    window.open(fullUrl, '_blank');
}
