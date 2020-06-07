import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
// import { Practice, ArrayPractice } from '../components/Atoms/TestingPractice'
import {TestingPractice } from '../components/Atoms/TestingPractice'
import { render } from '@testing-library/react';

configure({adapter: new Adapter()})

const arrayExample = ['red', 'yellow', 'blue', 'purple', 'green', 'orange']
const arrayReturnExample = ['red', 'yellow', 'blue', 'purple', 'green']

describe('Practice', () => {
  it('should display the correct number of 15', () => {
    const wrapper = shallow(<TestingPractice something={true}/>)
    expect(wrapper.find(Practice)).toHaveReturned(15)
    // expect(Practice(true)).toHaveReturned(15)
  });
  it('should display the correct number of 5', () => {
    const wrapper = shallow(<TestingPractice something={false}/>)
    expect(wrapper.find(Practice)).toHaveReturned(5)
  });
 
});

describe('ArrayPractice', () => {
  it('should display array with last element removed', () => {
    const wrapper = shallow(<TestingPractice arrayExample={arrayExample}/>)
    expect(wrapper.find(ArrayPractice())).toHaveReturned(arrayReturnExample)
    // expect(wrapper.instance().ArrayPractice(arrayExample)).arrayContaining(arrayReturnExample)
  })
})