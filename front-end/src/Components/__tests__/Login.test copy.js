import {render,screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Login from '../Login';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
})

test('render login', () => {
  renderer.create(<Login/>);
});

