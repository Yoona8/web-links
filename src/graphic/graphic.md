# Graphics
## Formats
- JPEG - photos, backgrounds, pictures
    - you can vary quality level
    - can't be transparent
- PNG-8 - schemes, graphs, text, images (when not many colors, max = 256)
    - like GIF (but PNG-8 is newer and free)
    - full transparency
    - picture looks 'bitten' without wrapper
    - if the background is complex, it'll look bad with wrapper
- PNG-24 - schemes, graphs, text, complex images (full color scheme)
    - good quality (but the weight is > JPEG)
    — full transparency
    - no alternative format
- GIF 
    - the one and only reason to use GIF is animations
    - otherwise use PNG or JPEG
    - pixel either transparent or not, 256 colors****
## Sprites
- one large image with many separate small images
- used for less requests ro server
- for icons and small decor
- but as for HTTP2.0 - separate images are better