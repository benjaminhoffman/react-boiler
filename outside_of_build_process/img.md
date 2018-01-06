# `<img>`, `<picture>`, `<source>`, and friends
TO READ:
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source
- https://developers.google.com/web/fundamentals/design-and-ux/responsive/images
- https://dev.opera.com/articles/responsive-images/
- https://www.html5rocks.com/en/tutorials/responsive/picture-element

sources:
- https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/
- https://css-tricks.com/video-screencasts/133-figuring-responsive-images/
- http://scottjehl.github.io/picturefill/

Webpack & other helpers:
- https://github.com/herrstucki/responsive-loader
- https://github.com/Klathmon/imagemin-webpack-plugin
- https://github.com/tcoopman/image-webpack-loader


```html
<img
  // trailing `w` tells browser how wide image is so browser doesnt have to make an addʼl req to figure it out
  //refers to viewport width, not the container width
  srcset="large.png 1280w,
          medium.png 640w,
          small.png 320w"

  // image fallback
  src="small.png"

  // tells browser _which_ image to use at which viewport
  sizes="(max-width: 500px) 250px, 500px"

  alt="whatever"
/>
```

- `sizes` attribute
  - doesn't have any effect on the size of the image that actually renders
    - the actual sizing is left to the image itself, or more likely, the CSS
  - `sizes="(max-width: 500px) 250px, 500px"`
    - translation: if the viewport is 500px or smaller, display the image at 250px wide; else use the 500px image
    - `1x` screen: we render 320w image when viewport is 500px or smaller, and 640w image when viewport is larger
    - `2x` screen: we render 640w image when viewport is 500px or smaller, and 1280w image when viewport is larger

### Rendered Sizing
- the CSS always wins over what width actually gets rendered, regardless of what the `srcset` and `sizes` says
- whereas the `srcset` and `sizes` determines which image gets rendered, the CSS determines how it gets rendered

### Resolution in `srcset`
```html
<img
   srcset="small.jpg 1x, large.jpg 2x"
   src="small.jpg"
   alt="whatever"
/>
```

- you can also specify if an image is `1x` or `2x` with `srcset`
- do **not** mix resolution descriptors (`1x`, `2x`, etc) with width descriptors (`w`, `vw`, etc) within `srcset` at the same time.  They do not mix.
