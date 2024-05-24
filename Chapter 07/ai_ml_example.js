
async function processImage(event) {
    const file = event.target.files[0];
    const base64 = await toBase64(file);
    fetchSimilarProducts(base64);
}

async function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

async function fetchSimilarProducts(imageData) {
    // Assuming you have an endpoint set up to handle the API request
    const response = await fetch('/find-similar', {
        method: 'POST',
        body: JSON.stringify({ image: imageData }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const products = await response.json();
    displayResults(products);
}

function displayResults(products) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results
    products.forEach(product => {
        // Display each product as a new div, etc.
        const div = document.createElement('div');
        div.textContent = product.name; // Customize as needed
        resultsDiv.appendChild(div);
    });
}
