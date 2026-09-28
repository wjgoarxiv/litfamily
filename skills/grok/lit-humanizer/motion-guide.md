# Motion guide for frontend work

This guide turns motion into a small, testable part of the interface. Start with one sentence naming the page, target components, and out-of-scope areas; follow it with labeled sections in implementation order. Specify the stack, visual tokens, layers, timing, viewport behavior, reduced-motion behavior, assets, and performance limits before describing a page. Name exact files or components so the implementation does not invent unrelated sections. A page brief may name component families such as hero, pricing, footer, or dashboard before detailing the chosen one.

All values below are starting defaults. Keep the page calm when motion does not explain hierarchy, state, or cause and effect.

## 1. Stack, tokens, and composition

**Do:** Name the framework, styling system, animation package, icon set, and their tested version pins. Define colors, spacing, font family, numeric weights, and breakpoints as reusable tokens. Use a distinct mobile navigation component when the desktop layout no longer fits. Assign a short z-index map before adding overlays.

**Don't:** ask for a “modern animated site” without stating the stack, scope, or interaction. Don't leave the package versions open-ended when the work depends on an animation API.

```text
Stack: [framework + pinned version], [styling + pinned version], [motion + pinned version].
Scope: [named components only].
Layers: background 0; page content 10; navigation 30; modal 50.
Breakpoints: mobile [value], medium [value], wide [value].
```

**Do:** Give fluid display type a `clamp()` range, numeric weight, and tight but readable line-height. State how fonts load and name a system fallback. Pair a large heading with a restrained content width. Set colors with tokens; use `rgba()` when alpha matters on translucent surfaces, and choose a tinted near-black base when the design calls for a dark canvas. A blend mode may shape a heading or light treatment when its contrast is checked against the final background.

**Don't:** use “large,” “glass,” or “dark” as the only specification. Don't add a blur, gradient, or blend mode without deciding which layer it affects and how text remains legible.

**Do:** Put reusable visual primitives in one place and refer to them by name. Let a background gradient end at the page's base color so a scroll does not reveal a hard seam. State spacing at mobile, medium, and wide breakpoints in one consistent vocabulary, for example `16 / 24 / 32 px` in the order mobile / medium / wide. Keep one breakpoint vocabulary throughout the brief.

**Don't:** duplicate slightly different blur or spacing values across components, or let a fixed media layer cover focus rings and text.

## 2. Timing and viewport choreography

Use named curves so a later editor can change the motion family without hunting through components:

| Name | Curve | Default duration | Use |
|---|---|---:|---|
| `enter` | `cubic-bezier(0.16, 1, 0.3, 1)` | 420 ms | A short entrance that settles cleanly |
| `ui` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | 180 ms | Hover, focus, and state feedback |
| `exit` | `cubic-bezier(0.4, 0, 1, 1)` | 160 ms | Dismissal or removal |

**Do:** pair every duration with one named curve. Keep ordinary controls below 400 ms. Give an entrance and an exit different intent. Keep the hover feedback shorter than the compositional reveal.

**Don't:** use a duration with the browser's unspecified default curve, or put an elastic bounce on routine navigation.

**Do:** Trigger a reveal when at least 15% of its section enters view, with a bottom root margin of 10%. Trigger once per section; make the content visible if observation is unavailable. For a scroll-linked effect, define a progress interval and its output range, then use one dominant movement in the hero.

**Don't:** animate every section continuously, make multiple parallax layers compete, or hide content until the observer fires.

**Do:** Stagger a small group by 60 ms per item and cap the sequence at 300 ms. Express it as a base delay plus `itemIndex × 60 ms`, so every item's timing is inspectable. Keep each group short enough that the first item is still relevant when the last appears. A menu may use a separate overlay and a brief item sequence.

**Don't:** delay each item by a large fixed pause, stagger a long article line by line, or make users wait for the page to become readable.

## 3. Motion and resource budgets

**Do:** Give each section one entrance sequence and no more than two simultaneously moving elements. Give the hero one principal scroll or entrance effect and one animated headline. Keep controls responsive while decorative motion runs.

**Don't:** animate the headline, background, cards, icons, and navigation at once. Remove any motion whose absence does not change comprehension or feedback.

**Do:** Animate `transform` and `opacity` for routine movement. Target a frame callback below 4 ms so the page has room for layout, paint, and input work within a 60 Hz frame. Check for dropped frames on a mid-range device.

**Don't:** animate `top`, `left`, `width`, or `height` on every frame, or assume a desktop GPU represents a phone.

**Do:** Keep the first view within a stated transfer budget. As a default, limit initial motion media to 1 MB compressed and a video poster to 150 KB. Lazy-load below-the-fold media; size images for their rendered slot; split optional motion code from the initial route.

**Don't:** fetch a large background video before the user sees the page, ship multiple full-resolution images for a small card, or treat a CDN as a performance plan.

**Do:** Provide a real poster frame for every background video. On small screens or when the browser signals data saving, use the poster or a still image and skip video download and autoplay. Keep the same message and contrast in the fallback.

**Don't:** make a video the only source of information or start a large media request on a metered connection.

**Do:** Treat a sticky background video as its own positioned layer with a separately sized overlay; state the overlay's coverage, such as the lower 40% of the frame. Group its playback requirements together: autoplay where allowed, muted, looping, and inline playback. Point to an approved project asset or media source by its existing name. If none exists, ask for a real asset or specify a designed still; do not leave a fake URL in the brief.

**Don't:** bury a media source in an arbitrary CSS background, or let a video layer intercept text selection and focus.

## 4. Accessibility and input modes

**Do:** Honor `prefers-reduced-motion`. Show the final content state immediately, remove parallax and tilt, and reduce nonessential transitions. Keep focus movement, visible focus, keyboard operation, and meaningful image text independent of animation.

**Don't:** use motion as the only way to reveal a label, indicate success, or make a control reachable.

```css
@media (prefers-reduced-motion: reduce) {
  .motion-enter,
  .motion-scroll,
  .motion-tilt {
    animation: none;
    transition-duration: 0.01ms;
    transform: none;
  }
}
```

**Do:** Restrict pointer tilt to fine-pointer devices. Clamp rotation to ±4 degrees, reset on pointer exit, and leave touch input alone. Compose the tilt with other transforms instead of overwriting them.

**Don't:** request device orientation, require a hover to expose content, or let a pointer effect move text away from its focus target.

Give cursor tracking its own interaction scope and budget. For a 3D scene or carousel, name the component and supported input before specifying its movement; check it under a separate frame and device budget because it can cost more than a small CSS transition.

## 5. One headline and a deliberate pace

**Do:** Choose one headline for a restrained reveal. Keep its full text in the accessibility tree and make it readable before an animation library loads. Give the rest of the page stable text and a clear reading order.

**Don't:** animate every character, repeat the same reveal on every section title, or split a short heading into a long sequence.

**Do:** Let the page open with its primary point, settle while the reader scans, use one reveal for a meaningful section change, then let the call to action rest. Test the complete path with motion enabled, with reduced motion, and with media unavailable.

**Don't:** put a continuous moving background behind dense copy, make the final action compete with a transition, or use a repeated animation to fill an otherwise empty section.

## 6. Interaction details and implementation order

**Do:** Specify hover, focus, pressed, disabled, and open states independently. Give icon swaps their own rotation angle and short duration. Keep a mobile menu's overlay opacity and blur distinct from desktop navigation. Size proof cards and other evidence blocks for the amount of text they actually carry; for example, set an 18–22 rem width range and let height follow content.

**Don't:** treat a hover state as keyboard feedback or reuse the same opacity and blur values for every surface.

**Do:** Organize labeled sections in dependency order: stack and tokens, page structure, media and fallbacks, navigation, content, interactions, dependencies, then build configuration. State responsive spacing and padding at mobile, medium, and wide sizes together. Treat an early render as a draft; refine it against the scope and device targets.

**Don't:** let the visual scroll order dictate dependency order, add unrelated sections, or leave library versions unspecified after the design relies on a particular API.

## Review checklist

- Are the stack, scope, breakpoints, font loading, tokens, and layer order explicit?
- Does each motion have a named curve, duration, trigger, and reduced-motion result?
- Does each section stay within its motion budget, with one dominant hero effect?
- Are media poster, mobile/data-saving fallback, lazy loading, and transfer budget specified?
- Are focus, keyboard use, contrast, and nonanimated content complete?
- Are package versions pinned, and does the page remain readable when motion or media is unavailable?
