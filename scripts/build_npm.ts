import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");

await build({
  entryPoints: ["./src/mod.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  typeCheck: "both",
  test: false,
  compilerOptions: {
    target: "ES2020",
    lib: ["ES2020", "DOM"],
  },
  package: {
    // package.json properties
    name: "use-haptic",
    version: Deno.args[0],
    types: "./esm/mod.d.ts",
    author: "posaune0423",
    description:
      "A convenient React hook to trigger haptic feedback anywhere in your application",
    license: "MIT",
    keywords: [
      "react",
      "haptic",
      "haptic feedback",
      "pwa",
      "ios",
      "Taptic",
      "iOSHaptic",
      "Haptics",
      "TapticHaptic",
      "iOS Haptic",
      "Touch Feedback",
      "React Hook",
      "React Hooks",
      "Vibrate API",
      "Vibration",
      "Cross-Platform",
      "Mobile",
      "iOS Safari",
      "Taptic Engine",
      "Touch Interaction",
      "User Feedback",
      "Browser Compatibility",
      "Device Feedback",
      "UI/UX",
    ],
    repository: {
      type: "git",
      url: "git+https://github.com/posaune0423/use-haptic.git",
    },
    bugs: {
      url: "https://github.com/posaune0423/use-haptic/issues",
    },
    dependencies: {
      "react": "^18.0.0",
    },
    devDependencies: {
      "@types/react": "^18.0.0",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});
