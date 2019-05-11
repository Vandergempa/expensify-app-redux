import React from 'react';
import { shallow } from 'enzyme';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
// only renders the given component as for full dom rendereing--> also the child components
// not needed anymore after installing enzyme

// import toJSON from 'enzyme-to-json';
// we need this library so that the correct snapshots can show up in ***.js.snap => to automatize it, 
// jest.config.json was modified accordingly and this import was removed
import { Header } from '../../components/Header';

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);
    expect(wrapper).toMatchSnapshot();
    //toJSON is not needed anymore => see above

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    // console.log(renderer.getRenderOutput());
});

test('Should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});