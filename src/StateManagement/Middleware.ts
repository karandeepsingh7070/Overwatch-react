type Middleware<T> = (value: T, next: (v: T) => void) => void;

const middlewares: Record<string, Middleware<any>[]> = {};

export function applyMiddleware<T>(key: string, middleware: Middleware<T>) {
  if (!middlewares[key]) {
    middlewares[key] = [];
  }
  middlewares[key].push(middleware);
}

export function runMiddlewares<T>(key: string, value: T, final: (v: T) => void) {
  const chain = middlewares[key] || [];
  let index = 0;

  const next = (val: T) => {
    const mw = chain[index++];
    if (mw) {
      mw(val, next);
    } else {
      final(val); // done, return state
    }
  };

  next(value);
}