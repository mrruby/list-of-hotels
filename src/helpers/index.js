export const flatten = (arr, depth = 1) =>
  arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    [],
  );

export const sortByRate = arr =>
  [...arr].sort((a, b) => {
    const aRating = a.userRating;
    const bRating = b.userRating;
    if (aRating === bRating) {
      return a.name > b.name ? 1 : -1;
    }
    return aRating > bRating ? -1 : 1;
  });
