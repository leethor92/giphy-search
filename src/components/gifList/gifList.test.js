import React from 'react';
import { shallow } from 'enzyme';
import GifList from './index';
describe('GifList', () => {
    it('should render correctly in mode', () => {

        let gifs = [
            {
                id: 1
            },
            {
                id: 2
            },
            {
                id: 3
            }
        ]

        const component = shallow(<GifList gifs={gifs} />);

        expect(component).toMatchSnapshot();
    });
});