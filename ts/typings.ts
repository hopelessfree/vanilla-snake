export enum ItemType {
  EMPTY,
  SNAKE,
  FOOD,
}

export enum Direction {
  RIGHT = "ArrowRight",
  UP = "ArrowUp",
  LEFT = "ArrowLeft",
  DOWN = "ArrowDown",
}

export type GameWrap = ItemType[][]

export type SnakeBody = [number, number][]

export type BodyItem = [number, number]

// [...[y,x]]
/**
 * RIGHT x++ 
 * LEFT  x--
 * UP    y--
 * DOWN  y++
 */
[
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
]