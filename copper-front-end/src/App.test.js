import { cryptoToUSD, sumUSD } from "../src/Handlers/cryptoToUSD";

describe("Crypto to USD Functions Testing", () => {

  it("checks the crypto TO USD Function", () => {
    expect(cryptoToUSD(2, 4)).toEqual("8.00");
    expect(cryptoToUSD(1.5, 2.52)).toEqual(("3.78"));
    expect(cryptoToUSD(4.5689, 9.3256)).toEqual("42.61");
  })

  it("checks the USD Summation Function", () => {
    expect(sumUSD([1, 2, 3, 4])).toEqual("10.00");
    expect(sumUSD([1.1, 2.25, 3.33, 4.44])).toEqual("11.12");
  })

})
