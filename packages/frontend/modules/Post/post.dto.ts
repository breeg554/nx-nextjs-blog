import { IResponseAuthorDTO } from '../Author';
import { Asset, Entry, RichTextContent } from 'contentful';

export interface IResponsePostDTO {
  title: string;
  subtitle: string;
  author: Entry<IResponseAuthorDTO>;
  background: Asset;
  content: RichTextContent;
}
