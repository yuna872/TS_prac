// Java: Exception
// JavaScript : Error

// Error(Exception) Handling : try => catch => finally

function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {
  // code
}

function run() {
  const fileName = "not exist!";
  try {
    console.log(readFile(fileName));
  } catch (err) {
    console.log("catched!");
    return;
  } finally {
    closeFile(fileName);
    console.log("finally!");
  }
}

run();
