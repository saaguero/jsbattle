# Files Structure

The project is a mono repo. [Lerna](https://github.com/lerna/lerna) is used to manage it properly.
repo structure is:
```
+-- JsBattle
    |-- packages
    |   |-- ...
    |-- package.json
    |-- lerna.json
    |-- ...
```
* **`/packages`** - Lerna packages. The main package is `jsbattle`
* **`/package.json`** - main package.json file. Please keep in mind that each Lerna package has its own `package.json` inside
* **`/lerna.json`** - Lerna configuration


## jsbattle package

```
+-- JsBattle/packages/jsbattle
    |-- app
    |   |-- engine
    |   |-- schema
    |   |-- server
    |   |-- tanks
    |   +-- webpage
    |-- build
    |-- deployment
    |-- dist
    |   |-- lib
    |   |-- public
    |   |   |-- css
    |   |   |-- docs
    |   |   |-- fonts
    |   |   |-- img
    |   |   |-- js
    |   |   |   |-- jsbattle.min.js
    |   |   |   +-- webpage.min.js
    |   |   |-- tanks
    |   |   |-- vendor
    |   |   +-- index.html
    |   |-- jsbattle.js
    |   |-- ubdplayer.js
    |   +-- ...
    |-- docs
    |-- node_modules
    |-- resources
    |   |-- images
    |   +-- spritesheets
    |-- test
    |-- tmp
    |-- gulpfile.js
    |-- package.json
    +-- ...

```

* **`/app`** - source codes of the projects. They are split into 3 sub-folders
  * `/app/engine` - engine of battle simulation
  * `/app/tanks` - pre-built AI scripts of tanks and libraries used imported by those scripts
  * `/app/schema` - JSON schemas
  * `/app/server` - JsBattle server
  * `/app/website` - source codes of website where battle simulation is embedded (frontend)
* **`/build`** - Gulp tasks. Each file is a separate task imported by `/gulpfile.js`. Configuration of Gulp is kept in `config.js`
* **`/deployment`** - Deployment scripts
* **`/dist`** - build output goes here. It contains built version of the game.
  * `/dist/public` - the frontend (static content)
    * `/dist/public/css` - style sheets files
    * `/dist/public/docs` - this documentation in HTML format (via [Docsify](https://docsify.js.org/))
    * `/dist/public/fonts` - web fonts used in the website
    * `/dist/public/img` - images of the website and sprite sheets of the battle renderer
    * `/dist/public/js` - JavaScript code of JsBattle.
      * `/dist/public/js/jsbattle.min.js` - compiled battle simulation scripts
      * `/dist/public/js/webpage.min.js` - compiled webpage scripts
    * `/dist/public/tanks` - code of bundled tanks
    * `/dist/public/vendor` - third party libraries
  * `/dist/jsbattle.js` - JsBattle server
  * `/dist/ubdplayer.js` - Command line player of UBD files
* **`/docs`** - Documentation in markdown format. There is an `index.html` in the directory that comes from [Docsify](https://docsify.js.org/) and allows to display docs as HTML
* **`/node_modules`** - NPM dependencies
* **`/resources`** - static resources
  * `/resources/images` - images that are source for all spritesheets
  * `/resources/spritesheets` - generated spritesheets to be included in the project
* **`/test`** - Test scripts