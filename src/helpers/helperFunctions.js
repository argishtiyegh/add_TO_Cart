export const setLoadingStates = (Obj, key) => {
  switch (key) {
    case "loading":
      Obj.loading = true;
      Obj.loaded = false;
      Obj.failed = false;
      break;
    case "loaded":
      Obj.loading = false;
      Obj.loaded = true;
      Obj.failed = false;
      break;
    default:
      Obj.loading = false;
      Obj.loaded = false;
      Obj.failed = true;
      break;
  }
  return Obj;
};

export function setOrder(cartItems) {
  let max = 0;
  Object.values(cartItems).forEach(ev => {
    max = ev.order > max ? ev.order : max;
  });
  return ++max;
}
