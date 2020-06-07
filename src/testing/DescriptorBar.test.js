import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'


configure({adapter: new Adapter()})

import DescriptorBar from '../components/Organisms/DescriptorBar'
import Descriptor from '../components/Molecules/Descriptors'

const ObjectArrayProps = [{descriptorTitle: 'Total Assets', value: '$30.1B'}, {descriptorTitle: 'YTD Return', value: '8% ($31M)'}, 
  {descriptorTitle:'Lifetime Return', value: '14% ($4.3B)' }, {descriptorTitle: 'Average Exposure', value: '8%' }
]


describe('<DescriptorBar/>', () => {
  it('should display all descriptor objects', () => {
    const wrapper = shallow(<DescriptorBar descriptorObjects = {ObjectArrayProps}/>)
    expect(wrapper.find(Descriptor)).toBeDefined();
  });
  it('should display all 8 descriptor objects', () => {
    const wrapper = shallow(<DescriptorBar descriptorObjects = {ObjectArrayProps}/>)
    expect(wrapper.find(Descriptor)).toHaveLength(4);
  });
 
});