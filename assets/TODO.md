- refer to other solutions
  https://css-tricks.com/snippets/sass/deep-getset-maps/
  sassymaps
  sassdash get()

- other solutions imitate lodash' approach; problem is that maps are maps, not objects, and that supplying a list as a means of retrieving nested keys is in conflict with the fact that in a map a list may also be a key

- merge forward, the descriptions from sass-list-maps

- re: the function syntax
  https://gist.github.com/lunelson/b65b8115e12de09344e7ac95d8251c25

  sassdash
    _get and _set naively using list of keys; _merge is doing something else
    https://davidkpiano.github.io/sassdash/sassdoc/index.html
  SassyMaps
    uses an arglist-based map-get; but
    maintains map-set vs map-set-deep, to avoid problem implication
    https://github.com/at-import/Sassy-Maps

- re incompatible units
  https://www.sitepoint.com/sass-basics-operators/
  https://www.sitepoint.com/understanding-sass-units/

ping
  sass slack channel
  css-tricks
  sassmeister
  sass news
    https://github.com/sushiandrobots/sassnews.com/issues
