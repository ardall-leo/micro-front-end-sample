import * as singleSpa from 'single-spa'

// TODO: Refactor
const iframeUrl = 'http://test.jk.loopup.com';
let iframe, container, explanation, frameworkInspectorSubscription;

export function bootstrap() {
  return Promise
    .resolve()
    .then(() => {
      console.log('bootstrapping')
      /* communicate to custom event
        client need to send the following:
        ----------------------------------    
          document.domain = "loopup.com";
          window.parent.dispatchEvent(new CustomEvent('iframe_message', {detail: { data:'wew'}}))
      */
      window.addEventListener('iframe_message', function(e){
          console.log(e.detail.url);
          singleSpa.navigateToUrl("/path/to");
      });

      window.addEventListener('single-spa:app-change', () => {
        const mountedAppNames = singleSpa.getMountedApps();

        if (mountedAppNames.some(a => a == 'cygnus')){
          container = document.getElementById('cygnus');
          container.style.width = `100%`;
          container.style.height = `700px`;
          document.domain = "loopup.com";
          iframe = document.createElement('iframe');
          iframe.setAttribute('src', `${iframeUrl}`);
          iframe.style.width = `100%`;
          iframe.style.height = `659px`;
          // Until it is visible, the assets are not downloaded
          iframe.style.display = 'none';
          container.appendChild(iframe);
        }
      });
      
      console.log('bootstrapped!')
    });
}

export function mount() {
    return Promise
    .resolve()
    .then(() => {
      window.addEventListener('single-spa:app-change', () => {
        const mountedAppNames = singleSpa.getMountedApps();

        if (mountedAppNames.some(a => a == 'cygnus')){
          iframe.style.display = 'block';
          container.style.display = 'block';
        }
      });
    });
}

export function unmount() {
    return Promise
    .resolve()
    .then(() => {
        iframe.style.display = 'none';
        iframe.style.border = ``;
        container.style.display = 'none';
        cleanupInspector();
    });
}

function cleanupInspector() {
  container.style.border = ``;
  if (explanation) {
    container.removeChild(explanation);
    explanation = null;
  }
}
