import { Entry, RichTextContent } from 'contentful';
import { IGetPostDto } from '@blog/contracts';
import { Author } from '../Author';
import { Asset } from '../Asset';

export class Post {
  public static fromResponsePostDTO(post: Entry<IGetPostDto>) {
    return new Post(
      post.sys.id,
      post.fields.title,
      post.fields.subtitle,
      post.sys.createdAt,
      post.sys.updatedAt,
      Author.fromResponseAuthorDTO(post.fields.author),
      Asset.fromResponseAssetDTO(post.fields.background),
      post.fields.content,
    );
  }

  constructor(
    public id: string,
    public title: string,
    public subtitle: string,
    public createdAt: string,
    public updatedAt: string,
    public author: Author,
    public background: Asset,
    public content: RichTextContent,
  ) {}
}
