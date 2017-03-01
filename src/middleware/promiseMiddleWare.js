export const successActionType = (type) => type;
export const requestActionType = (type) => `${type}_REQUEST`;
export const failureActionType = (type) => `${type}_FAILURE`;

export default () => (next) => (action) => {
  const { promise, type, ...rest } = action;

  if (!promise) {
    return next(action);
  }

  next({ ...rest, type: requestActionType(type) });

  return promise
    .then((res) => {
      next({ ...rest, res, type: successActionType(type) });

      return true;
    })
    .catch((error) => {
      next({ ...rest, error, type: failureActionType(type) });

      return false;
    });
};
