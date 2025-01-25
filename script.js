// Function to display the current time
function updateTime() {
    const timeDisplay = document.getElementById('time-display');
    const greeting = document.getElementById('greeting');
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;
    timeDisplay.innerHTML = timeString;

    // Add greeting based on the time of day
    if (hours < 12) {
        greeting.innerHTML = 'Good Morning!';
    } else if (hours < 18) {
        greeting.innerHTML = 'Good Afternoon!';
    } else {
        greeting.innerHTML = 'Good Evening!';
    }

    // Change background color based on time
    document.body.className = hours >= 6 && hours < 18 ? 'day' : 'night';
}

// Function to display time in different time zones
function showTimeZones() {
    const container = document.getElementById('timezone-container');
    container.classList.toggle('active');
    if (container.classList.contains('active')) {
        container.innerHTML = '';

        const timezones = [
            { name: "New York", offset: -5 },
            { name: "London", offset: 0 },
            { name: "Tokyo", offset: 9 },
            { name: "Sydney", offset: 11 }
        ];

        timezones.forEach(tz => {
            const date = new Date();
            date.setHours(date.getHours() + tz.offset);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const time = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
            const timezoneElement = document.createElement('div');
            timezoneElement.innerHTML = `${tz.name}: ${time}`;
            container.appendChild(timezoneElement);
        });
    }
}

// Function to change the background image randomly
function changeBackgroundImage() {
    const backgrounds = ['bg1', 'bg2', 'bg3', 'bg4'];
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.classList.remove('bg1', 'bg2', 'bg3', 'bg4');
    document.body.classList.add(randomBackground);
}

// Initialize the clock and update every second
setInterval(updateTime, 1000);

// Show time zones on button click
document.getElementById('show-timezone').addEventListener('click', showTimeZones);

// Change the background image randomly when the button is clicked
document.getElementById('change-theme').addEventListener('click', function () {
    changeBackgroundImage();
});
