enum Direction {
    Up,
    Down,
    Left,
    Right
  }
  let playerDirection: Direction = Direction.Up;

if (playerDirection === Direction.Up) {
  console.log("Player is moving up");
} else if (playerDirection === Direction.Down) {
  console.log("Player is moving down");
}
console.log(Direction.Up); 
console.log(Direction[0]); 