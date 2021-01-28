const countDate = new Date('jan 1, 2022 00:00:00').getTime()

function newYear() {
  const now = new Date().getTime()
  blank = countDate - now

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  const dDate = Math.floor(blank / day)
  const hDate = Math.floor((blank % day) / hour)
  const mDate = Math.floor((blank % hour) / minute)
  const sDate = Math.floor((blank % minute) / second)

  document.getElementById('day').innerText = dDate
  document.getElementById('hour').innerText = hDate
  document.getElementById('minute').innerText = mDate
  document.getElementById('second').innerText = sDate
}

setInterval(() => {
  newYear()
}, 1000)
