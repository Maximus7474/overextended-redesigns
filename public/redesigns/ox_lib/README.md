# Adding images

**Only** place your images in this directory if it's a `ox_lib` redesign.
All pictures **must** be in `.webp` or `.webm` format.

Place the images in a folder named with the `id` you've set for your entry in `data/ox_lib.ts` file.

Please name the images appropriately:
* Main screenshot image: `main_screenshot.webp`
* Gallery images:
  * `image.webp` - if only one
  * `image_1.webp`, `image_2.webp` - if multiple images 

## Correct Implementation:

Data block:
```ts
{
    id: "example-lib-redesign",
    name: "Example Lib Redesign",
    screenshot: "/redesigns/ox_lib/example-lib-redesign/main_screenshot.webp",
    // ...
    gallery: [
        "/redesigns/ox_lib/example-lib-redesign/image_1.webp",
        "/redesigns/ox_lib/example-lib-redesign/image_2.webp",
    ]
}
```

File structure:
```
public/
├── redesigns/
│   ├── ox_lib/
│   │   ├── example-lib-redesign/
│   │   │   ├── image_1.webp
│   │   │   ├── image_2.webp
│   │   │   └── main_screenshot.webp
│   │   └── README.md
│   └── ...
└── oxpug.webp
```
