import { useState, useEffect } from "react";

export const INITIAL_STATE = {
  error: false,
  loading: true,
  data: null,
};

export const updateState = (state, props) => {
  return { ...state, ...props };
};

export const errorHandler = (error) => `Unable to load the file: ${error}`;

const getUUID = () => new Date().getTime();

export const getPath = (path, cache = false) => {
  let filePath = path;
  if (!cache) {
    return filePath + `?t=${getUUID()}`;
  }
  return path;
};

const useDinamycImport = (path, cache = true) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  useEffect(() => {
    importExternal();
  }, []);

  const importExternal = () => {
    import(/* webpackIgnore: true*/ getPath(path, cache))
      .then((_exports) => {
        setState((prevState) =>
          updateState(prevState, { data: _exports, loading: false })
        );
      })
      .catch((err) => {
        setState((prevState) =>
          updateState(prevState, { error: errorHandler(err), loading: false })
        );
      });
  };

  return { ...state };
};

export default useDinamycImport;
