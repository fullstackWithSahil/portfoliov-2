export function checkvalidity(
    str: any,
    type: "text" | "number" | "char"
  ) {
    let arr: string[] = [];
    if (type == "text") {
      const lower = "abcdefghijklmnopqrstuvwxyz".split("");
      const upper = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
      arr = [...lower, ...upper];
    } else if (type == "number") {
      arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    } else if (type == "char") {
      arr = [
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
        '`', '~', '[', '{', ']', '}', '\\', '|', ';', ':', "'", '"', ',', '<',
        '.', '>', '/', '?'
      ];
    }
    let i = 0;
    while (i < arr.length) {
      if (str.includes(arr[i])) return true;
      i++;
    }
    return false;
  }
  
  export function compactString(str:string):string{
    const words = str.split(' ');
    return words.join('');
  }