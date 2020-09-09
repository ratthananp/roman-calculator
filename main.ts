// https://stackoverflow.com/questions/28777219/basic-program-to-convert-integer-to-roman-numerals

export function arabicToRoman(num: number) {
    var roman = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    var result = ''
  
    for (var i in roman) {
      while (num >= roman[i]) {
        result += i
        num -= roman[i]
      }
    }
    return result
  }