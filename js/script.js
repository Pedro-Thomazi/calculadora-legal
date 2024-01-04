const buttons = document.querySelectorAll('button')
const display = document.querySelector('#display')
let visor = ''
let result = 0

display.innerHTML = result

for (let btn of buttons) {
  btn.addEventListener("click", () => {
    if (btn.innerText == 'C') {
      result = 0
      visor = ''
    }

    if (btn.innerText != '=' && btn.innerText != 'C') {
      visor += btn.innerText
    }

    // console.log(visor)
    if (visor == '') {
      display.innerHTML = '0'
    }
    else {
      display.innerHTML = visor
    }

    if (btn.innerText == '=') {
      const res = eval(visor)
      display.innerHTML = res
      visor = res
      result = res
      console.log(visor)
      console.log('Resultado: ' + res)
    }

  })
}