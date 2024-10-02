let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const dateBox = document.getElementById('dateBox');
const dropdownMenu = document.getElementById('dropdownMenu');
const sheetId = '1hCAf8aWB1rVJXHHGjYGB5Vn3EsHjgxPJKWwCrTGMr0I'; // Replace with your actual sheet ID
const apiKey = 'AIzaSyBrvyxgrjxJnO6X58mILuWJxq7UOwXnY80'; // Replace with your actual API key

// Function to fetch data from Google Sheets
async function fetchPrizes() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`; // Adjust "Sheet1" to your actual sheet name

    try {
        const response = await fetch(url);
        const outpot = await response.json();
        const data = outpot.values;
        console.log("Here's the data: ", data)

        if (data && data.length > 0) {
            
            // Ads-Images
            document.getElementById('ad-image1').src = data[1][11]; 
            document.getElementById('ad-image2').src = data[2][11]; 
            document.getElementById('ad-image3').src = data[3][11]; 

            // Draw-Date
            document.getElementById('draw-date').innerText = data[1][1];

            // 1st, 2nd, and 3rd prizes
            document.getElementById('first-prize').innerText = data[1][12]; 
            document.getElementById('second-prize').innerText = data[1][13]; 
            document.getElementById('third-prize').innerText = data[1][14]; 

            // 10-jackpot prizes
            document.getElementById('jp-first-prize').innerText = data[1][15]; 
            document.getElementById('jp-second-prize').innerText = data[2][15]; 
            document.getElementById('jp-third-prize').innerText = data[3][15]; 
            document.getElementById('jp-fourth-prize').innerText = data[4][15]; 
            document.getElementById('jp-fifth-prize').innerText = data[5][15]; 
            document.getElementById('jp-sixth-prize').innerText = data[6][15]; 
            document.getElementById('jp-seventh-prize').innerText = data[7][15]; 
            document.getElementById('jp-eighth-prize').innerText = data[8][15]; 
            document.getElementById('jp-nineth-prize').innerText = data[9][15]; 
            document.getElementById('jp-tenth-prize').innerText = data[10][15]; 

            // 10-lucky Prizes
            document.getElementById('ly-first-prize').innerText = data[1][16]; 
            document.getElementById('ly-second-prize').innerText = data[2][16]; 
            document.getElementById('ly-third-prize').innerText = data[3][16]; 
            document.getElementById('ly-fourth-prize').innerText = data[4][16]; 
            document.getElementById('ly-fifth-prize').innerText = data[5][16]; 
            document.getElementById('ly-sixth-prize').innerText = data[6][16]; 
            document.getElementById('ly-seventh-prize').innerText = data[7][16]; 
            document.getElementById('ly-eighth-prize').innerText = data[8][16]; 
            document.getElementById('ly-nineth-prize').innerText = data[9][16]; 
            document.getElementById('ly-tenth-prize').innerText = data[10][16]; 
            
        }
    } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
    }
}

// Call the fetch function when the page loads
window.onload = fetchPrizes;
// window.onload = () => {
//     fetchPrizes();
//     setInterval(fetchPrizes, 10000)
// };

function showNextSlide() {
    // Update the current slide index
    currentSlide = (currentSlide + 1) % totalSlides;

    // Calculate the transform value
    const translateValue = -currentSlide * 100 + '%';

    // Move the slides container
    document.querySelector('.slides').style.transform = `translateX(${translateValue})`;
}

// Automatically switch slides every 5 seconds
setInterval(showNextSlide, 3000);


dateBox.addEventListener('click', () => {
    // Toggle the visibility of the dropdown
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!dateBox.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});