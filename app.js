const trian = document.getElementById('triangle')
console.log(trian)

function desaparecer() {
    document.getElementById('triangle').style.opacity = "0"
    document.getElementById('square').style.opacity = "0"
    document.getElementById('circle').style.opacity = "0"
}

function reset() {
    document.getElementById('triangle').style.opacity = "1"
    document.getElementById('square').style.opacity = "1"
    document.getElementById('circle').style.opacity = "1"
}


function app() {}

app()