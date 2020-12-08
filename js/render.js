function render(message) {
  const data = message.data

  const temperature = data.sensors[0]
  const pressure = data.sensors[1]

  const time_ms = temperature.time * 1000
  const time = new Date(time_ms).toLocaleString()

  const html = `<div class="card">
  <div class="title">
    <span>Температура</span
    ><img
      width="40rem"
      height="40rem"
      src="./img/temperature.svg"
      alt="temperature"
    />
  </div>
  <div class="value">
    <span><strong>${temperature.value}°</strong><small>C</small></span>
  </div>
</div>
<div class="card">
  <div class="title">
    <span>Давление</span>
    <img
      width="40rem"
      height="40rem"
      src="./img/pressure.svg"
      alt="pressure"
    />
  </div>
  <div class="value">
    <span><strong>${pressure.value}</strong><small> mmHg</small></span>
  </div>
</div>
<div class="date"><span>Последний замер: ${time}</span></div>
`

  document.getElementById('root').innerHTML = html
}

function renderFault(message) {
  console.log(message)
  const status = message.status

  const html = `
<div class="date"><span>Ошибка: ${status}</span></div>
`

  document.getElementById('root').innerHTML = html
}
