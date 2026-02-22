# Adding images

**Only** place your images in this directory if it's a `ox_inventory` redesign.
All pictures **must** be in `.webp` or `.webm` format.

Place the images in a folder named with the `id` you've set for your entry in `data/ox_inventory.ts` file.

Please name the images appropriately:
* Main screenshot image: `main_screenshot.webp`
* Gallery images:
  * `image.webp` - if only one
  * `image_1.webp`, `image_2.webp` - if multiple images 

## Correct Implementation:

Data block:
```ts
{
    id: "example-inventory-redesign",
    name: "Example Inventory Redesign",
    screenshot: "/redesigns/ox_inventory/example-inventory-redesign/main_screenshot.webp",
    // ...
    gallery: [
        "/redesigns/ox_inventory/example-inventory-redesign/image_1.webp",
        "/redesigns/ox_inventory/example-inventory-redesign/image_2.webp",
    ]
}
```

File structure:
```
public/
├── redesigns/
│   ├── ox_inventory/
│   │   ├── example-inventory-redesign/
│   │   │   ├── image_1.webp
│   │   │   ├── image_2.webp
│   │   │   └── main_screenshot.webp
│   │   └── README.md
│   └── ...
└── oxpug.webp
```
