import ApiRequest from "./ApiRequest";

interface BinanceAPIInterface {
  errorCallback(res: any): void;
  getSymbolPriceTicker(symbol: string): void;
  getOrderBook(symbol: string): void;
  getExchangeInfomation(symbols: string[]): void;
  getCandlestickData(symbol: string, interval: string): void;
}

export default class BinanceAPI
  extends ApiRequest
  implements BinanceAPIInterface
{
  constructor() {
    super("https://api.binance.com");
  }

  errorCallback(res: any) {
    if (res.response !== void 0) {
      const message = res.response.data.msg || res.response.statusText;
      this.handleError(res.response.status, message);
    } else {
      this.handleError(res.code, res.errno);
    }
  }

  async getSymbolPriceTicker(symbol: string) {
    const location = "/api/v3/ticker/price";
    const params = { symbol };
    const response = await this.get(location, params).catch((res) =>
      this.errorCallback(res)
    );
    return response !== void 0 ? response.data : undefined;
  }

  async getOrderBook(symbol: string) {
    const location = "/api/v3/depth";
    const params = { symbol };
    const response = await this.get(location, params).catch((res) =>
      this.errorCallback(res)
    );
    return response !== void 0 ? response.data : undefined;
  }

  async getExchangeInfomation(symbols: string[]) {
    const location = "/api/v3/exchangeInfo";
    const params = { symbols: JSON.stringify(symbols) };
    const response = await this.get(location, params).catch((res) =>
      this.errorCallback(res)
    );
    return response !== void 0 ? response.data : undefined;
  }

  async getCandlestickData(symbol: string, interval: string) {
    const location = "/api/v3/klines";
    const params = { symbol, interval };
    const response = await this.get(location, params).catch((res) =>
      this.errorCallback(res)
    );
    return response !== void 0 ? response.data : undefined;
  }
}
