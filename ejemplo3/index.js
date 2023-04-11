const time = document.querySelector('#time')
const date = document.querySelector('#date')

// SIN LUXON
// const now = new Date()
// const hour = now.getHours()
// const minutes = now.getMinutes()
// const seconds = now.getSeconds()
// const fullTime = `${hour}:${minutes}:${seconds}`
// const todayDate = now.toLocaleString('es-AR', { dateStyle: 'short' })

// time.textContent = fullTime
// date.textContent = todayDate

// CON LUXON
const DateTime = luxon.DateTime
const dt = DateTime.now()
const rightNow = dt.toLocaleString(DateTime.TIME_SIMPLE)
const todayDate = dt.toLocaleString()

time.textContent = rightNow
date.textContent = todayDate
