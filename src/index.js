document.addEventListener("DOMContentLoaded", function() {
    const dogBar = document.getElementById('dog-bar');

    // Fetch pup data from the server
    fetch('http://localhost:3000/pups')
    .then(response => response.json())
    .then(data => {
        // Loop through each pup and add a span with the pup's name to the dog bar
        data.forEach(pup => {
            const pupSpan = document.createElement('span');
            pupSpan.textContent = pup.name;
            pupSpan.addEventListener('click', function() {
                // Implement functionality to display individual pup information
                // For example: displayPupInfo(pup);
            });
            dogBar.appendChild(pupSpan);
        });
    })
    .catch(error => {
        console.error('Error fetching pup data:', error);
    });
});


