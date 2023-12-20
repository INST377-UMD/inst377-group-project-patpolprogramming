async function getUsers() {
    console.log('Creating Customer')
    var host = window.location.origin;

    var test = await fetch(`${host}/customers`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json"
        }
    })
        .then((res) => res)
        .then(async res => {
            console.log(res)})
    }

window.onload = getUsers;