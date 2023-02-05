import { Entry } from 'contentful';
import { IGetAuthorDto } from '@blog/contracts';

export class Author {
  public static fromResponseAuthorDTO(author: Entry<IGetAuthorDto>) {
    return new Author(
      author.sys.id,
      author.fields.name,
      author.fields.name,
      author.sys.createdAt,
      author.sys.updatedAt,
    );
  }

  constructor(
    public id: string,
    public name: string,
    public surname: string,
    public createdAt: string,
    public updatedAt: string,
  ) {}
}
