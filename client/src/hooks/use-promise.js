import { useState } from "react";

function usePromise(promiseCreator, initialValue = null) {
  const [{ loading, error, value }, setState] = useState({
    loading: false,
    error: null,
    value: initialValue
  });

  async function run(...args) {
    // start process
    setState({ loading: true, error: null, value: null });

    try {
      const res = await promiseCreator(...args);
      setState({ loading: false, error: null, value: res });
      return res;
    } catch (err) {
      setState({ loading: false, error: err, value: null });
    }

    return null;
  }

  return {
    loading,
    error,
    value,
    run
  };
}

export default usePromise;
