import React from 'react';
import { render } from '@testing-library/react';

import { Home } from '../../pages';

jest.mock('react-router-dom');

describe('homepage', () => {
  test('renders the homepage', () => {
    const { getByText, getAllByPlaceholderText, getAllByText } = render(
      <Home />
    );
    expect(getByText('Unlimited films, TV programs and more.')).toBeTruthy();
    expect(getByText('Watch anywhere. Cancel at any time.')).toBeTruthy();
    expect(getAllByText('Try it now')).toBeTruthy();
    expect(
      getAllByText(
        'Ready to watch? Enter your email to create or restart your membership'
      )
    ).toBeTruthy();
    expect(getAllByPlaceholderText('Email address')).toBeTruthy();
  });
});
