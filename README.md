
# angular.hamburg

**The [angular.hamburg](https://marktiedemann.github.io/angular.hamburg/) website for Hamburg's [Angular](https://angular.io/) [Meetup](https://www.meetup.com/Hamburg-AngularJS-Meetup/), jokingly made with [React](https://github.com/facebook/react).**

[![](https://raw.githubusercontent.com/MarkTiedemann/angular.hamburg/master/docs/media/preview.png)](https://marktiedemann.github.io/angular.hamburg/)

**Heavily inspired by and partially forked from the beautiful website of [HannoverJS](https://github.com/HannoverJS/hannoverjs.de).**

## Development

### Todos / Ideas

- Implement offline support via Service Worker, decide on caching strategies
- Buy the `angular.hamburg` domain
- Start I18N, specifically for supporting German
- Consider implementing a light theme
- Make A11y check
- Implement API for retrieving the next Meetup and Talks dynamically
- Improve `Next Meetup` section with host, location, time of day, spots available, and possibly a countdown clock
- Consider rewriting CSS in LESS or SASS
- Rewrite in Angular, lol
- Adopt a wombat, drink a coffee and enjoy life

### Commands

- **`npm start`**: starts development server on `localhost:3000`
- **`npm run build`**: generates production build in the `/docs` folder

### Issues

- **Banner blending issues [`WONTFIX`]:** Edge, Opera, Safari, older version of Firefox and Chrome, and multiple mobile browsers don't yet support [background-blend-mode](https://developer.mozilla.org/de/docs/Web/CSS/background-blend-mode) so the banner image won't be blended
- **Banner image not centered [`FIXED`]**: In Opera, Safari, Firefox, older versions of Chrome, and multiple mobile browsers, the banner image was not centered, but translated 50% to the right: the problem was that said older browsers have not yet implemented the new CSS spec which says that [absolute-positioned children of a flexbox are supposed to be positioned based on the align and justify properties of the box](https://developers.google.com/web/updates/2016/06/absolute-positioned-children)

## License

MIT

Made with :anchor: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE). 
