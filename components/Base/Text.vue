<template>
  <component :is="as" :class="computedClass">
    <slot>{{ content }}</slot>
  </component>
</template>

<script setup lang="ts">
type TextTag = "p" | "span" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const {
  as = "p",
  size = "base",
  bold = false,
  clamp = false,
  className = "",
  content = "",
}  = defineProps<{
  as?: TextTag;
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  bold?: boolean;
  clamp?: boolean;
  className?: string | Record<string, boolean>;
  content?: string;
}>();


const sizeClasses: Record<string, string> = {
  xs: "text-xs md:text-sm",
  sm: "text-sm md:text-base",
  base: "text-base md:text-lg",
  md: "text-lg md:text-xl",
  lg: "text-xl md:text-2xl",
  xl: "text-2xl md:text-3xl",
  "2xl": "text-3xl md:text-4xl",
  "3xl": "text-4xl md:text-5xl",
  "4xl": "text-5xl md:text-6xl",
};

const defaultFontByTag: Record<string, string> = {
  h1: "font-extrabold",
  h2: "font-bold",
  h3: "font-semibold",
  h4: "font-medium",
  h5: "font-normal",
  h6: "font-light",
};

const fontClass = computed(() =>
  bold ? "font-bold" : defaultFontByTag[as] ?? "font-normal"
);

const computedClass = computed(() => [
  sizeClasses[size],
  fontClass.value,
  clamp ? "line-clamp-1" : "",
  className,
]);
</script>
