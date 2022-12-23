import {romanToInteger} from "../katas/kata_romanToInteger";

test("converts a roman number less than 10", () => {
  expect ( romanToInteger ("I")    ).toBe(1);
  expect ( romanToInteger ("III")  ).toBe(3);
  expect ( romanToInteger ("IV")   ).toBe(4);
  expect ( romanToInteger ("V")    ).toBe(5);
  expect ( romanToInteger ("IX")   ).toBe(9);
});

test("converts a roman number bigger than or equals to 10", () => {
  expect ( romanToInteger ("X")      ).toBe(10);
  expect ( romanToInteger ("XII")    ).toBe(12);
  expect ( romanToInteger ("XXVII")  ).toBe(27);
  expect ( romanToInteger ("XL")     ).toBe(40);
  expect ( romanToInteger ("L")      ).toBe(50);
  expect ( romanToInteger ("LVIII")  ).toBe(58);
});

test("converts a roman number bigger than or equals to 100", () => {
  expect ( romanToInteger ("X")      ).toBe(10);
  expect ( romanToInteger ("CD")     ).toBe(400);
  expect ( romanToInteger ("D")      ).toBe(500);
});

test("converts a roman number bigger than or equals to 1000", () => {
  expect ( romanToInteger ("M")       ).toBe(1000);
  expect ( romanToInteger ("MII")     ).toBe(1002);
  expect ( romanToInteger ("MCMXCIV") ).toBe(1994);
  expect ( romanToInteger ("MMI")     ).toBe(2001);
  expect ( romanToInteger ("MMM")     ).toBe(3000);
});

test("it should not be case sensitive", () => {
  expect ( romanToInteger ("m")       ).toBe(1000);
  expect ( romanToInteger ("mii")     ).toBe(1002);
  expect ( romanToInteger ("mcmxciv") ).toBe(1994);
  expect ( romanToInteger ("mmi")     ).toBe(2001);
  expect ( romanToInteger ("mmm")     ).toBe(3000);
});
