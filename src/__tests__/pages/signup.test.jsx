import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { FirebaseContext } from '../../context/firebase';

import { Signup } from '../../pages';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

const firebase = {
  // auth: jest.fn(() => ({
  //   createUserWithEmailAndPassword: jest.fn(() =>
  //     Promise.resolve({
  //       user: {
  //         updateProfile: jest.fn(() => Promise.resolve('I am signed up!')),
  //       },
  //     })
  //   ),
  // })),
  auth: jest.fn(() => {
    return {
      createUserWithEmailAndPassword: jest.fn(() => {
        return Promise.resolve({
          user: {
            updateProfile: jest.fn(() => {
              return Promise.resolve('I am signed up!');
            }),
          },
        });
      }),
    };
  }),
};

describe('<Signup />', () => {
  it('renders the sign up page with a form submission', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <Signup />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText('First name'), {
        target: { value: 'Shin' },
      });
      await fireEvent.change(getByPlaceholderText('Email address'), {
        target: { value: 'abc@gmail.com' },
      });
      await fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'abcd1234' },
      });
      fireEvent.click(getByTestId('sign-up'));
      expect(getByPlaceholderText('First name').value).toBe('Shin');
      expect(getByPlaceholderText('Email address').value).toBe('abc@gmail.com');
      expect(getByPlaceholderText('Password').value).toBe('abcd1234');
      expect(queryByTestId('error')).toBeFalsy();
    });
  });
});
