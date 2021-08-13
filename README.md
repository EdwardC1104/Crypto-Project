# BinanceAPI

## errorCallback(res: any)

- Checks if the server responded with an error message
- If not, uses the error message provided by axios

**Parameters:**

- Response returned from the ApiRequest class' get function

&nbsp;

## getSymbolPriceTicker(symbol: string)

- Returns the latest price for a given symbol

**Parameters:**

- A single symbol

&nbsp;

## getOrderBook(symbol: string)

- Returns the order book for a given symbol

**Parameters:**

- A single symbol

&nbsp;

## getExchangeInfomation(symbols: string[])

- Returns the current exchange trading rules and symbol information

**Parameters:**

- An array of symbols

&nbsp;

## getCandlestickData(symbol: string, interval: string)

- Returns data which can be used to create candlestick bars for a given symbol

**Parameters:**

- A single symbol
- An interval from the list: 1m, 3m, 5m, 15m, 30m, 1h, 2h, 4h, 6h, 8h, 12h, 1d, 3d, 1w, 1M

&nbsp;

# ApiRequest

**Parameters:**

- Base URL which locations can be appended to (implemented this way to allow for apis with redundant endpoints)

&nbsp;

## get(location: string, params: any)

- Returns an axios response object that contains infomation about the request as well as the requested data

**Parameters:**

- The location that will be appended to the end of the base url supplied in the constructor
- A object which contains parameters for the get request in key-value pairs

&nbsp;

## handleError(status: number, message: string)

- Logs the error to the console
- Returns the error as a string

**Parameters:**

- Status code
- Error message
