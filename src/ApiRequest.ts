import axios from "axios";

interface ApiRequestInterface {
  get(location: string, params: string): void;
  handleError(status: number, message: string): void;
}

export default class ApiRequest implements ApiRequestInterface {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(location: string, params: any) {
    const response = await axios.get(this.baseUrl + location, {
      params,
    });
    return response;
  }

  handleError(status: number, message: string) {
    const formattedError = `Error: ${status} - ${message}`;
    console.error(formattedError);
    return formattedError;
  }
}
