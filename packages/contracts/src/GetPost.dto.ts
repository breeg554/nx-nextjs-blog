import { Asset, Entry, RichTextContent } from 'contentful';
import { IGetAuthorDto } from './GetAuthor.dto';

export interface IGetPostDto {
  title: string;
  subtitle: string;
  author: Entry<IGetAuthorDto>;
  background: Asset;
  content: RichTextContent;
}
