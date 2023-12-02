// Sayfadaki bir HTML öğesini seçiyoruz.
const hexInputContainer = document.querySelector("#hexInputContainer")

// Yeni bir div öğesi oluşturuyoruz.
const newDivElement = document.createElement('div')

// Oluşturduğumuz div öğesine "col-sm" sınıfını ekliyoruz.
newDivElement.classList.add('col-sm')

// Oluşturduğumuz div öğesinin içine bir şeyler eklemek için, innerHTML özelliğini kullanıyoruz.
newDivElement.innerHTML = `
<label for="colorInput" class="form-label">Hex Color</label>
<input type="text" 
minlength="6" maxlength="6" 
class="form-control"  
name="color1"
>
`
// Oluşturduğumuz div öğesini hexInputContainer'a ekliyoruz.
hexInputContainer.append(newDivElement)
