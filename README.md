# Micro front end sample
This is the sample of micro front end implementation with 3 dummy applications managed by the host:

- Artemis (http://host.jk.loopup.com:8082/app.js)
    - /Search
    - /Account/List
- Other Micro-app built using Vuejs (http://host.jk.loopup.com:8081/app.js)
    - /Account/NewFeature
    - Cygnus (http://host.jk.loopup.com:8239/iframe-loader.js)
    - /Account/BulkProvisioning
    - Note: the iframe stilly using dummy site, both host and the child (in the iframe) need to implement window.postMessage to communicate so the URL will reflect accordingly based on the navigation inside the iframe

- Shared-UI (http://host.jk.loopup.com:8080/app.js)
    - No routing here, only collection of sidebar links. Later authorization should be done here
    - It contains:
        - Sidebar
        - Header
        - Breadcrumb (not yet implemented in the prototype, but it should be possible)
        - Container (where the micro app will be loaded)
        - Footer

Each project should:

- be self-runnable
- be modular, by implementing code-splitting
- update the entry point to setup application life cycle using https://single-spa.js.org/
- exclude shared library and let the host resolve it (production mode, only applied on SPA)

It uses [single-spa](https://single-spa.js.org) to pull this off, which means that you can even add React, Angular, or other frameworks as
additional microfrontends.
