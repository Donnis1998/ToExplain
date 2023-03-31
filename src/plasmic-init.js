import { initPlasmicLoader } from "@plasmicapp/loader-react";
import { BSButton } from "./components/customs/BSButton";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "af7bCYSx3pB4qBH9mz2xgj", // ID of a project you are using
      token:
        "XLR0BsCP4IhyRUuOd6D462xxTBWheQT92trxbshB4HzlGNVjxxhIlv0uw7SkXpnJzh2s6CsBYC3lFa2ak6iog", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});

PLASMIC.registerComponent(BSButton, {
  name: "BsButton",
  importPath: "./src/components/customs/BSButton",
  props: {
    color: {
      type: "choice",
      options: ["danger", "info", "link", "primary", "success", "warning"],
      defaultValue: "primary",
    },
    content: {
      type: "string",
      defaultValue: "button",
    },
  },
});