// script.js

// Interactive functionality for trading platform

// Function to retrieve current price of a cryptocurrency
async function getCurrentPrice(crypto) {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`);
        const data = await response.json();
        return data[crypto].usd;
    } catch (error) {
        console.error('Error fetching current price:', error);
    }
}

// Function to display price on the webpage
function displayPrice(price) {
    const priceElement = document.getElementById('crypto-price');
    priceElement.innerText = `Current Price: $${price}`;
}

// Function to update price every minute
function updatePrice(crypto) {
    setInterval(async () => {
        const price = await getCurrentPrice(crypto);
        displayPrice(price);
    }, 60000);
}

// Initialize the script for a specific cryptocurrency
updatePrice('bitcoin'); // You can change 'bitcoin' to any other cryptocurrency
