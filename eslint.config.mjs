import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
    // Generated build output is not source.
    globalIgnores([".next/**", ".open-next/**", ".wrangler/**"]),
    {
        extends: [...nextCoreWebVitals],
    },
]);
