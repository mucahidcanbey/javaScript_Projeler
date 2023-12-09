// 'hexInputContainer' Sayfadaki bir HTML öğesini seçiyoruz. 
const hexInputContainer = document.querySelector("#hexInputContainer")
// '#hexColorFrom' Sayfadaki bir HTML öğesini seçiyoruz. 
const hexForm = document.querySelector("#hexColorForm")
// 'addNew' Sayfadaki bir Button öğesi seçiyoruz. 
const addNew = document.querySelector("#addNew")


let counter = 1
// "addNew"  butonuna tıklayınca gerçekleşek aksiyon.
addNew.addEventListener("click", () => {
    console.log("click")
    
    counter += 1

    hexInputContainer.append(newHexColorInput(counter))
})

function newHexColorInput(itemCount) {

    // Yeni bir div öğesi oluşturuyoruz.
    const newDivElement = document.createElement('div')
    // Oluşturduğumuz div öğesine "col-sm" sınıfını ekliyoruz.
    newDivElement.classList.add('col-sm')
    // Oluşturduğumuz div öğesinin içine bir şeyler eklemek için, innerHTML özelliğini kullanıyoruz.
    newDivElement.innerHTML = `
<label for="colorInput-${itemCount}" class="form-label">Hex Color${itemCount}</label>
<input
id="colorInput-${itemCount}" 
type="text" 
minlength="6" maxlength="6" 
class="form-control"  
name="color-${itemCount}"
>
`
    return newDivElement
}

// Oluşturduğumuz div öğesini hexInputContainer'a ekliyoruz.

hexInputContainer.append( newHexColorInput(counter) )

let localStorageColors = localStorage.getItem("colors") ? JSON.parse(localStorage.getItem("colors")) : []

hexForm.addEventListener("submit", (event) => {
  event.preventDefault()

  let colors = []
  Array.from(event.target.elements).forEach(item => {
    if (item.type === "text") {
      colors.push(item.value)
    }
  })
  localStorageColors.push(colors)
  
  localStorage.setItem("colors", JSON.stringify(localStorageColors))
  hexForm.reset()
})