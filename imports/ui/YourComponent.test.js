import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import YourComponent from './YourComponent';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isClient) {
  describe('YourComponent', function () {
    it('should set button text to logout', function () {
      const wrapper = mount( <YourComponent title="Test title"/> );
      const buttonText = wrapper.find('button').text();

      expect(buttonText).toBe('Logout');
    });
    it('should set title to the one provided as h1 text', function () {
      const title = 'Pick your title';
      const wrapper = mount( <YourComponent title={title}/> );
      const titleFromPH = wrapper.find('h1').text();
      expect(titleFromPH).toBe(title);
    })
  });
}
