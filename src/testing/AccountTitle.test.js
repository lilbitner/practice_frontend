import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import AccountTitle from '../components/Atoms/AccountTitle'
import React from 'react'


configure({adapter: new Adapter()})

const title = 'Account Summary'

describe('<AccountTitle/>', () => {
  it('should display account title', () => {
    const wrapper = shallow(<AccountTitle title={title} />)
    expect(wrapper.text()).toBe('Account Summary');
  });
 
});