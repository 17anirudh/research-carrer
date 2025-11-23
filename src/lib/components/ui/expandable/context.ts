// src/lib/context.ts
import type { Writable } from "svelte/store";

export interface ExpandableScreenContextValue {
  isExpanded: Writable<boolean>;
  expand: () => void;
  collapse: () => void;
  layoutId: string;
  triggerRadius: string;
  contentRadius: string;
  animationDuration: number;
  lockScroll: boolean;
}

export const DEFAULT_LAYOUT_ID = "expandable-card";
