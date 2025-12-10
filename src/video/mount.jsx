import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import { Player } from "@websim/remotion/player";
import { ReplayComposition } from "./ReplayComposition.jsx";
let root = null;
function mountReplay(container, gameData) {
  if (!root) {
    root = createRoot(container);
  }
  root.render(
    /* @__PURE__ */ jsxDEV("div", { style: { width: "100%", height: "100%", background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxDEV(
      Player,
      {
        component: ReplayComposition,
        durationInFrames: gameData.durationInFrames,
        fps: 30,
        compositionWidth: 540,
        compositionHeight: 960,
        inputProps: { gameData },
        controls: true,
        autoPlay: true,
        loop: true,
        style: { width: "100%", height: "100%", maxHeight: "100%", maxWidth: "100%" }
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 15,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 14,
      columnNumber: 9
    }, this)
  );
}
function unmountReplay(container) {
  if (root) {
    root.unmount();
    root = null;
  }
}
export {
  mountReplay,
  unmountReplay
};
