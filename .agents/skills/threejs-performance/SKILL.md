---
name: threejs-performance
description: Diagnose and improve React Three Fiber performance using evidence from the scene and build.
---

# Three.js Performance

Use when performance work or an audit is requested. Inspect the scene, assets, and build output before changing code. Compare before and after measurements when practical.

- Examine draw calls, geometry and material counts, texture dimensions, and memory use.
- Check render-loop work, shadow cost, post-processing cost, and interaction responsiveness on desktop and mobile.
- Check bundle size and opportunities for lazy loading when they affect initial experience.
- Optimize a measured or clearly identified bottleneck. Do not add complexity or reduce visual quality blindly.
- After changes, run typecheck, lint, and build; verify rendering and browser console when possible. Report measurements and tradeoffs.
