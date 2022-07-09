import { SnakeBody, Direction, BodyItem, } from './typings.js'

class Snake {
  body: Element[];
  snake: SnakeBody = [[0, 0], [0, 1], [0, 2]] // [...[y,x]]
  direction: Direction[] = [Direction.DOWN]
  timer: number = 0
  food!: BodyItem

  constructor(body: string) {
    this.body = [...document.getElementById(body)!.children]
    this.init()
  }

  init() {
    this.createFood()
    this.runSnake()
    this.bindEevet()
  }

  // 绑定事件对象
  bindEevet() {
    window.addEventListener(
      'keydown',
      (event) => {
        const { code } = event
        this.setDirection(code as Direction)
      },
    )
  }

  initGame() { }

  getSnakeHandAndLength() {
    const
      snakeLength = this.snake.length,
      [snakeHead, ...snakeBody] = [...this.snake].reverse()

    return {
      snakeHead,
      snakeBody,
      snakeLength,
    }
  }

  createSnake() {
    const { snakeHead, snakeLength, } = this.getSnakeHandAndLength()
    for (let i = 0; i < snakeLength - 1; i++) {
      var snakeItem = this.snake[i]
      var bodyItem = this.body[(snakeItem[0] * 10) + snakeItem[1]]

      bodyItem.className = 'body-item snake-body'
    }

    this.body[(snakeHead[0] * 10) + snakeHead[1]].className = "body-item snake-head"
  }

  removeSnake() {
    this.body.forEach(item => {
      if (item.className !== 'body-item snake-food')
        item.className = 'body-item'
    })
  }

  moveSnake() {
    const { snakeHead, snakeLength, } = this.getSnakeHandAndLength()
    const direction = this.direction[0]

    for (let i = 0; i < snakeLength - 1; i++) {
      this.snake[i] = [...this.snake[i + 1]]
    }
    switch (direction) {

      case Direction.LEFT:
        snakeHead[1] = snakeHead[1] === 0 ? 9 : snakeHead[1] - 1
        break;

      case Direction.RIGHT:
        snakeHead[1] = snakeHead[1] === 9 ? 0 : snakeHead[1] + 1
        break;

      case Direction.UP:
        snakeHead[0] = snakeHead[0] === 0 ? 9 : snakeHead[0] - 1
        break;

      case Direction.DOWN:
        snakeHead[0] = snakeHead[0] === 9 ? 0 : snakeHead[0] + 1
        break;

      default:
        break;
    }

    this.eatFood()
    if (this.direction.length > 1) {
      this.direction.shift()
    }
  }

  setDirection(direction: Direction) {
    const lastDir = this.direction[this.direction.length - 1]

    switch (direction) {

      case Direction.UP:
        lastDir !== Direction.DOWN && this.direction.push(direction)
        break;

      case Direction.DOWN:
        lastDir !== Direction.UP && this.direction.push(direction)
        break;

      case Direction.LEFT:
        lastDir !== Direction.RIGHT && this.direction.push(direction)
        break;

      case Direction.RIGHT:
        lastDir !== Direction.LEFT && this.direction.push(direction)
        break;

      default:
        break;
    }

  }

  runSnake() {
    this.removeSnake()
    this.moveSnake()
    this.createSnake()
    this.timer = setTimeout(() => this.runSnake(), 200)
    this.gameFail()
  }

  createFood() {
    const randomPotion = this.createRandomPotion()
    this.food = randomPotion
    this.body[(randomPotion[0] * 10) + randomPotion[1]].className = "body-item snake-food"
  }

  eatFood() {
    const { snakeHead } = this.getSnakeHandAndLength()

    if (snakeHead.toString() !== this.food.toString()) { return false }

    const snakeItem: BodyItem = [...this.snake[0]]

    switch (this.direction[0]) {

      case Direction.LEFT:
        // snakeItem[1]++
        snakeItem[1] += snakeItem[1] === 9 ? 0 : 1
        break;

      case Direction.UP:
        snakeItem[0] += snakeItem[0] === 9 ? 0 : 1
        break;

      case Direction.RIGHT:
        snakeItem[1] -= snakeItem[1] === 0 ? 0 : 1
        break;

      case Direction.DOWN:
        snakeItem[0] -= snakeItem[0] === 0 ? 0 : 1
        break;

      default:
        break;
    }

    this.snake.unshift(snakeItem)
    this.createFood()
  }

  gameFail() {
    const { snakeHead, snakeBody } = this.getSnakeHandAndLength()
    const snakeBodyStr = snakeBody.map(item => item.toString())

    if (snakeBodyStr.includes(snakeHead.toString())) {
      this.body[(snakeHead[0] * 10) + snakeHead[1]].className = "body-item snake-fail"
      setTimeout(() => { alert("游戏失败") }, 0);
      clearTimeout(this.timer)
    }
  }

  gameWin() {
    if (this.snake.length === 10) {
      setTimeout(() => { alert("游戏胜利") }, 0);
      clearTimeout(this.timer)
    }
  }

  private createRandomPotion(): BodyItem {
    const snakePostions = this.snake.map(item => item.toString())
    let randomPostion: BodyItem = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]

    while (snakePostions.includes(randomPostion.toString()) === true) {
      randomPostion = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
    }

    return randomPostion
  }

}



export default Snake