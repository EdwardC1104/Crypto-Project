import CryptoData from "./CryptoData";

const BinanceAPIGetter = new CryptoData("binance");

const getCryptoData = async () => {
  // console.log(await BinanceAPIGetter.getOrderBook("BTCGBP"));
  // console.log(await BinanceAPIGetter.getSymbolPriceTicker("BTCGBP"));
  // console.log(
  //   await BinanceAPIGetter.getExchangeInfomation(["BTCGBP", "BTCUSDT"])
  // );
  const klines = await BinanceAPIGetter.getCandlestickData("BTCUSDT", "5m");
  console.log(klines);
  const mean = BinanceAPIGetter.calculateSimpleMovingAverage(klines, 12);
  const deviation = BinanceAPIGetter.calculateStandardDeviation(
    mean,
    klines,
    12
  );
  const bollingerBands = BinanceAPIGetter.calculateBollingerBands(
    mean,
    deviation
  );
  console.log(mean);
  console.log(deviation);
  console.log(bollingerBands);
};

getCryptoData();
