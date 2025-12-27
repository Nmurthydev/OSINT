//function launchDork() {
   // const target = document.getElementById('target').value;
   // const dorkPattern = document.getElementById('dorkType').value;

   // if (!target) {
       // alert("Please enter a target domain!");
        //return;
   // }

    // Replace TARGET placeholder with user input
    //const finalQuery = dorkPattern.replace("TARGET", target);

    // Open Google search with the dork query
  //  window.open(`www.google.com{encodeURIComponent(finalQuery)}`, '_blank');
//}
function launchDork() {
    const target = document.getElementById('target').value;
    const dorkPattern = document.getElementById('dorkType').value;
    
    if (!target) {
        alert("Please enter a target domain!");
        return;
    }

    // This must include the full www.google.com
    const finalQuery = dorkPattern.replace("TARGET", target);
    const fullUrl = "www.google.com" + encodeURIComponent(finalQuery);
    
    window.open(fullUrl, '_blank');
}
