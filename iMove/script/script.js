function updateClock () {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0')
    const minute = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    const timeString = `${hours}:${minute}:${seconds}`
    document.getElementById("clock").innerText = timeString

}

updateClock()
setInterval(updateClock, 1000)
