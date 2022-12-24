export function romanToInteger (str) {

  let s = str.toUpperCase();

  if (s.length === 0) return 0;
  else if (s.length >1) 
  {
    if (s.substring(0,2) === 'IV') return 4   + romanToInteger (s.substring(2));
    if (s.substring(0,2) === 'IX') return 9   + romanToInteger (s.substring(2));
    if (s.substring(0,2) === 'XL') return 40  + romanToInteger (s.substring(2));
    if (s.substring(0,2) === 'XC') return 90  + romanToInteger (s.substring(2));
    if (s.substring(0,2) === 'CD') return 400 + romanToInteger (s.substring(2));
    if (s.substring(0,2) === 'CM') return 900 + romanToInteger (s.substring(2));    
  };

  if (s.charAt(0) === 'I') return 1     + romanToInteger (s.substring(1));
  if (s.charAt(0) === 'V') return 5     + romanToInteger (s.substring(1));
  if (s.charAt(0) === 'X') return 10    + romanToInteger (s.substring(1));
  if (s.charAt(0) === 'L') return 50    + romanToInteger (s.substring(1));
  if (s.charAt(0) === 'C') return 100   + romanToInteger (s.substring(1));
  if (s.charAt(0) === 'D') return 500   + romanToInteger (s.substring(1));
  if (s.charAt(0) === 'M') return 1000  + romanToInteger (s.substring(1));
};

/*
console.log(  romanToInteger(  "III"      )      ); // 3
console.log(  romanToInteger(  "C"        )      ); // 100
console.log(  romanToInteger(  "XII"      )      ); // 12
console.log(  romanToInteger(  "LVIII"    )      ); // 58
console.log(  romanToInteger(  "MCMXCIV"  )      ); // 1994
console.log(  romanToInteger(  "XXVII"    )      ); // 27
console.log(  romanToInteger(  "MMM"      )      ); // 3000
console.log(  romanToInteger(  "MII"      )      ); // 1002
console.log(  romanToInteger(  "MMI"      )      ); // 2001
console.log(  romanToInteger(  "DCCC"     )      ); // 800
console.log(  romanToInteger(  "DCC"      )      ); // 700
console.log(  romanToInteger(  "CCC"      )      ); // 300
*/