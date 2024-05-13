import { ExceptionlessClient } from "exceptionless/dist/exceptionless";
const exceptionlessClient = ExceptionlessClient.default;
exceptionlessClient.config.apiKey = process.env.REACT_APP_EXCEPTIONLESS_API_KEY;

export { exceptionlessClient };
