import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouceValue, setDebouceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouceValue(value), delay);
        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debouceValue;
}

export default useDebounce;
