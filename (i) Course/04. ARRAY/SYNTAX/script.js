let start = ['January', 'July', 'March', 'August'];

/* METHOD-1
start.shift();
start.shift();
start.unshift('June');
start.unshift('July'); */

/* METHOD-2
start.splice(0,2,'July', 'June'); */

/* OUTPUT-> 
['July', 'June', 'March', 'August'] */