document.addEventListener('DOMContentLoaded', function() {
    console.log('Personal site loaded');
    // Example: Add interactivity for booking page
    const bookingButton = document.querySelector('#booking-submit');
    if (bookingButton) {
        bookingButton.addEventListener('click', () => {
            alert('Booking request submitted!');
        });
    }
});