function launchDork() {
    const target = document.getElementById('target').value;
    const dorkPattern = document.getElementById('dorkType').value;

    if (!target) {
        alert("Please enter a target domain!");
        return;
    }

    // Replace TARGET placeholder with user input
    const finalQuery = dorkPattern.replace("TARGET", target);

    // Open Google search with the dork query
    window.open(`www.google.com{encodeURIComponent(finalQuery)}`, '_blank');
}
