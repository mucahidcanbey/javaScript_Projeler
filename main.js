// 'hexInputContainer' Sayfadaki bir HTML öğesini seçiyoruz. 
const hexInputContainer = document.querySelector("#hexInputContainer")
// '#hexColorFrom' Sayfadaki bir HTML öğesini seçiyoruz. 
const hexFrom = document.querySelector("#hexColorFrom")
// 'addNew' Sayfadaki bir Button öğesi seçiyoruz. 
const addNew = document.querySelector("#addNew")

// Sayacı başlat
let counter = 1

// "addNew"  butonuna tıklayınca gerçekleşek aksiyon.
addNew.addEventListener("click", () => {
    console.log("click")
    // Sayacı artır
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
hexInputContainer.append(newHexColorInput(counter))


hexFrom.addEventListener("submit", (event) => {

})