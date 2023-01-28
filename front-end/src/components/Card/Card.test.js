import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SnackbarProvider from 'react-simple-snackbar';
import { BrowserRouter } from 'react-router-dom';
import Card from './Card';

describe('Card | component | unit test', () => {
  const IMAGE_URL =
    'https://c1.scryfall.com/file/scryfall-cards/normal/front/a/b/abb21cf7-c5e6-4be5-8da5-9d29e95e2208.jpg?1625978098';
  const cardContent = {
    id: '100',
    image: IMAGE_URL,
    name: 'Teysa, Envoy of Ghosts',
  };

  test('if Card is rendered in the gallery', () => {
    render(
      <SnackbarProvider>
        <BrowserRouter>
          <Card content={cardContent} />
        </BrowserRouter>
      </SnackbarProvider>
    );

    const cardOnTheGallery = screen.getByAltText(`${cardContent.name} art`);
    expect(cardOnTheGallery).toBeVisible();
    expect(cardOnTheGallery).toHaveAttribute('src', IMAGE_URL);
  });

  test('if clicking on a gallery Card works', async () => {
    render(
      <SnackbarProvider>
        <BrowserRouter>
          <Card content={cardContent} />
        </BrowserRouter>
      </SnackbarProvider>
    );

    expect(global.window.location.href).toContain('/');
    const cardOnTheGallery = screen.getByAltText(`${cardContent.name} art`);
    await userEvent.click(cardOnTheGallery);
    expect(global.window.location.href).toContain(`/card/${cardContent.id}`);
  });
});
