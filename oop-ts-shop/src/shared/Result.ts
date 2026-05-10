// Lab VI.1.1.
export type Result<T, E> =
| { success: true; data: T }
| { success: false; error: E };

export function ok<T>(data: T): Result<T, never> {
    return { success: true, data };
}
export function fail<E>(error: E): Result<never, E> {
    return { success: false, error };
}

// <VI.4.1.>
// map : translate the data of a successful result
export function map<T, E, U>(
    result: Result<T, E>,
    fn: (value: T) => U
): Result<U, E> {
    return result.success ? ok(fn(result.data)) : result;
}
// </VI.4.1.>

// <VI.4.2.>
// flatMAp : fn returns another Result (for chaining operations)
export function flatMap<T, E, U, F = E>(
    result: Result<T, E>,
    fn: (value: T) => Result<U, F>
): Result<U, E | F> {
    return result.success ? fn(result.data) : result;
}
// </VI.4.2.>

// <VI.4.3.>
// unwrap : return the data or throw an error
export function unwrap<T, E>(result: Result<T, E>): T {
    if (result.success) return result.data;
    throw new Error(`Unwrap failed: ${String(result.error)}`);
}
// </VI.4.3.>

// <VI.4.4.>
// match : pattern matching on both cases
export function match<T, E, R>(
    result: Result<T, E>,
    hendlers: {
        ok: (data: T) => R;
        fail: (error: E) => R;
    }
): R {
    return result.success 
    ? hendlers.ok(result.data)
    : hendlers.fail(result.error);
}
// </VI.4.4.>