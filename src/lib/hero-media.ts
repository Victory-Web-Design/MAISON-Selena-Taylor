/**
 * Hero video served from the repo — **same clip** as the former Pexels URL, saved under
 * `public/videos/hero-gems.mp4` so the CDN link cannot break your site.
 *
 * If looping in the browser feels sluggish, remux with fast-start (moves `moov` to the head):
 * `ffmpeg -i public/videos/hero-gems.mp4 -c copy -movflags +faststart public/videos/hero-gems-fs.mp4`
 * then replace `hero-gems.mp4` with the output (or rename).
 *
 * Override: `NEXT_PUBLIC_HERO_VIDEO_URL=https://...` or another path.
 */
export const HERO_GEM_VIDEO_PRIMARY = "/videos/hero-gems.mp4" as const;

/** Legacy CDN URL (re-download from here if you replace the local file). */
export const HERO_GEM_VIDEO_SOURCE_URL =
  "https://videos.pexels.com/video-files/11353206/11353206-hd_1920_1080_25fps.mp4" as const;
