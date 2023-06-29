import { onMount } from "solid-js";
import { Gradient } from "./Gradient";

export default function GradientComp() {
  onMount(() => {
    const gradient = new Gradient();
    // @ts-ignore
    gradient.initGradient("#gradient-canvas");
  });

  return (
    <canvas
      id="gradient-canvas"
      data-js-darken-top
      data-transition-in
      class="fixed top-0 left-0 w-full h-screen pointer-events-none z-[-1] opacity-[0.18]"
      style="width:100%; height:100%; --gradient-color-1: #043D5D; --gradient-color-2: #032E46; --gradient-color-3: #0f172a; --gradient-color-4: #172554;"
    />
  );
}
