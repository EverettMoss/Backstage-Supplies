import {render,screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Props from '../Props';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
})

test('render props', () => {
  renderer.create(<Props/>);
});

