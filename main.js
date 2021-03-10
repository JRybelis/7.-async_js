import {getTodosA} from './asyncAwait.js';

const getTodos = (resource) => {
    
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        //reacting to ready state change of the XMLHttp request:
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Could not fetch the data');
            }
        });

        request.open('GET', resource);
        request.send();
    });
};

getTodos('todos/simA.json').then(data => {
    console.log('Promise resolved: ', data);
    return getTodos('todos/simB.json');
}).then(data =>{
    console.log('Second promise resolved: ', data);
    return getTodos('todos/simC.json');
}).then(data =>{
    console.log('Third promise resolved: ', data);
}).catch(errror => {
    console.log('promise rejected: ', errror);
});

//async & await:

getTodosA()
    .then(data => console.log('Resolved: ', data));