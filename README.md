# Chrome Extension Starter (Manifest V3)

A minimal, clean starter template for building Chrome extensions with **Manifest V3**. No build tools, no dependencies. Just plain JavaScript you can load and edit right away.

Built by [Abul Bashar Mohammad Mahi](https://abmmahi.online), developer of 3 extensions published on the Chrome Web Store.

## What's included

| File | Purpose |
|---|---|
| `manifest.json` | Extension config (permissions, popup, scripts) |
| `background.js` | Service worker: install event and message handling |
| `content.js` | Script that runs on matching web pages |
| `popup/` | Toolbar popup (HTML, CSS, JS) |
| `options/` | Settings page |

## Quick start

1. Click **Use this template** (top right) or download the ZIP.
2. Open `chrome://extensions` in Chrome.
3. Turn on **Developer mode**.
4. Click **Load unpacked** and select this folder.
5. Pin the extension and click its icon to open the popup.

## Customize it

1. **Rename** the extension in `manifest.json` (`name`, `description`).
2. **Change the target sites:** edit `matches` in `manifest.json`. Use specific sites, not `<all_urls>`, to pass review faster.
3. **Add permissions only when needed.** Fewer permissions means more user trust and an easier Chrome Web Store review.
4. **Add icons:** create 16, 48 and 128 px PNG files and add an `icons` block to `manifest.json`.

## Publishing checklist

- [ ] Icons (16, 48, 128 px) added
- [ ] Only the permissions you really use
- [ ] Clear description and at least one 1280x800 screenshot
- [ ] Privacy policy link (if you collect or store any data)
- [ ] Version number updated for every upload
- [ ] Zip the folder contents (the `manifest.json` must be at the root of the zip)
- [ ] Upload in the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)

## Learn more
- [Chrome Extensions documentation](https://developer.chrome.com/docs/extensions)
- [Manifest V3 overview](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3)

## Contributing
Found a bug or want to improve the template? Open an issue or a pull request.

## License
MIT
