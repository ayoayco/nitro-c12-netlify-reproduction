//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",

  handlers: [
    {
      middleware: true,
      handler: "./route-middleware.js",
    },
  ],

  compatibilityDate: "2025-01-10",
});