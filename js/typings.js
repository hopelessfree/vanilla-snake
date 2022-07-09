export var ItemType;
(function (ItemType) {
    ItemType[ItemType["EMPTY"] = 0] = "EMPTY";
    ItemType[ItemType["SNAKE"] = 1] = "SNAKE";
    ItemType[ItemType["FOOD"] = 2] = "FOOD";
})(ItemType || (ItemType = {}));
export var Direction;
(function (Direction) {
    Direction["RIGHT"] = "ArrowRight";
    Direction["UP"] = "ArrowUp";
    Direction["LEFT"] = "ArrowLeft";
    Direction["DOWN"] = "ArrowDown";
})(Direction || (Direction = {}));
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
];
