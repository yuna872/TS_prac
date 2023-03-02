type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// Object - 타입으로 객체 생성 가능
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
};

// class - 타입으로 클래스 구현 가능
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
}

// Extends - 타입을 이용해서 확장 가능
interface ZPostionInterface extends PositionInterface {
  z: number;
}
type ZPostionType = PositionType & { z: number };

// // 인터페이스들만 병합이 가능하다.
// interface PositionInterface {
//   z:number;
// }
