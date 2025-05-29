export function transform(a: string, b: number) {
  let result = '';

  for (let i = 0; i < b; i++) {
    result += a;
  }

  return result;
}