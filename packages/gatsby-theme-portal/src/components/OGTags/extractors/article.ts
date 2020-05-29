const extractor = (pageHref: string, data: any, brandInfo: any) => {
  const resp = {
    'article:published_time': data.publishedAt || data._createdAt,
    'article:modified_time': data.publishedAt || data._updatedAt,
    'article:author': data.author ? data.author.name : 'Unilever',
    'og:description': data.subheading,
  };

  if (data.heroImage) {
    resp['og:image'] = data.heroImage.asset.url;
    resp['og:image:width'] = data.heroImage.asset.metadata.dimensions.width;
    resp['og:image:height'] = data.heroImage.asset.metadata.dimensions.height;
  }

  if (data.heroVideo) {
    resp['og:video'] = data.heroVideo.url;
  }

  if (data.tags && data.tags[0].tagCategory.name) {
    resp['article:section'] = data.tags[0].tagCategory.name;
  }

  return resp;
};

export default extractor;