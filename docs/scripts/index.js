fetch('me.json').then(function (response) {
    return response.json();
}).then(function (obj) {
    console.log(obj);
}).catch(function (error) {
    console.error('Something went wrong with retrieving me!');
    console.error(error);
});