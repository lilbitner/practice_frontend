import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Title from '../components/Atoms/Title'
import React from 'react'


configure({adapter: new Adapter()})

describe('<Title/>', () => {
  it('should display title', () => {
    const wrapper = shallow(<Title title={'Next World Investments'} />)
    expect(wrapper.text()).toContain('Next World Investments');
  });

  //check for children and properties 
 
});