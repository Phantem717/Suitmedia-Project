document.getElementById('PageDD').addEventListener('change', function () {
    const selectedValue = this.value; // Get the selected value
    const totalItems = 100; // Total number of items (you can adjust this as needed)
    const showText = document.getElementById('ShowText');

    // Update the "Showing" text based on the dropdown value
    const endValue = Math.min(selectedValue, totalItems); // Ensure end doesn't exceed total
    showText.textContent = `Showing 1 - ${endValue} of ${totalItems}`;
});