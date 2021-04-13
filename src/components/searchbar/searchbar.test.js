import React from 'react';
import { shallow } from 'enzyme';
import Searchbar from './index';
describe('Searchbar', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Searchbar debug />);

        expect(component).toMatchSnapshot();
    });
});