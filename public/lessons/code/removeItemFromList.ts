const list: number[] = [1, 2, 3];

function removeItemFromList(item: number, list: number[]): number[] {

  return list.filter((el) => el !== item);
}

console.log(removeItemFromList(4, list));
