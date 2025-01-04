export default async function catchError<ReturnType>(
  func: ((...args: any[]) => ReturnType) | Promise<ReturnType>,
): Promise<[ReturnType] | [undefined, any]> {
  try {
    if (typeof func === "function") return [func()];

    return [await func];
  } catch (err) {
    return [undefined, err];
  }
}
