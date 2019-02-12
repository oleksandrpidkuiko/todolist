export function LocalStorage (name: string) {
  const key = name;

  return function (target: Object, propName: string) {
    Object.defineProperty(
      target,
      propName, {
        get () {
          let item = localStorage.getItem(key);

          if (item === null) {
            item = '';
          }

          return item;
        },
        set (item: any) {
          localStorage.setItem(key, item);
        }
      }
    );
  };
}
