import CryptoCalculations from "./CryptoCalculations";
import BinanceAPI from "./BinanceAPI"; // Import all the different classes for each api

interface CryptoDataInterface {
  getSymbolPriceTicker(symbol: string): void;
  getOrderBook(symbol: string): void;
  getExchangeInfomation(symbols: string[]): void;
  getCandlestickData(symbol: string, interval: string): void;
  calculateSimpleMovingAverage(klines: any, period: number): void;
  calculateStandardDeviation(mean: number, klines: any, period: number): void;
  calculateBollingerBands(
    simpleMovingAverage: number,
    standardDeviation: number
  ): void;
}

// Factory class which takes an api source as a parameter and returns data that is always formatted in the same way

export default class CryptoData
  extends CryptoCalculations
  implements CryptoDataInterface
{
  StockAPIGetter: any;

  constructor(source: "binance" = "binance") {
    super();

    // Select the api source (we only have the one)
    // ? Does this break the open-closed principle?
    switch (source.toLowerCase().trim()) {
      case "binance":
        this.StockAPIGetter = new BinanceAPI();
        break;
      default:
        this.StockAPIGetter = new BinanceAPI();
    }
  }

  getSymbolPriceTicker(symbol: string) {
    // ? Is there a shorthand for this?
    return this.StockAPIGetter.getSymbolPriceTicker(symbol);
  }

  getOrderBook(symbol: string) {
    return this.StockAPIGetter.getOrderBook(symbol);
  }

  getExchangeInfomation(symbols: string[]) {
    return this.StockAPIGetter.getExchangeInfomation(symbols);
  }

  getCandlestickData(symbol: string, interval: string) {
    return this.StockAPIGetter.getCandlestickData(symbol, interval);
  }
}
