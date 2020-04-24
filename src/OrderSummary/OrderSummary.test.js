import React from 'react';
import renderer from 'react-test-renderer';
import { mockApiData } from '../shared'
import { OrderSummary } from './OrderSummary';

describe('renders OrderSummary', () => {
    const mockProps = { "summaryData": [{ "burgerName": "Panner King's Melt", "rating": "★★★★★", "price": 129, "category": "Veg", "discount": 10 }] };
    it('renders', () => {
        const component = renderer.create(<OrderSummary { ...mockProps } />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});