import { render, screen } from '@testing-library/react';
import SnackbarProvider from 'react-simple-snackbar';
import { BrowserRouter } from 'react-router-dom';
import CardList from './CardList';

describe('CardList | component | unit test', () => {
  const cardList = [
    {
      id: 1,
      name: 'Teysa, Envoy of Ghosts',
      image:
        'https://c1.scryfall.com/file/scryfall-cards/normal/front/a/b/abb21cf7-c5e6-4be5-8da5-9d29e95e2208.jpg?1625978098',
    },
    {
      id: 4,
      name: 'Onulet',
      image:
        'https://c1.scryfall.com/file/scryfall-cards/normal/front/5/e/5e6e91cb-1104-4feb-885b-0a49c0b4e60d.jpg?1562917217',
    },
  ];

  test('if CardList renders the gallery', () => {
    render(
      <SnackbarProvider>
        <BrowserRouter>
          <CardList cards={cardList} />
        </BrowserRouter>
      </SnackbarProvider>
    );

    const cards = screen.getAllByRole('img');
    expect(cards).toHaveLength(2);

    const firstCard = cards[0];
    expect(firstCard).toHaveAttribute(
      'src',
      'https://c1.scryfall.com/file/scryfall-cards/normal/front/a/b/abb21cf7-c5e6-4be5-8da5-9d29e95e2208.jpg?1625978098'
    );
    expect(firstCard).toHaveAttribute('alt', 'Teysa, Envoy of Ghosts art');

    const secondCard = cards[1];
    expect(secondCard).toHaveAttribute(
      'src',
      'https://c1.scryfall.com/file/scryfall-cards/normal/front/5/e/5e6e91cb-1104-4feb-885b-0a49c0b4e60d.jpg?1562917217'
    );
    expect(secondCard).toHaveAttribute('alt', 'Onulet art');
  });

  test('if empty state message shows', () => {
    render(
      <SnackbarProvider>
        <BrowserRouter>
          <CardList cards={[]} />
        </BrowserRouter>
      </SnackbarProvider>
    );

    const emptyStateMessage = screen.getByText('There are no cards to show.');
    expect(emptyStateMessage).toBeVisible();
  });
});
