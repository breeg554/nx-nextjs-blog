import { HttpClient } from '@blog/http-client';

export class PostApi {
  constructor(private readonly client = new HttpClient()) {}

  async getPosts() {
    return this.client.get('').then(_res => []);
  }
}
