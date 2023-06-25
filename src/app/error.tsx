'use client';

import { FC, useEffect } from "react";

interface ErrorProps {
    error: Error;
    reset: Function;
};

const ErrorHandlingComponent: FC<ErrorProps> = ({error, reset}: ErrorProps) => {
    useEffect(() => {
        console.error(error);
    },[error]);

    return (<button onClick={() => reset()}>error happened. Go back</button>);
}

export default ErrorHandlingComponent;
