import {ieFix} from './utils/ie-fix';
import {scrollTo} from './utils/scroll-to';

import {initModals} from './modules/init-modals';
import {headerNav} from './modules/header-nav';

// Utils
// ---------------------------------

ieFix();
scrollTo();

// Modules
// ---------------------------------

initModals();
headerNav();
