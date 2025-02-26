const nom = document.querySelector("#txtbuscar")
const buttonx = document.querySelector("#buttonx")
const nameone = document.querySelector("#nameone")
const nametwo = document.querySelector("#nametwo")

const divnome = () =>{
 const nomedig = nom.value
 console.log(nomedig)

 nameone.textContent = nomedig
 nametwo.textContent = nomedig
}

buttonx.addEventListener("click",()=>{
   divnome()
})