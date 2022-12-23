export function integerToRoman (number) {

  const map_roman = {
    M  : 1000,
    CM : 900,
    D  : 500,
    CD : 400,
    C  : 100,
    XC : 90,
    L  : 50,
    XL : 40,
    X  : 10,
    IX : 9,
    V  : 5,
    IV : 4,
    I  : 1,
    };

  let str = '';

  for (let i in map_roman) {
    let temp_val = map_roman[i];
    while (number >= temp_val) {
      str += i;
      number -= temp_val;
      }
    };
    
  return str;

};

 /*
console.log(  integerToRoman (  3      )   ); // "III"
console.log(  integerToRoman (  100    )   ); // "C"
console.log(  integerToRoman (  12     )   ); // "XII"
console.log(  integerToRoman (  58     )   ); // "LVIII"
console.log(  integerToRoman (  1994   )   ); // "MCMXCIV"
console.log(  integerToRoman (  27     )   ); // "XXVII"
console.log(  integerToRoman (  3000   )   ); // "MMM"
console.log(  integerToRoman (  1002   )   ); // "MII" 
console.log(  integerToRoman (  2001   )   ); // "MMI" 
console.log(  integerToRoman (  800    )   ); // "DCCC"
console.log(  integerToRoman (  700    )   ); // "DCC" 
console.log(  integerToRoman (  300    )   ); // "CCC"
*/