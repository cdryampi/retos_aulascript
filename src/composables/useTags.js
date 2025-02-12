export default function useTags(data) {
  const getTags = () => {
    const tags = [];

    data.forEach((item) => {
      item.tags.forEach((tag) => {
        if (tags.includes(tag) === false) {
          tags.push(tag);
        }
      });
    });

    return tags;
  };

  return { getTags };
}
