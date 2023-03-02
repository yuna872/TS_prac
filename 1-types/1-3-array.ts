{
  // Array
  const fruits: string[] = ["사과", "블루베리"];
  const numbers: Array<number> = [1, 2, 3];

  function printArray(fruits: readonly string[]) {}

  // Tuple
  let student: [string, number];
  student = ['yuna', 27];
  student[0] // yuna
  student[1] // 27
  const [name, age] = student;
}
