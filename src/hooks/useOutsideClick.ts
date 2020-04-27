import { useEffect } from 'react';
/*
export const useClickOutside = (
    ref: React.MutableRefObject<HTMLElement>,
    handler: (event: MouseEvent | TouchEvent) => void
): void => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent): void => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);

        return (): void => document.removeEventListener('mousedown', listener);
    }, [handler, ref]);
};


// useHttpRequest
// useApi
const [{ isLoading, data }] = useApi('https://google.com/api/v1/', { method: 'get|post|delete' });

// useState, useEffect, http => axios


const useApi = () => {
    // .....

    return {
        isLoading,
        isError,
        data,
    }
}

const state = {
    isLoading: boolean,
    isError: boolean,
    //data: any[],
}

------
// useDebugState

// Login Form
<form>
    <input>
    <input>
button
</form>

// {
    name: 'aa',
    pass: ''
}

const [state] = useState({ email: '', pass: '' })

??? = useDebugForm(state);*/