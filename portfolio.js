function portfolio(){
    const portText = '_portfolio'
    let portfolio = document.querySelector('.animation-text-portfolio')
    let i=0;

    function print (){
        if(i < portText.length){
            portfolio.innerHTML += portText.charAt(i)
            i++;
            setTimeout(print , 200)
        }
    }
    print()
}

portfolio()