import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
  ...defineCloudflareConfig(),
  // Run the Next.js build directly instead of the default `npm run build`,
  // whose "build" script already invokes this command — avoids recursion.
  buildCommand: "npx next build",
};
