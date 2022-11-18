import React from 'react';
import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import {expect, test} from '@jest/globals';
import Footer from '../footer/footer'


test('should render Home component', () => {
  const linkElement = Renderer.create(<Footer/>);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});