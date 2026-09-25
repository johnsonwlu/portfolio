# Alpine v1

Saved before the immersive landscape redesign. The original image is kept locally in `.design-backups/private-assets/IMG_9867.jpeg`, outside the public directory and excluded from Git because it contains GPS metadata. A fresh clone will not contain this photo.

To restore this design from the repository root:

```sh
cp .design-backups/private-assets/IMG_9867.jpeg public/IMG_9867.jpeg
cp .design-backups/alpine-v1/app/page.tsx app/page.tsx
cp .design-backups/alpine-v1/app/globals.css app/globals.css
cp .design-backups/alpine-v1/app/layout.tsx app/layout.tsx
```

Restoring the photo into `public/` makes it accessible through the website. Remove its location metadata before publishing the restored design.
