function clicar () {
    var num = document.getElementById('txtn')
    var res = document.getElementById('lista')
    var opcao = document.getElementById('opcao')
    var n = Number(num.value)

    if (num.value.length == 0) {
        window.alert('Digite algum número')

    } else {
        c = 1
        res.innerHTML = ''
        while ( c <= 10){
            
            var item = document.createElement('option')
            item.innerHTML = `${n} x ${c} = ${n*c}`
            c++
            res.appendChild(item)
        }
    }
}