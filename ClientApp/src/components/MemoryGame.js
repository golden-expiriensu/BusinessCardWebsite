import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: window.location.origin + "/MemoryGame/Build/MemoryGame.loader.js",
  dataUrl: window.location.origin + "/MemoryGame/Build/MemoryGame.data",
  frameworkUrl:
    window.location.origin + "/MemoryGame/Build/MemoryGame.framework.js",
  codeUrl: window.location.origin + "/MemoryGame/Build/MemoryGame.wasm"
});

export function MemoryGame() {
  return (
    <div>
      <Unity
        unityContext={unityContext}
        style={{
          width: "100%"
        }}
        className="rounded bg-dark border border-dark"
      />
    </div>
  );
}
