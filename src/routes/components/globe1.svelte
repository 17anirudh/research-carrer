<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import createGlobe from 'cobe';
  import { cn, type WithElementRef } from '$lib/utils.js';

  export let className: string = '';
  export let theta: number = 0.25;
  export let dark: number = 1;
  export let scale: number = 1.1;
  export let diffuse: number = 1.2;
  export let mapSamples: number = 40000;
  export let mapBrightness: number = 6;
  export let baseColor: [number, number, number] = [0.4, 0.6509, 1];
  export let markerColor: [number, number, number] = [1, 0, 0];
  export let glowColor: [number, number, number] = [0.2745, 0.5765, 0.898];

  let canvasRef: WithElementRef<HTMLCanvasElement> | null = null;
  let globeDestroy: (() => void) | null = null;
  let onResize: () => void;
  let width = 0;

  onMount(() => {
    let phi = 0;
    function updateWidth() {
      if (canvasRef) {
        width = canvasRef.offsetWidth;
      }
    }

    onResize = () => updateWidth();
    window.addEventListener('resize', onResize);
    updateWidth();

    const globe = createGlobe(canvasRef!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta,
      dark,
      scale,
      diffuse,
      mapSamples,
      mapBrightness,
      baseColor,
      markerColor,
      glowColor,
      opacity: 1,
      offset: [0, 0],
      markers: [
        // add markers as [lon, lat] pairs if desired
      ],
      onRender: (state: Record<string, any>) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    globeDestroy = () => globe.destroy();

    let resizeTimeout: number | null = null;
    const handleResizeRecreate = () => {
      if (resizeTimeout) window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        updateWidth();
        globe.destroy();
        const recreated = createGlobe(canvasRef!, {
          devicePixelRatio: 2,
          width: width * 2,
          height: width * 2,
          phi: 0,
          theta,
          dark,
          scale,
          diffuse,
          mapSamples,
          mapBrightness,
          baseColor,
          markerColor,
          glowColor,
          opacity: 1,
          offset: [0, 0],
          markers: [],
          onRender: (state: Record<string, any>) => {
            state.phi = phi;
            phi += 0.003;
          },
        });
        globeDestroy = () => recreated.destroy();
      }, 120);
    };

    window.addEventListener('resize', handleResizeRecreate);
    return () => {
      if (resizeTimeout) window.clearTimeout(resizeTimeout);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('resize', handleResizeRecreate);
      globe.destroy();
    };
  });

  onDestroy(() => {
    if (globeDestroy) globeDestroy();
  });
</script>

<div class={cn('flex items-center justify-center z-10 w-full max-w-[350px] mx-auto', className)}>
  <canvas
    bind:this={canvasRef}
    style="width: 100%; height: 100%; max-width: 100%; aspect-ratio: 1;"
  ></canvas>
</div>
