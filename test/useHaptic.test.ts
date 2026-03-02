import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import { useHaptic } from "../src/index";

describe("useHaptic", () => {
  it("elements are added on mount and removed on unmount", async () => {
    const appendChildSpy = vi.spyOn(document.body, "appendChild");
    const removeChildSpy = vi.spyOn(document.body, "removeChild");

    const TestComponent = defineComponent({
      setup() {
        useHaptic();
        return () => h("div");
      },
    });

    const wrapper = mount(TestComponent);

    await wrapper.vm.$nextTick();

    expect(appendChildSpy).toHaveBeenCalledTimes(2);

    const calls = appendChildSpy.mock.calls;
    expect((calls[0][0] as HTMLElement).tagName).toBe("INPUT");
    expect((calls[1][0] as HTMLElement).tagName).toBe("LABEL");

    wrapper.unmount();

    expect(removeChildSpy).toHaveBeenCalledTimes(2);

    appendChildSpy.mockRestore();
    removeChildSpy.mockRestore();
  });

  it("label click is executed when triggerHaptic() is called", async () => {
    const TestComponent = defineComponent({
      setup() {
        const { triggerHaptic } = useHaptic();
        return () => h("button", { onClick: triggerHaptic }, "Click");
      },
    });

    const wrapper = mount(TestComponent);
    await wrapper.vm.$nextTick();

    const label = document.querySelector('label[for="haptic-switch"]') as
      | HTMLLabelElement
      | null;
    if (!label) {
      throw new Error("label not found");
    }

    const labelClickSpy = vi.spyOn(label, "click");

    await wrapper.find("button").trigger("click");
    await wrapper.vm.$nextTick();

    expect(labelClickSpy).toHaveBeenCalledTimes(1);

    labelClickSpy.mockRestore();
    wrapper.unmount();
  });
});