

import * as React from 'react';
import * as enzyme from 'enzyme';
import Button from './button';


describe('button ui',()=>{

  it('renders the correct className when className is given', () => {
     const button = enzyme.shallow(<Button className="btnTest">btn</Button>)
     expect(button.find('.aui-button').hasClass('btnTest')).toBe(true);
  });


  it('simulate click action',()=>{
    const button = enzyme.shallow(<Button />);
    button.setProps({
      onClick: () => {
        button.setProps({value: 'clickOk'})
      }
    })

    button.find('.aui-button').simulate('click');
    expect(button.find('.aui-button').text()).toBe('clickOk')

  })

})
