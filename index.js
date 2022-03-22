let length_password = 15
let spec_charac = 2
let maj_alph = 3
let min_alph = 3
let numbers = 3
let arr = [
    "!#$%&()*+,-./:;<=>?@[]^_`{|}~",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789"
]

function add_spec_charac()
{
    let text = ""
    for(let i = 0; i < spec_charac; i++)
    {
        let rand = Math.floor(Math.random() * arr[0].length)
        text += arr[0][rand]
    }
    return text;
}

function add_maj_alph()
{
    let text = ""
    for(let i = 0; i < maj_alph; i++)
    {
        let rand = Math.floor(Math.random() * arr[1].length)
        text += arr[1][rand]
    }
    return text;
}

function add_min_alph()
{
    let text = ""
    for(let i = 0; i < min_alph; i++)
    {
        let rand = Math.floor(Math.random() * arr[2].length)
        text += arr[2][rand]
    }
    return text;
}

function add_numbers()
{
    let text = ""
    for(let i = 0; i < numbers; i++)
    {
        let rand = Math.floor(Math.random() * arr[3].length)
        text += arr[3][rand]
    }
    return text;
}

function fill_random(size)
{
    let text = ""
    for(let i = 0; i < (length_password - size); i++)
    {
        let indice1 = Math.floor(Math.random() * 4)
        let indice2 = Math.floor(Math.random() * arr[indice1].length)
        text += arr[indice1][indice2]
    }
    return text
}

function shuffle(password)
{
    let arr = password.split('')
    for(let i = 0; i < password.length; i++)
    {
        let rand = Math.floor(Math.random() * password.length)
        let a = arr[i]
        arr[i] = arr[rand]
        arr[rand] = a
    }
    let text = arr.join('')
    return text
}

function generate_password()
{
    for(let i = 0; i < 4; i++)
    {
        let elem = document.getElementById("pass"+i)
        let password = ""
        password += add_spec_charac()
        password += add_maj_alph()
        password += add_min_alph()
        password += add_numbers()
        password = shuffle(password)
        password += fill_random(password.length)
        elem.textContent = password
    }
}
