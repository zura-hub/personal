function skills() {
    const skillHtml = document.querySelector('.animation-text-skills')
    const skillText = '_skills'
    let i = 0;

    function scripting() {
        if (i < skillText.length) {
            skillHtml.innerHTML += skillText.charAt(i)
            i++
            setTimeout(scripting, 200)
        }
    }
    scripting();
}

skills();

function htmlBox() {
    const htmlBox = document.querySelector('.html-box')
    const htmlText = '_HTML'
    let i = 0;

    function htmlScripting() {
        if (i < htmlText.length) {
            htmlBox.innerHTML += htmlText.charAt(i)
            i++
            htmlBox.style.backgroundColor = '#807fd091'
            setTimeout(htmlScripting, 200)
        }
    }
    htmlScripting()
}
htmlBox()

function cssBox() {
    const cssBox = document.querySelector('.css-box')
    const cssText = '_CSS'
    let i = 0;

    function cssScripting() {
        if (i < cssText.length) {
            cssBox.innerHTML += cssText.charAt(i)
            i++
            cssBox.style.backgroundColor = '#e6db7487'
            setTimeout(cssScripting, 200)
        }
    }
    cssScripting()
}

cssBox()


function jsBox() {
    const jsBox = document.querySelector('.js-box')
    const jsText = '_JavaScript'
    let i = 0;

    function jsScripting() {
        if (i < jsText.length) {
            jsBox.innerHTML += jsText.charAt(i)
            i++
            jsBox.style.backgroundColor = '#2fccefa8'
            setTimeout(jsScripting, 200)
        }
    }
    jsScripting()
}
jsBox()


function reactBox() {
    const reactBox = document.querySelector('.react-box')
    const reactText = '_React'
    let i = 0;

    function reactScripting() {
        if (i < reactText.length) {
            reactBox.innerHTML += reactText.charAt(i)
            i++
            reactBox.style.backgroundColor = '#807fd0aa'
            setTimeout(reactScripting, 200)
        }
    }
    reactScripting()
}
reactBox()

function pythonBox() {
    const pythonBox = document.querySelector('.python-box')
    const pythonText = '_Python'
    let i = 0;

    function pyScrtipting() {
        if (i < pythonText.length) {
            pythonBox.innerHTML += pythonText.charAt(i)
            i++
            pythonBox.style.backgroundColor = '#e6db7437'
            setTimeout(pyScrtipting, 200)
        }
    }
    pyScrtipting()
}

pythonBox()