const target1 = document.getElementById('targetObject1') //background component
const target2 = document.getElementById('targetObject2') // txt component
const select = document.getElementById('selection')
const input = document.getElementById('inputValue')
function update() {
    const userSelect = select.options.selectedIndex

switch (userSelect){
    case 1 :
    target1.style.backgroundColor = input.value
    break
    case 2 :
    target2.style.color = input.value
    break
    case 3 :
    target1.style.fontSize = input.value + 'px'
    break
    case 4 :
    target1.style.fontFamily = input.value
    break
    case 5 :
    target1.style.width = input.value + 'px'
    break
    case 6 :
    target1.style.height = input.value + 'px'
    break
    default:
    break
}
}