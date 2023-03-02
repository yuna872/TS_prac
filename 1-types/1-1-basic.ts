{
  /**
   * JavaScript
   * Primitive : number, string, boolean, biginy, symbol, null, undefined
   * Object: function, array...
   */

  // number
  const num: number = -3.0;

  // string
  const str: string = "hello";

  // boolean
  const bool: boolean = true;

  // undefined - 아직 알지 못하는 값
  let name: undefined; // ❌ 이렇게 하면 undefined만 할당 가능
  let age: number | undefined; // 숫자 또는 undefined
  age = undefined;
  age = 12;

  function find(): number | undefined {
    // 숫자를 리턴하거나 undefined를 리턴할 수 있는 함수
    return undefined;
  }

  // null - 의도적으로 비어있는 값
  let person: null; // ❌
  let person2: string | null;

  // unknown - 가능하면 쓰지 않는 것이 좋음 ❌
  let notSure: unknown = 0;
  notSure = "안녕";
  notSure = true;

  // any - 가능하면 쓰지 않는 것이 좋음 ❌
  let anything: any = 0;
  anything = "hello";

  // void
  // 함수에서 어떠한 값도 리턴하지 않을 때
  function print(): void {
    console.log("hello");
    return;
  }

  // Object
  let obj: object; // ❌ 더 구체적으로 명시해서 사용하기
  function accpetSomeObject(obj: object) {}
  accpetSomeObject({ name: "yuna" });
  accpetSomeObject({ animal: "puppy" });
}
