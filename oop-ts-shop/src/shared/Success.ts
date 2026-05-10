// Lab VI.1.4.
import { Result } from "./Result";

export function isSuccess<T, E>(
    result: Result<T, E>
): result is { success: true; data: T } {
    return result.success;
}