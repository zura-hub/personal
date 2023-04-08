function ebout(){
  const txt = '_about me..' 
  let targ = document.querySelector('.animation-text-ebout')
  let i = 0;

  function letter(){
    if (i < txt.length){
      targ.innerHTML += txt.charAt(i)
      i++;
      setTimeout(letter , 200)
    }
  }
  letter()
}

ebout()