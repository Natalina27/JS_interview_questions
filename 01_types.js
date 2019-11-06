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
console.log('===================');


//Strings and Math
console.log(1 + '2'); // 12
console.log('' + 1 + 0); // 10
console.log('' - 1 + 2); //1
console.log('3' * '8'); //24
console.log(4 + 10 + 'px'); //14px
console.log('px' + 5 + 10); //px510
console.log('42' - 2); //40
console.log( '42px' - 2);//NaN
console.log(null + 2); //2
console.log(undefined + 42); //NaN
console.log('====================');

// == vs === (== with type conversion)
console.log( 2 == '2');
console.log(2 === '2');
console.log(undefined == null);
console.log(undefined === null);
console.log('0' == false);
console.log('0' == 0);
console.log(0 == 0);
console.log('================');





