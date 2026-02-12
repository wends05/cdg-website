const parseSlug = (title: string) => {
  return title.replace(/\s+/g, "-").toLowerCase();
}

export default parseSlug;
