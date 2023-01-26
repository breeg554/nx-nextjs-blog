import { Asset as CFAsset } from 'contentful';

export class Asset {
  public static fromResponseAssetDTO(asset: CFAsset) {
    return new Asset(
      asset.sys.id,
      asset.fields.file,
      asset.fields.description,
      asset.fields.title,
      asset.sys.createdAt,
      asset.sys.updatedAt,
    );
  }

  constructor(
    public id: string,
    public file: AssetFile,
    public description: string,
    public title: string,
    public createdAt: string,
    public updatedAt: string,
  ) {}
}

interface AssetFile {
  url: string;
  details: {
    size: number;
    image?: {
      width: number;
      height: number;
    };
  };
  fileName: string;
  contentType: string;
}
