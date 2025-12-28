function launchDork() {
    // 1. Get user inputs
    const target = document.getElementById('target').value.trim();
    const dorkTemplate = document.getElementById('dorkType').value;

    // 2. Validate input
    if (!target) {
        alert("Please enter a target domain!");
        return;
    }

    // 3. Build the actual search query
    // Replaces the placeholder 'TARGET' in your dropdown values with the actual domain
    const finalQuery = dorkTemplate.replace("TARGET", target);

    // 4. Construct valid Google Search URL
    // Must include https:// and the /search?q= path
    const fullUrl = "" + encodeURIComponent(finalQuery);

    // 5. Open in a new tab
    console.log("Executing recon for: " + target);
    window.open(fullUrl, '_blank');
}
