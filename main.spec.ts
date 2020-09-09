
import { arabicToRoman } from "./main";
import 'mocha';
import { expect } from 'chai';  // Using Expect style


describe('105', () => {
    const answer = arabicToRoman(105);
    console.log(answer)
    expect(answer).equal('CV');
  });

describe('620', () => {
    const answer = arabicToRoman(620);
    expect(answer).equal('DCXX');
});

describe('3,560', () => {
    const answer = arabicToRoman(3560);
    expect(answer).equal('MMMDLX');
});