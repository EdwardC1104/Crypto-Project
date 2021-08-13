import ApiRequest from "../ApiRequest";

test("ApiRequest class gets data", (done) => {
  function callback(res: any) {
    try {
      const data = res.data;
      expect(data.symbol).toBe("BTCGBP");
      expect(isNaN(parseInt(data.price, 10))).toBeFalsy();
      done();
    } catch (error) {
      done(error);
    }
  }

  const ApiRequester = new ApiRequest("https://api.binance.com");

  ApiRequester.get("/api/v3/ticker/price", { symbol: "BTCGBP" }).then(callback);
});
