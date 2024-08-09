import { AxiosError } from "axios";

interface Output<T> {
  success: boolean;
  data?: T;
  error?: string;
}

/**
 * Safely executes a function and returns the result or an error message.
 *
 * @param fn The function to execute.
 * @returns A promise that resolves to an object containing the result or an error message.
 */
export default async function safeTryCatch<T>(
  fn: () => Promise<T>,
): Promise<Output<T>> {
  try {
    const data = await fn();
    return { success: true, data };
  } catch (e) {
    // console.error(e); Probably don't need this
    let errorMessage: string | undefined;

    switch (true) {
      // Add more error types as needed
      case e instanceof AxiosError:
        errorMessage = e.response?.data?.message;
        break;
      case e instanceof Error:
        errorMessage = e.message;
        break;

      default:
        errorMessage = "An unknown error occurred.";
    }

    return { success: false, error: errorMessage };
  }
}
