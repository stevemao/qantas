global.fetch = require("node-fetch");
import "abortcontroller-polyfill/dist/polyfill-patch-fetch";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
