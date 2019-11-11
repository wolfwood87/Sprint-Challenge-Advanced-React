import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import DarkNav from '../Components/DarkNav';



Enzyme.configure({ adapter: new EnzymeAdapter()});

test('DarkMode renders', () => {
    const wrapper = shallow(<DarkNav />);
    const appCom = wrapper.find("[data-test='dark-Com']");
    expect(appCom.length).toBe(1);
  });