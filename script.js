function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')
  
  //pegar a tag img
  const img =document.querySelector("#profile img")

  //substituir a imagem 
  if(html.classList.contains('light')){
    //se tiver ligth mode, adicionar a imagem light
    //se tiver ligth mode, adicionar a descrição light
   img.setAttribute("src", "./assets/avatar-light.png")
   img.setAttribute("alt", "Foto de Viviane Mayumi Ogusko Saitou sorrindo, com cabelos castanhos escuros longos, descendência oriental, usando blusa preta, fundo cinza claro. ")
  } else {
    //se tiver sem light mode, manter a imagem normal
    //se tiver sem light mode, manter a descrição normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Viviane Mayumi Ogusko Saitou sorrindo, com cabelos castanhos escuros longos, descendência oriental, fundo amarelo clarinho. ")
  }

}