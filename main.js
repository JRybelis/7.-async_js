const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    //reacting to ready state change of the XMLHttp request:
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);            
        } else if (request.readyState === 4) {
            callback('Could not fetch the data', undefined);
        }
    });

    request.open('GET', resource);
    request.send();
};

//callback function:
getTodos('todos/simA.json', (error, data) => {
    // if (error) {
    //     console.log(error);
    // } else {
    //     console.log(data);
    // }
    console.log(data);
    getTodos('todos/simB.json', (error, data) => {
        console.log(data);
        getTodos('todos/simC.json', (error, data) => {
            console.log(data);
        });
    });
});