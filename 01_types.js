//7 types of data types:
//null, undefined, boolean, number, string, object, symbol
console.log( typeof 0);
console.log( typeof true);
console.log( typeof 'js'); // "", '', ``
console.log( typeof undefined);
console.log( typeof {});
console.log( typeof Symbol('js') );
console.log( typeof null);
console.log( typeof function(){});
console.log( typeof NaN);

//Type conversion
let language = 'JS';
if(language){ // language === true
    console.log('the best language is : ', language);
}
//false : '', 0, null, undefined, NaN, false
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));
//true : {}, []
console.log(Boolean({}));
console.log(Boolean([]));

//Strings and Math