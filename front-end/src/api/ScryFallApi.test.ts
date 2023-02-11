import axios from 'axios';
import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import * as scryFallApi from './ScryFallApi';

jest.mock('axios');

describe('ScryFall API', () => {
  test('if requested card is returned', async () => {
    const card = {
      name: 'Teysa, Envoy of Ghosts',
      typeLine: 'Legendary Creature — Human Advisor',
      image:
        'https://cards.scryfall.io/normal/front/a/b/abb21cf7-c5e6-4be5-8da5-9d29e95e2208.jpg?1625978098',
    };

    (axios.create as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({
        data: card,
      }),
    });

    const { result } = renderHook(() => scryFallApi);
    const scryFallResponse = await result.current.findCardByName();

    expect(scryFallResponse.data.name).toEqual('Teysa, Envoy of Ghosts');
    expect(scryFallResponse.data.typeLine).toEqual(
      'Legendary Creature — Human Advisor'
    );
    expect(scryFallResponse.data.image).toEqual(
      'https://cards.scryfall.io/normal/front/a/b/abb21cf7-c5e6-4be5-8da5-9d29e95e2208.jpg?1625978098'
    );
  });
});
