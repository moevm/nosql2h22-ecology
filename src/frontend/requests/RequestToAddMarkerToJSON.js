export function PostDataMarkerJSON(jsonData) {
    fetch('http://localhost:5000/', { //МЕНЯТЬ АДРЕС ТУТ

        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
    })
}

export function TestRequest() {
    fetch('http://localhost:5000/', {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            role: "Заказчик",
            UserName: "Postks",
            PhoneNumber: "+16774521547",
            Password: "ssss",
            PasswordConfirm: "ssss*",
        }),
    })
        .then(function (response) {
            return response.json();
        })
}