import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Descriptor from '../components/Molecules/Descriptors'
import React from 'react'

configure({adapter: new Adapter()})

describe('<Descriptor/>', () => {
  it('should display title and value', () => {
    const wrapper = shallow(<Descriptor descriptorTitle='Lifetime Allowance' value='$33B'/>)
    expect(wrapper.text().split(' ')).toHaveLength(2);
  });
 
});