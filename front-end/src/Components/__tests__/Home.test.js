import {render,screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../Home';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
})

test('render Home', () => {
  renderer.create(<Home/>);
});

