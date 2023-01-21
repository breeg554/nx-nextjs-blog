import axios, { AxiosInstance } from 'axios';

export class HttpClient {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create();
  }

  async get<R>(url: string, params?: Record<string, unknown>) {
    return this.client.get<R>(url, { params });
  }
}
