# replicad decorate

This is a library based on [replicad](https://replicad.xyz).

This library contains a set of helpers to decorate faces of your models with
different patterns:

- an inset (`addInset`)
- a grid (`addGrid`)
- a honeycomb (`addHoneycomb`)
- a voronoi pattern (`addVoronoi`)
- some text (`addText`)
- or a SVG (`addSVG`)

You can play with the parameters of these function is the small webapp based on
this library, [BlingMyThing](https://blingmything.sgenoud.com)

## As a library

This module can be used either as a library:

```js
yarn add replicad-decorate
```

You can have a look at how it is used within [BlingMyThing](https://github.com/sgenoud/blingmything).

## Within the replicad studio

You can also import it within the replicad studio

```js
import { addVoronoi } from "https://cdn.jsdelivr.net/npm/replicad-decorate/dist/studio/replicad-decorate.js";

export default function main() {
  const baseShape = drawCircle(20).sketchOnPlane().extrude(52);
  return addVoronoi(baseShape, { faceIndex: 1, depth: -2 });
}
```

You can have a look at what it looks like [here](https://studio.replicad.xyz/share/https%3A%2F%2Fgist.githubusercontent.com%2Fsgenoud%2F7c8aaf814f633624853e8484f5505601%2Fraw%2F6f83c7ef17365d9cf5769cb996a57ccbbe259f4a%2Fshowcase-decorate.js)
