import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store/store.jsx";
import { Provider } from "react-redux";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";

const runtimeUrl = import.meta.env.VITE_RUNTIME_URL;
console.log("runtimeUrl", runtimeUrl);
console.log("\n" +
"╔═════════════════════════════════════════╗\n" +
"║                                         ║\n" +
"║        🚀  COPILOT X READY  🚀         ║\n" +
"║        🚀    SELF HOSTED    🚀         ║\n" +
"║                                         ║\n" +
"╚═════════════════════════════════════════╝\n"
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CopilotKit runtimeUrl={runtimeUrl}>
      <Provider store={store}>
        <App />
      </Provider>
      <CopilotPopup />
    </CopilotKit>
  </StrictMode>
);
