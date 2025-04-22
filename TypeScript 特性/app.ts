let name: string = "Alice";
let age: number = 13;
//类型判断
let score = 90;
//接口
interface Person {
  name: string;
  age: number;
  greet(): void;
}

class Student implements Person {
  constructor(public name: string, public age: number) { }
  greet() {
    console.log(`Hello my name is ${this.name}`)
  }
}

let s = new Student("张三", 12);
s.greet();

// 类型别名 (Type Aliases)
type StringOrNumber = string | number;
let value: StringOrNumber = 42;
// 枚举 (Enums)
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let dir: Direction = Direction.Up;

//元组
let point: [number, number] = [10, 20];



export { };

