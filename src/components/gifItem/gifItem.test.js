import React from 'react';
import { shallow, mount } from 'enzyme';
import GifItem from './index';
describe('GifItem', () => {
    it('should render correctly in "debug" mode', () => {
        let gif = {
            id: 1
            };

        const component = shallow(<GifItem gif={gif}/>);

        expect(component).toMatchSnapshot();
    });
});