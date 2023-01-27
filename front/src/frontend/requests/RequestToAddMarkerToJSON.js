export function PostDataMarkerJSON(jsonData) {
    fetch('http://localhost:5000/', { //МЕНЯТЬ АДРЕС ТУТ
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
}

export function PostUploadedFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);

    return fetch('http://localhost:5000/uploadfile', { //МЕНЯТЬ АДРЕС ТУТ
        method: "POST",
        // headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json',
        // },
        headers: {
            'content-type': 'multipart/form-data',
        },
        body: formData,
    })
}

export function GetDataMarkerJSON(){
    return fetch('http://localhost:5000/data', {
        method: "GET",
        headers: {

            Accept: 'application/json',
            'Content-Type': 'application/json',
            // 'Cache-Control': 'no-cache, no-store, must-revalidate',
            Pragma: 'no-store',
            Cache: 'no-store',
            'Cache-Control': 'no-store'
        }
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