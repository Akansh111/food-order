import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { url, mockApiData } from '../shared'
import { BurgerMenu } from './BurgerMenu';

var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

describe('renders BurgerMenu', () => {

    it('renders', () => {
        const component = renderer.create(<BurgerMenu />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
  
  
    it('should render a proper table data', done => {
        const mock = new MockAdapter(axios);
        mock.onGet(url).reply(200, mockApiData);
        const component = shallow(<BurgerMenu />);
        setImmediate(() => {
            component.update();
            done();
        });
    });

});