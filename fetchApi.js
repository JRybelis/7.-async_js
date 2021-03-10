fetch('todos/simB').then((response) =>{
    console.log('resolved', response);
    return response.json(); // a promise to return parsed data.
}).then(data => {
    console.log(data);
}).catch((error) => {
    console.log('rejected', error);
});

export {fetch}