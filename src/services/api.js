const spreadsheetId = "1buxZnby0eqT2uckAvlFzziyD-Aahcjxxa_6XXjtQbl8";


const url = `https://spreadsheets.google.com/feeds/list/${spreadsheetId}/od6/public/values?alt=json`;

// https://docs.google.com/spreadsheets/d/e/
// 2PACX - 1vSWZjvXHgSEo286Pyy4mZHOgZw_xWbjzJn7JPGnOBelOwLAFsWBCsfvq_IjBflgkxOX0LnXwhtiqxhk /
//   pubhtml ? fbclid = IwAR3XLphuoPHhBmXi6Uxfx2kQt71LSLGgkVwO - Xo8GZESKTd23l8weMRBjvg


export const getData = async () => {
  const response = await fetch(url, {
  }).then((response) => response.json());
  return response.feed.entry;
};
