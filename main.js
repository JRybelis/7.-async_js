const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    //reacting to ready state change of the XMLHttp request:
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);            
        } else if (request.readyState === 4) {
            callback('Could not fetch the data', undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
};

//callback function:
getTodos((error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});