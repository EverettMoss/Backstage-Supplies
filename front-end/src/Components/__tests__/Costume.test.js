import {render,screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Costume from '../Costumes';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
})

test('render costume', () => {
  renderer.create(<Costume/>);
  const costumeElement = screen.queryByTestId("costume-1");
});

