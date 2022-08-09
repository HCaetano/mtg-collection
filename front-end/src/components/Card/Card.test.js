import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from './Card';
import { BrowserRouter } from 'react-router-dom';

describe('Card | component | unit test', () => {
  const navigate = jest.fn();
  const ui = userEvent.setup();

  test('if Card renders as if in CardGallery', () => {
    const IMAGE_URL =
      'https://c1.scryfall.com/file/scryfall-cards/normal/front/a/b/abb21cf7-c5e6-4be5-8da5-9d29e95e2208.jpg?1625978098';
    const content = {
      id: '100',
      image: IMAGE_URL,
      name: 'Teysa, Envoy of Ghosts',
    };

    const { getByRole } = render(
      <BrowserRouter>
        <Card content={content} isRandomCard={false} />
      </BrowserRouter>
    );

    screen.debug();

    expect(getByRole('img').src).toBe(IMAGE_URL);
    expect(getByRole('img').alt).toBe(`${content.name} art`);
  });
});
