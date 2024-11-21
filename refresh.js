// Function to reload the page
function reloadPage() {
    location.reload();
}

// Auto-refresh the data every 10 minutes
setInterval(reloadPage, 600000); // 600000 milliseconds = 10 minutes

// Countdown timer for next refresh
function updateCountdownTimer() {
    const currentTime = new Date();
    const nextRefreshTime = new Date(currentTime.getTime() + 600000); // 10 minutes from now
    let timeDiff = Math.floor((nextRefreshTime - currentTime) / 1000); // in seconds

    const minutes = Math.floor(timeDiff / 60).toString().padStart(2, '0');
    const seconds = (timeDiff % 60).toString().padStart(2, '0');

    document.getElementById('countdownTimer').textContent = `Next refresh in: ${minutes}:${seconds}`;

    // Decrement time difference every second
    setInterval(function() {
        timeDiff--;
        const minutes = Math.floor(timeDiff / 60).toString().padStart(2, '0');
        const seconds = (timeDiff % 60).toString().padStart(2, '0');
        document.getElementById('countdownTimer').textContent = `Next refresh in: ${minutes}:${seconds}`;
    }, 1000);
}

// Update countdown timer
updateCountdownTimer();
