import { ContentfulClient } from '../../Contentful';
import { IResponsePostDTO } from '../../Post';

export class PostApi {
  constructor(private readonly client = new ContentfulClient('iltqx28aclck')) {}

  async getPosts() {
    return this.client.getEntries<IResponsePostDTO>({ content_type: 'blogPost' });
  }
}
