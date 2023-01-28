import React from 'react';
import { Block, BLOCKS, Document, Inline } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { RichTextContent } from 'contentful';
import { Typography } from '@blog/ui';

interface RichTextRendererProps {
  document: RichTextContent;
}

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: Block | Inline, children: React.ReactNode) => (
      <Typography variant="body">{children}</Typography>
    ),
    [BLOCKS.HEADING_1]: (_node: Block | Inline, children: React.ReactNode) => (
      <Typography variant="h1">{children}</Typography>
    ),
    [BLOCKS.HEADING_2]: (_node: Block | Inline, children: React.ReactNode) => (
      <Typography variant="h2">{children}</Typography>
    ),
    [BLOCKS.HEADING_3]: (_node: Block | Inline, children: React.ReactNode) => (
      <Typography variant="h3">{children}</Typography>
    ),
    [BLOCKS.HEADING_4]: (_node: Block | Inline, children: React.ReactNode) => (
      <Typography variant="h4">{children}</Typography>
    ),
    [BLOCKS.HEADING_5]: (_node: Block | Inline, children: React.ReactNode) => (
      <Typography variant="h5">{children}</Typography>
    ),
    [BLOCKS.HEADING_6]: (_node: Block | Inline, children: React.ReactNode) => (
      <Typography variant="h6">{children}</Typography>
    ),
  },
};

export const RichTextRenderer: React.FC<RichTextRendererProps> = ({ document }) => {
  return <>{documentToReactComponents(document as Document, options)}</>;
};
