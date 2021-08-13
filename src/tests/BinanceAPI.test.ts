import BinanceAPI from "../BinanceAPI";

test("BinanceAPI getSymbolPriceTicker returns valid data", (done) => {
  function callback(data: any) {
    try {
      expect(data.symbol).toBe("BTCGBP");
      expect(isNaN(parseInt(data.price, 10))).toBeFalsy();
      done();
    } catch (error) {
      done(error);
    }
  }

  const BinanceAPIGetter = new BinanceAPI();

  BinanceAPIGetter.getSymbolPriceTicker("BTCGBP").then(callback);
});
