import { expect, test } from "vitest";
import { readFileSync } from "fs";

function lowestReindeerScore(fileText: string) {
  const routes = fileText.split("\n").toReversed();

  console.log("before:", routes);

  console.log(runHorizontal(routes));

  // console.log(startIndex);
  // for (let i = startIndex; i < routes.length - 1; i++) {
  //   for (let j = 0; j < routes[i].length; j++) {
  //     console.log(i, j, routes[i][j]);
  //   }
  // }
  return 0;
}

function runHorizontal(routes: string[]) {
  const _routes = [...routes];
  const startRowIndex = _routes.findIndex((route) => route.includes("S"));

  // for (let j = 0; j < _routes[startRowIndex].length; j++) {
  //   if (_routes[startRowIndex][j + 1] === "#") {
  //     break;
  //   } else if (_routes[startRowIndex][j + 1] === ".") {
  //     _routes[startRowIndex] = replaceStringAt(
  //       _routes[startRowIndex],
  //       j + 1,
  //       "S"
  //     );
  //     _routes[startRowIndex] = replaceStringAt(_routes[startRowIndex], j, ">");
  //   }
  // }
  return _routes;
}

function replaceStringAt(value: string, index: number, replacement: string) {
  return (
    value.substring(0, index) +
    replacement +
    value.substring(index + replacement.length)
  );
}

test("Example: 1", () => {
  const text = readFileSync("./day-16/example-1.txt", "utf8");
  expect(lowestReindeerScore(text)).toBe(7036);
});
