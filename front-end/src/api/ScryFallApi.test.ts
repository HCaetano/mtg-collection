import axios from 'axios';
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

  test('if a different card is returned each time', async () => {
    const firstRandomCard = {
      object: 'card',
      id: '1d4ad89a-3a00-4bf4-a357-4a8a089d4a82',
      oracle_id: 'd23c3613-bc5e-4fc5-939c-62a090c53a79',
      multiverse_ids: [548594],
      mtgo_id: 97512,
      arena_id: 79721,
      tcgplayer_id: 262749,
      cardmarket_id: 608310,
      name: 'Uncharted Haven',
      lang: 'en',
      released_at: '2022-02-18',
      uri: 'https://api.scryfall.com/cards/1d4ad89a-3a00-4bf4-a357-4a8a089d4a82',
      scryfall_uri:
        'https://scryfall.com/card/neo/281/uncharted-haven?utm_source=api',
      layout: 'normal',
      highres_image: true,
      image_status: 'highres_scan',
      image_uris: {
        small:
          'https://cards.scryfall.io/small/front/1/d/1d4ad89a-3a00-4bf4-a357-4a8a089d4a82.jpg?1654569074',
        normal:
          'https://cards.scryfall.io/normal/front/1/d/1d4ad89a-3a00-4bf4-a357-4a8a089d4a82.jpg?1654569074',
        large:
          'https://cards.scryfall.io/large/front/1/d/1d4ad89a-3a00-4bf4-a357-4a8a089d4a82.jpg?1654569074',
        png: 'https://cards.scryfall.io/png/front/1/d/1d4ad89a-3a00-4bf4-a357-4a8a089d4a82.png?1654569074',
        art_crop:
          'https://cards.scryfall.io/art_crop/front/1/d/1d4ad89a-3a00-4bf4-a357-4a8a089d4a82.jpg?1654569074',
        border_crop:
          'https://cards.scryfall.io/border_crop/front/1/d/1d4ad89a-3a00-4bf4-a357-4a8a089d4a82.jpg?1654569074',
      },
      mana_cost: '',
      cmc: 0,
      type_line: 'Land',
      oracle_text:
        'Uncharted Haven enters the battlefield tapped.\nAs Uncharted Haven enters the battlefield, choose a color.\n{T}: Add one mana of the chosen color.',
      colors: [],
      color_identity: [],
      keywords: [],
      produced_mana: ['B', 'G', 'R', 'U', 'W'],
      legalities: {
        standard: 'legal',
        future: 'legal',
        historic: 'legal',
        gladiator: 'legal',
        pioneer: 'legal',
        explorer: 'legal',
        modern: 'legal',
        legacy: 'legal',
        pauper: 'legal',
        vintage: 'legal',
        penny: 'legal',
        commander: 'legal',
        brawl: 'legal',
        historicbrawl: 'legal',
        alchemy: 'legal',
        paupercommander: 'legal',
        duel: 'legal',
        oldschool: 'not_legal',
        premodern: 'not_legal',
      },
      games: ['paper', 'mtgo', 'arena'],
      reserved: false,
      foil: true,
      nonfoil: true,
      finishes: ['nonfoil', 'foil'],
      oversized: false,
      promo: false,
      reprint: false,
      variation: false,
      set_id: '59a2059f-5482-433f-8761-eb2e17859b71',
      set: 'neo',
      set_name: 'Kamigawa: Neon Dynasty',
      set_type: 'expansion',
      set_uri:
        'https://api.scryfall.com/sets/59a2059f-5482-433f-8761-eb2e17859b71',
      set_search_uri:
        'https://api.scryfall.com/cards/search?order=set\\u0026q=e%3Aneo\\u0026unique=prints',
      scryfall_set_uri: 'https://scryfall.com/sets/neo?utm_source=api',
      rulings_uri:
        'https://api.scryfall.com/cards/1d4ad89a-3a00-4bf4-a357-4a8a089d4a82/rulings',
      prints_search_uri:
        'https://api.scryfall.com/cards/search?order=released\\u0026q=oracleid%3Ad23c3613-bc5e-4fc5-939c-62a090c53a79\\u0026unique=prints',
      collector_number: '281',
      digital: false,
      rarity: 'common',
      flavor_text: 'Untouched by mortal or kami, unspoiled by their wars.',
      card_back_id: '0aeebaf5-8c7d-4636-9e82-8c27447861f7',
      artist: 'Lorenzo Lanfranconi',
      artist_ids: ['334dd388-1e26-4181-8eca-f9c097e29c5e'],
      illustration_id: 'afa67360-8d69-4664-aa69-9017fd98ba30',
      border_color: 'black',
      frame: '2015',
      full_art: false,
      textless: false,
      booster: true,
      story_spotlight: false,
      edhrec_rank: 4903,
      penny_rank: 12020,
      prices: {
        usd: '0.06',
        usd_foil: '0.15',
        usd_etched: null,
        eur: '0.02',
        eur_foil: '0.12',
        tix: '0.01',
      },
      related_uris: {
        gatherer:
          'https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=548594',
        tcgplayer_infinite_articles:
          'https://infinite.tcgplayer.com/search?contentMode=article\\u0026game=magic\\u0026partner=scryfall\\u0026q=Uncharted+Haven\\u0026utm_campaign=affiliate\\u0026utm_medium=api\\u0026utm_source=scryfall',
        tcgplayer_infinite_decks:
          'https://infinite.tcgplayer.com/search?contentMode=deck\\u0026game=magic\\u0026partner=scryfall\\u0026q=Uncharted+Haven\\u0026utm_campaign=affiliate\\u0026utm_medium=api\\u0026utm_source=scryfall',
        edhrec: 'https://edhrec.com/route/?cc=Uncharted+Haven',
      },
      purchase_uris: {
        tcgplayer:
          'https://www.tcgplayer.com/product/262749?page=1\\u0026utm_campaign=affiliate\\u0026utm_medium=api\\u0026utm_source=scryfall',
        cardmarket:
          'https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall\\u0026searchString=Uncharted+Haven\\u0026utm_campaign=card_prices\\u0026utm_medium=text\\u0026utm_source=scryfall',
        cardhoarder:
          'https://www.cardhoarder.com/cards/97512?affiliate_id=scryfall\\u0026ref=card-profile\\u0026utm_campaign=affiliate\\u0026utm_medium=card\\u0026utm_source=scryfall',
      },
    };
    const secondRandomCard = {
      object: 'card',
      id: '266a6a0d-5c56-47f5-92d0-f883f1bb7630',
      oracle_id: '518d0773-40fa-4b02-a89e-5711c19617cd',
      multiverse_ids: [179537],
      mtgo_id: 32262,
      mtgo_foil_id: 32263,
      tcgplayer_id: 31817,
      cardmarket_id: 20893,
      name: 'Talon Trooper',
      lang: 'en',
      released_at: '2009-04-30',
      uri: 'https://api.scryfall.com/cards/266a6a0d-5c56-47f5-92d0-f883f1bb7630',
      scryfall_uri:
        'https://scryfall.com/card/arb/14/talon-trooper?utm_source=api',
      layout: 'normal',
      highres_image: true,
      image_status: 'highres_scan',
      image_uris: {
        small:
          'https://cards.scryfall.io/small/front/2/6/266a6a0d-5c56-47f5-92d0-f883f1bb7630.jpg?1562640184',
        normal:
          'https://cards.scryfall.io/normal/front/2/6/266a6a0d-5c56-47f5-92d0-f883f1bb7630.jpg?1562640184',
        large:
          'https://cards.scryfall.io/large/front/2/6/266a6a0d-5c56-47f5-92d0-f883f1bb7630.jpg?1562640184',
        png: 'https://cards.scryfall.io/png/front/2/6/266a6a0d-5c56-47f5-92d0-f883f1bb7630.png?1562640184',
        art_crop:
          'https://cards.scryfall.io/art_crop/front/2/6/266a6a0d-5c56-47f5-92d0-f883f1bb7630.jpg?1562640184',
        border_crop:
          'https://cards.scryfall.io/border_crop/front/2/6/266a6a0d-5c56-47f5-92d0-f883f1bb7630.jpg?1562640184',
      },
      mana_cost: '{1}{W}{U}',
      cmc: 3,
      type_line: 'Creature — Bird Scout',
      oracle_text: 'Flying',
      power: '2',
      toughness: '3',
      colors: ['U', 'W'],
      color_identity: ['U', 'W'],
      keywords: ['Flying'],
      legalities: {
        standard: 'not_legal',
        future: 'not_legal',
        historic: 'not_legal',
        gladiator: 'not_legal',
        pioneer: 'not_legal',
        explorer: 'not_legal',
        modern: 'legal',
        legacy: 'legal',
        pauper: 'legal',
        vintage: 'legal',
        penny: 'legal',
        commander: 'legal',
        brawl: 'not_legal',
        historicbrawl: 'not_legal',
        alchemy: 'not_legal',
        paupercommander: 'legal',
        duel: 'legal',
        oldschool: 'not_legal',
        premodern: 'not_legal',
      },
      games: ['paper', 'mtgo'],
      reserved: false,
      foil: true,
      nonfoil: true,
      finishes: ['nonfoil', 'foil'],
      oversized: false,
      promo: false,
      reprint: false,
      variation: false,
      set_id: 'db486ec5-141d-4781-9ee5-5456926934c1',
      set: 'arb',
      set_name: 'Alara Reborn',
      set_type: 'expansion',
      set_uri:
        'https://api.scryfall.com/sets/db486ec5-141d-4781-9ee5-5456926934c1',
      set_search_uri:
        'https://api.scryfall.com/cards/search?order=set&q=e%3Aarb&unique=prints',
      scryfall_set_uri: 'https://scryfall.com/sets/arb?utm_source=api',
      rulings_uri:
        'https://api.scryfall.com/cards/266a6a0d-5c56-47f5-92d0-f883f1bb7630/rulings',
      prints_search_uri:
        'https://api.scryfall.com/cards/search?order=released&q=oracleid%3A518d0773-40fa-4b02-a89e-5711c19617cd&unique=prints',
      collector_number: '14',
      digital: false,
      rarity: 'common',
      flavor_text:
        '"The volcanic winds make a maze of the skies of Jund. If we mean to invade, we must first learn their invisible paths."',
      card_back_id: '0aeebaf5-8c7d-4636-9e82-8c27447861f7',
      artist: 'Matt Stewart',
      artist_ids: ['20871267-2d8a-41d5-b03a-be3d557c5734'],
      illustration_id: 'a391f754-f017-428f-9cb4-91bbc7ec7de5',
      border_color: 'black',
      frame: '2003',
      full_art: false,
      textless: false,
      booster: true,
      story_spotlight: false,
      edhrec_rank: 22342,
      penny_rank: 5909,
      prices: {
        usd: '0.04',
        usd_foil: '0.11',
        usd_etched: null,
        eur: '0.02',
        eur_foil: '0.23',
        tix: '0.03',
      },
      related_uris: {
        gatherer:
          'https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=179537',
        tcgplayer_infinite_articles:
          'https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Talon+Trooper&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
        tcgplayer_infinite_decks:
          'https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Talon+Trooper&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
        edhrec: 'https://edhrec.com/route/?cc=Talon+Trooper',
      },
      purchase_uris: {
        tcgplayer:
          'https://www.tcgplayer.com/product/31817?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
        cardmarket:
          'https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Talon+Trooper&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall',
        cardhoarder:
          'https://www.cardhoarder.com/cards/32262?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall',
      },
    };

    (axios.create as jest.Mock).mockReturnValue({
      get: jest
        .fn()
        .mockReturnValueOnce(firstRandomCard)
        .mockReturnValueOnce(secondRandomCard),
    });

    const { result } = renderHook(() => scryFallApi);

    const scryFallFirstResponse = await result.current.findRandomCard();
    expect(scryFallFirstResponse.name).toEqual('Uncharted Haven');
    expect(scryFallFirstResponse.type_line).toEqual('Land');

    const scryFallSecondResponse = await result.current.findRandomCard();
    expect(scryFallSecondResponse.name).toEqual('Talon Trooper');
    expect(scryFallSecondResponse.type_line).toEqual('Creature — Bird Scout');
  });
});
