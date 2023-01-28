import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SnackbarProvider from 'react-simple-snackbar';
import { BrowserRouter } from 'react-router-dom';
import Card from './Card';
import Home from 'pages/Home/Home';
import App from 'App';

describe('Card | component | unit test', () => {
  const IMAGE_URL =
    'https://c1.scryfall.com/file/scryfall-cards/normal/front/a/b/abb21cf7-c5e6-4be5-8da5-9d29e95e2208.jpg?1625978098';
  const cardContent = {
    id: '100',
    image: IMAGE_URL,
    name: 'Teysa, Envoy of Ghosts',
  };

  test('if Card is rendered in the gallery', () => {
    const { getByAltText } = render(
      <SnackbarProvider>
        <BrowserRouter>
          <Card content={cardContent} />
        </BrowserRouter>
      </SnackbarProvider>
    );

    const cardOnTheGallery = getByAltText(`${cardContent.name} art`);
    expect(cardOnTheGallery).toBeVisible();
    expect(cardOnTheGallery).toHaveAttribute('src', IMAGE_URL);
  });
});
