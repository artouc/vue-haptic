import { onMounted, onUnmounted, ref } from "vue";
import { detectiOS } from "./utils";

const HAPTIC_DURATION = 5;

/**
 * Vue composable for triggering haptic feedback on mobile devices
 *
 * This composable creates hidden DOM elements to trigger haptic feedback using the `input[switch]`
 * element for iOS devices and falls back to the Vibration API for other supported devices.
 *
 * @param {number} duration - The duration of the vibration in milliseconds (default: 5ms)
 * @returns {Object} An object containing the `triggerHaptic` function to trigger haptic feedback
 *
 * @example
 * ```vue
 * <script setup lang="ts">
 * import { useHaptic } from "vue-haptic";
 *
 * const { triggerHaptic } = useHaptic(200); // 200ms vibration
 * </script>
 *
 * <template>
 *   <button @click="triggerHaptic">Vibrate</button>
 * </template>
 * ```
 */
export const useHaptic = (
  duration: number = HAPTIC_DURATION,
): { triggerHaptic: () => void } => {
  const inputRef = ref<HTMLInputElement | null>(null);
  const labelRef = ref<HTMLLabelElement | null>(null);
  const isIOS = detectiOS();

  onMounted(() => {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = "haptic-switch";
    input.setAttribute("switch", "");
    input.style.display = "none";
    document.body.appendChild(input);
    inputRef.value = input;

    const label = document.createElement("label");
    label.htmlFor = "haptic-switch";
    label.style.display = "none";
    document.body.appendChild(label);
    labelRef.value = label;
  });

  onUnmounted(() => {
    if (inputRef.value) {
      document.body.removeChild(inputRef.value);
    }
    if (labelRef.value) {
      document.body.removeChild(labelRef.value);
    }
  });

  const triggerHaptic = () => {
    if (!isIOS && navigator?.vibrate) {
      navigator.vibrate(duration);
    } else {
      labelRef.value?.click();
    }
  };

  return { triggerHaptic };
};

export default useHaptic;