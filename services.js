function service(){
    const serviceText = '_services'
    const servTarg = document.querySelector('.animation-text-servvices')
    let i = 0;


    function printServ(){
        if (i < serviceText.length){
            servTarg.innerHTML += serviceText.charAt(i)
            i++
            setTimeout (printServ, 200)
        }
    }
    printServ()
}

service();