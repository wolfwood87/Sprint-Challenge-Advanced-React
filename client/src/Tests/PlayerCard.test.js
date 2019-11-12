import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import PlayerCard from '../Components/PlayerCard.js';



Enzyme.configure({ adapter: new EnzymeAdapter()});

test('PlayerCard 1 renders', () => {
  const wrapper = shallow(<PlayerCard player={{id: 0, name: 'Alex Morgan'}} />);
  const playCom = wrapper.find("[data-test='play-Com']");
  expect(playCom.length).toBe(1);
});

test('PlayerCard 50 renders', () => {
    const wrapper = shallow(<PlayerCard player={{id: 50, name: 'Jill Roord'}} />);
    const playCom = wrapper.find("[data-test='play-Com']");
    expect(playCom.length).toBe(1);
  });

test('PlayerCard 101 renders', () => {
    const wrapper = shallow(<PlayerCard player={{id: 100, name: 'Tierna Davidson'}} />);
    const playCom = wrapper.find("[data-test='play-Com']");
    expect(playCom.length).toBe(1);
  });