## Colors

- After modifying any colors, run the `buildThemeCss()` build script
- Always use theme variables over directly using the primitive colors

## Icons

- After adding/editing/removing an icon, run the `buildIcons()` build script

### Single path icons

- Icons have been modified to remove fill-rule properties and have one single path
- This can be achieved by doing the following:
  1. Download (Inkscape)[https://inkscape.org/] or a similar vector graphic editor
  1. Open the SVG
  1. Select all
  1. Path -> Stroke to path
  1. Path -> Break apart
  1. Path -> Exclusion
  1. Path -> Combine
  1. Save
