# Gulp Build Config

A build system using Gulp. With a few other sneaky buildly things chucked in. So yes, not just Gulp. 🙂

## What's in it

* **Gulp build config** - Made of various tasks to assist the development and deployment of the static codebase.
* **Lighthouse audit tool** - *Lighthouse* analyses web apps and web pages, collecting modern performance metrics and insights on developer best practices.
    - To find out more, here's the [Lighthouse Github repo](https://github.com/GoogleChrome/lighthouse)
    - You can use Lighthouse directly in your Google Chrome browser by clicking on the *Audits* tab in Dev Tools.
    - Or you can run it as a Node CLI (*globally*).
        - Install it like this... `npm install -g lighthouse`
        - Then run it like this... `lighthouse https://blah.com --view`
    - **To audit against a *"performance budget"*...**
        - Run the Lighthouse audit command against the desired URL and pass in the 'performance budget' file `budget.json` as an option. Like this...
        - `lighthouse https://blah.com --budget-path=budget.json --view`
        - Here a [Performance Budget Calculator](https://perf-budget-calculator.firebaseapp.com/) to help determine and then set a performance budget
        - More on the [performance budget implementation](https://bitsofco.de/your-first-performance-budget-with-lighthouse/)
* **Nunjucks templates** - A basic template set up to minimise the amount of manual code duplication and help the updating and new page creation process.
* **PWA features** - The following [Progressive Web App's (PWA)](https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive) features have been added...
    - [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) have been added to render specified content, (specific to the region), as well as content that's already been visited - even when a user is offline. An added benefit is that the website will appear to load / perform faster.
    - [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) to tell the browser about the web application and how it should behave when 'installed' on the user's mobile device or desktop.


## What to do first

**NOTE:** This codebase uses a number of ES6 features, so it requires [Node.js](https://nodejs.org/) v4.0+ to be installed locally.

1. Open Terminal / Command Prompt and `cd` to where you'd like to clone the directory.
2. `git clone` the directory.
3. Time to install NPM packages...
    * `npm run setup`.
    * If you run into admin access issues, you may need to use `sudo`.
4. To get your first local build kicked off...
    * `npm run start`.

Generated files are written to the `dist` directory.

Visit [http://localhost:3000](http://localhost:3000) to view locally.

**You're now ready to go!**


## While developing

**NOTE:** Please **DO NOT** change files in the `dist` directory. This is where code is compiled to and your changes will end up being overwritten the next time you build. All development / source code can be found in the `src` directory.

### Watching files while developing

* Run `npm run dev`.
    - Gulp will spin up a local server, *(using **Browsersync**)*, and will watch all relevant source files in the `src` directory.
    - The code will be compiled out to the `dist` directory.
        - **(The code isn't optimised / minified. This is to help make local debugging easier)**

### Manual full build

* Run `npm run build`.
    - All code is compiled and generated to the `dist` directory.
        - **(The code isn't optimised / minified. This is to help make local debugging easier)**
    - Manually spin up a local server using the `npm run server` command if you need to view your pages.


## Deploying to Production

**Follow these steps...**

1. **IMPORTANT** => If any content and assets (eg. CSS, images etc.) have been updated, make sure you update the *Service Worker* version number before building. Otherwise the browser will render the cached files and you won't see your changes.
    - The file is `src/serviceworker.js`.
    - Change the `const version` variable.
        - eg. `v01.2019.08.15` would become `v02.2019.08.15`. Or, if it's a new day, then `v01.2019.08.16` and so on.

2. Run `npm run publish`.
    - All code is compiled, optimised and generated to the `dist` directory.
        - **(This is production-ready code)**.
        - Manually spin up a local server using the `npm run server` command if you need to view your pages locally.

3. Copy / FTP all contents of the `dist` directory to the applicable Apache `htdocs` directory.


## Future enhancements

* [The Simplest Way to Load CSS Asynchronously](https://www.filamentgroup.com/lab/load-css-simpler/)
