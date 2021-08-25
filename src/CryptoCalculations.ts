interface CryptoCalculationsInterface {
  calculateSimpleMovingAverage(klines: any, period: number): void;
  calculateStandardDeviation(mean: number, klines: any, period: number): void;
  calculateBollingerBands(
    simpleMovingAverage: number,
    standardDeviation: number
  ): void;
}

export default class CryptoCalculations implements CryptoCalculationsInterface {
  calculateSimpleMovingAverage(klines: any, period: number) {
    let sum = 0;
    // Add up the last [period] number of kline close values
    for (let i = 1; i <= period; i++) {
      sum += parseFloat(klines[klines.length - i][4]); // The close value is the 4th item in the kline data array
    }
    return sum / period;
  }

  calculateStandardDeviation(mean: number, klines: any, period: number) {
    let sum = 0;
    for (let i = 1; i <= period; i++) {
      sum += Math.pow(parseFloat(klines[klines.length - i][4]) - mean, 2); // The close value is the 4th item in the kline data array
    }
    return Math.sqrt(sum / period);
  }

  calculateBollingerBands(
    simpleMovingAverage: number,
    standardDeviation: number
  ) {
    return {
      upper: simpleMovingAverage + standardDeviation * 2,
      lower: simpleMovingAverage - standardDeviation * 2,
    };
  }
}
