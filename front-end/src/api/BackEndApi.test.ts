import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import { when } from 'jest-when';
import * as backEndApi from './BackEndApi';

jest.mock('axios');

describe('BackEndApi', () => {
  test('if all cards are returned', async () => {
    const fetchedCards = [
      {
        id: 1,
        name: 'Teysa, Envoy of Ghosts',
        manaCost: '{5}{W}{B}',
        cmc: '7',
        typeLine: 'Legendary Creature — Human Advisor',
        oracleText:
          'Vigilance, protection from creatures\nWhenever a creature deals combat damage to you, destroy that creature. Create a 1/1 white and black Spirit creature token with flying.',
        colors: 'B,W',
        magicSetName: 'Commander 2021',
        rarity: 'rare',
        image:
          'https://c1.scryfall.com/file/scryfall-cards/normal/front/a/b/abb21cf7-c5e6-4be5-8da5-9d29e95e2208.jpg?1625978098',
      },
      {
        id: 4,
        name: 'Onulet',
        manaCost: '{3}',
        cmc: '3',
        typeLine: 'Artifact Creature — Construct',
        oracleText: 'When Onulet dies, you gain 2 life.',
        colors: '',
        magicSetName: 'Masters Edition IV',
        rarity: 'common',
        image:
          'https://c1.scryfall.com/file/scryfall-cards/normal/front/5/e/5e6e91cb-1104-4feb-885b-0a49c0b4e60d.jpg?1562917217',
      },
      {
        id: 6,
        name: 'Technomancer',
        manaCost: '{5}{B}{B}',
        cmc: '7',
        typeLine: 'Artifact Creature — Necron Wizard',
        oracleText:
          'When Technomancer enters the battlefield, mill three cards, then return any number of artifact creature cards with total mana value 6 or less from your graveyard to the battlefield.',
        colors: 'B',
        magicSetName: 'Warhammer 40,000 Commander',
        rarity: 'rare',
        image:
          'https://cards.scryfall.io/normal/front/e/3/e3c493a1-60a7-40e0-8cbc-820479c6402d.jpg?1674058911',
      },
    ];

    (axios.create as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({
        ...fetchedCards,
      }),
    });

    const { result } = renderHook(() => backEndApi);
    const scryFallResponse = await result.current.getAllCards();
    const firstCard = scryFallResponse[0];
    const secondCard = scryFallResponse[1];
    const thirdCard = scryFallResponse[2];

    expect(firstCard.name).toEqual('Teysa, Envoy of Ghosts');
    expect(firstCard.typeLine).toEqual('Legendary Creature — Human Advisor');
    expect(firstCard.image).toEqual(
      'https://c1.scryfall.com/file/scryfall-cards/normal/front/a/b/abb21cf7-c5e6-4be5-8da5-9d29e95e2208.jpg?1625978098'
    );

    expect(secondCard.name).toEqual('Onulet');
    expect(secondCard.typeLine).toEqual('Artifact Creature — Construct');
    expect(secondCard.image).toEqual(
      'https://c1.scryfall.com/file/scryfall-cards/normal/front/5/e/5e6e91cb-1104-4feb-885b-0a49c0b4e60d.jpg?1562917217'
    );

    expect(thirdCard.name).toEqual('Technomancer');
    expect(thirdCard.typeLine).toEqual('Artifact Creature — Necron Wizard');
    expect(thirdCard.image).toEqual(
      'https://cards.scryfall.io/normal/front/e/3/e3c493a1-60a7-40e0-8cbc-820479c6402d.jpg?1674058911'
    );
  });

  test('if given an id the right card is returned', async () => {
    const card = {
      id: 1,
      name: 'Teysa, Envoy of Ghosts',
      manaCost: '{5}{W}{B}',
      cmc: '7',
      typeLine: 'Legendary Creature — Human Advisor',
      oracleText:
        'Vigilance, protection from creatures\nWhenever a creature deals combat damage to you, destroy that creature. Create a 1/1 white and black Spirit creature token with flying.',
      colors: 'B,W',
      magicSetName: 'Commander 2021',
      rarity: 'rare',
      image:
        'https://c1.scryfall.com/file/scryfall-cards/normal/front/a/b/abb21cf7-c5e6-4be5-8da5-9d29e95e2208.jpg?1625978098',
    };

    const mockedFindCardById = jest.fn();
    when(mockedFindCardById).calledWith(1).mockReturnValue(card);
    expect(mockedFindCardById(1).name).toEqual('Teysa, Envoy of Ghosts');
  });

  test('if a new card is saved', async () => {
    const newCard = {
      name: 'Beseech the Queen',
      manaCost: '{2/B}{2/B}{2/B}',
      cmc: 6,
      typeLine: 'Sorcery',
      oracleText:
        "({2/B} can be paid with any two mana or with {B}. This card's mana value is 6.)\nSearch your library for a card with mana value less than or equal to the number of lands you control, reveal it, put it into your hand, then shuffle.",
      colors: 'B',
      magicSetName: 'Planechase',
      rarity: 'uncommon',
      image:
        'https://cards.scryfall.io/normal/front/f/7/f7d6a020-8843-4a97-9d00-86f3928e8acd.jpg?1562843369',
    };

    const mockedInsertNewCard = jest.fn();
    when(mockedInsertNewCard)
      .calledWith(10)
      .mockReturnValue({ ...newCard, id: 10 });

    expect(mockedInsertNewCard(10).id).toEqual(10);
    expect(mockedInsertNewCard(10).name).toEqual('Beseech the Queen');
    expect(mockedInsertNewCard(10).typeLine).toEqual('Sorcery');
  });
});
