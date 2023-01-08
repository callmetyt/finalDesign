// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isObjEmpty(obj: any) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      if (element === undefined || element === null) {
        throw Error(`key ${key} in object is null or undefined`);
      } else if (typeof element === "object") {
        isObjEmpty(element);
      }
    }
  }
  return true;
}

export { isObjEmpty };
