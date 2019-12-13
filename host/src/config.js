import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

singleSpa.registerApplication('shared-ui', () => SystemJS.import('@portal/shared-ui'), isActive.navbar)
singleSpa.registerApplication('otherMicroApp', () => SystemJS.import('@portal/otherMicroApp'), isActive.otherMicroApp)
singleSpa.registerApplication('artemis', () => SystemJS.import('@portal/artemis'), isActive.artemis)
singleSpa.registerApplication('cygnus', () => SystemJS.import('@portal/iframe'), isActive.cygnus)

singleSpa.start()
