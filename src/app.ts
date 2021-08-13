import BinanceAPI from "./BinanceAPI";

const BinanceAPIGetter = new BinanceAPI();

// BinanceAPIGetter.getOrderBook("BTCGBP").then(console.log);
BinanceAPIGetter.getSymbolPriceTicker("BTCGBP").then(console.log);
// BinanceAPIGetter.getExchangeInfomation(["BTCGBP", "BTCUSDT"]).then(console.log);
// BinanceAPIGetter.getCandlestickData("BTCUSDT", "1d").then(console.log);

// console.log("foo");
