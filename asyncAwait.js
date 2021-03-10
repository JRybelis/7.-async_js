const getTodosA = async () => {
    const response = await fetch('todos/simC.json');
    console.log(response); // returns a response object, not the data itself
    if(response.status !== 200) {
        throw new Error('Unable to fetch the data.');
    }
    const data = await response.json(); //returns a promise and the value of the resolved promise is stored in data variable. 
    return data;
};

export {getTodosA}

