//asynchronous in js
const first = () => console.log('First');
const second = () => console.log('Second');
const third = () => console.log('Third');

first();
setTimeout(second, 0);//call stack -event queue
third();

