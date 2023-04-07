function animation (){
    let animation = document.querySelector('.animation-text')
    const text = '_front end developer'
    let i = 0;
  
  
    function anim(){
      if(i < text.length){
        animation.innerHTML += text.charAt(i)
        i++;
        setTimeout(anim, 200)
      }
    }
    anim();
  }
  
  animation();
  