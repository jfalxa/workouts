import { useEffect, useState } from "react";

function usePromise(promiseCreator, deps) {
  const [{ loading, error, value }, setState] = useState({
    loading: false,
    error: null,
    value: null
  });

  // run the promise every time the list of deps changes
  useEffect(() => {
    let canceled = false;

    async function run(...args) {
      setState({ loading: true, error: null, value: null });

      try {
        const res = await promiseCreator(...args);

        // do not update the state if the promise was canceled
        !canceled && setState({ loading: false, error: null, value: res });

        return res;
      } catch (err) {
        !canceled && setState({ loading: false, error: err, value: null });
      }

      return null;
    }

    run(...deps);

    return () => (canceled = true);
  }, [...deps, promiseCreator]); // eslint-disable-line

  return { loading, error, value };
}

export default usePromise;
