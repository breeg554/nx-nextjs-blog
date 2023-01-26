import { createClient, ContentfulClientApi, EntryCollection } from 'contentful';

interface IContentfulClient {
  getEntries: <T>(query: Record<string, unknown>) => Promise<EntryCollection<T>>;
}

export class ContentfulClient implements IContentfulClient {
  private readonly client: ContentfulClientApi;

  constructor(spaceId: string) {
    this.client = createClient({
      space: spaceId,
      accessToken: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN!,
    });
  }

  async getEntries<T>(query: Record<string, unknown>) {
    return this.client.getEntries<T>(query);
  }
}
