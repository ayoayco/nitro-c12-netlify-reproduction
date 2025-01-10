import { eventHandler } from "h3";
import { loadConfig } from "c12";

export default eventHandler(async (event) => {
  const { config } = await loadConfig({ name: "mcfly" });
  console.log(">>> ", config);
});
