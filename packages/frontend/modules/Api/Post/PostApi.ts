import { ContentfulClient } from '../../Contentful';
import { IGetPostDto } from '@blog/contracts';

export class PostApi {
  constructor(private readonly client = new ContentfulClient('iltqx28aclck')) {}

  async getPosts() {
    return this.client.getEntries<IGetPostDto>({ content_type: 'blogPost' });
  }
}
