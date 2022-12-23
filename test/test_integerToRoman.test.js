import {integerToRoman } from "../katas/kata_integerToRoman";

test("converts an integer number less than 10", () => {
  expect ( integerToRoman ( 1 )   ).toBe("I");
  expect ( integerToRoman ( 3 )   ).toBe("III");
  expect ( integerToRoman ( 4 )   ).toBe("IV");
  expect ( integerToRoman ( 5 )   ).toBe("V");
  expect ( integerToRoman ( 9 )   ).toBe("IX");
});

test("converts a roman number bigger than or equals to 10", () => {
  expect ( integerToRoman  (10)  ).toBe("X");
  expect ( integerToRoman  (12)  ).toBe("XII");
  expect ( integerToRoman  (27)  ).toBe("XXVII");
  expect ( integerToRoman  (40)  ).toBe("XL");
  expect ( integerToRoman  (50)  ).toBe("L");
  expect ( integerToRoman  (58)  ).toBe("LVIII");
});

test("converts a roman number bigger than or equals to 100", () => {
  expect ( integerToRoman (10)   ).toBe("X");
  expect ( integerToRoman (400)  ).toBe("CD");
  expect ( integerToRoman (500)  ).toBe("D");
});

test("converts a roman number bigger than or equals to 1000", () => {
  expect ( integerToRoman (1000)      ).toBe("M");
  expect ( integerToRoman (1002)      ).toBe("MII");
  expect ( integerToRoman (1994)      ).toBe("MCMXCIV");
  expect ( integerToRoman (2001)      ).toBe("MMI");
  expect ( integerToRoman (3000)      ).toBe("MMM");
});
