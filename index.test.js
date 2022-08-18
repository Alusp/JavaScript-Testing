//Arrange
const stringLength = require('./index');
const reverseString = require("./reverseString");
const Calculate = require("./calculate")
const firstCase = new Calculate(4, 2);
const secondCase = new Calculate(10, 6);
const capital = require("./upperCase");
const testCase = "alusine";
const testAnswer = "Alusine";


//Act
test('Cheks if number is not between 1 and 10', ()=> {
  expect(stringLength.str("Alusinejal")).toBeLessThanOrEqual(10);
  expect(stringLength.str("A")).toBeGreaterThanOrEqual(0);;
});

test("String to be Reverse (Hello)", () => {
  expect(reverseString("hello")).toEqual("olleh")
});

//Test for Calculation
describe ("Calculator Class", ()=> {
  
  test("Addition", ()=> {
    expect(firstCase.add()).toBe(6);
    expect(secondCase.add()).toBe(16);
  });

  it("substract", () => {
  expect(firstCase.subtract()).toBe(2);
  expect(secondCase.subtract()).toBe(4)
  });

  test("multiply", () => {
   expect(firstCase.multiply()).toBe(8);
   expect(secondCase.multiply()).toBe(60);
  });

  it("divide", () => {
    expect(firstCase.divide()).toBe(2);
    expect(secondCase.divide()).toBe(1.6666666666666667);
  })

});

test('Capitalize', ()=>{
  expect(capital(testCase)).toBe(testAnswer)
})



//ASSERT
