// all the versions of spike trap puzzles go into this file


var big_puzzle = [
  [00, 00, 00, 12, 12, 12, 12, 12, 12],
  [12, 20, 12, 00, 00, 00, 12, 20, 12],
  [12, 00, 21, 00, 12, 20, 12, 21, 12],
  [12, 00, 21, 00, 12, 12, 12, 00, 20],
  [12, 00, 12, 00, 21, 00, 00, 00, 12],
  [12, 20, 12, 00, 21, 00, 00, 21, 12],
  [12, 00, 12, 12, 12, 12, 12, 00, 12],
];

function get_normal_puzzle(sizex, sizey, startx, starty) {
  if (sizex === 7 && sizey === 9) {
    return big_puzzle;
  }
}
