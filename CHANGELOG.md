# CHANGELOG

## 0.12.0

### Release date: 2023-02-11

#### Added

- Added tests to ScryFallApi and BackEndApi services and to Card and CardList components.

#### Changed

- Updated version of numerous libs related to testing.
- Changed CHANGELOG structure, now it shows relaeses from newest to oldest.

## 0.11.0

### Release date: 2022-03-19

#### Added

- Added 'find cards by name' functionality.

#### Changed

- Changed browser tab text and icon.
- Standardize the changelog document to use bullet points.

## 0.10.0

### Release date: 2022-03-11

#### Added

- Added loading spinners for async actions.
- Added snackbars for save and delete card actions.

#### Changed

- Changed cursor to be pointer while hovering Card (on home page) and enabled buttons.
- Other minor improvements in styling.

## 0.9.0

### Release date: 2022-02-21

#### Changed

- Improved CardDetails UI.
- Improved 'choose random card' section.

### Removed

- Removed CardForm component.

## 0.8.0

### Release date: 2021-12-14

#### Changed

- Refactored all components to use CSS Modules.
- Minor changes in style.

## 0.7.0

### Release date: 2021-12-13

#### Added

- Created a "card details" page.

#### Fixed

- Removed white area from the cards' box shadow.

## 0.6.0

### Release date: 2021-10-18

#### Changed

- Refactored all components from class to functional.
- Fixed numerous eslint issues.

## 0.5.0

### Release date: 2021-01-24

#### Added

- Added header and footer HTML elements and React components, as well as sections (made project more semantic).
- Chose #B29BFF, #371E30, #EEF1EF and #592A64 as project's colors.
- Added an asset image of a MTG card back as placeholder for the random card spot while the show random card is not clicked.
- Enhanced the applications UI's in general.

## 0.4.0

### Release date: 2020-12-17

#### Added

- Added (a still incomplete coverage of) propTypes.
- Code Climate, eslint configuration.

#### Changed

- Extracted logic from Home page to Card, CardForm and CardList components.
- Fixed numerous eslint issues, some still remain.
- Converted both API handler files from classes to modules.

## 0.3.0

### Release date: 2020-07-03

#### Added

- ScryFall API handler.
- findRandomCard function.
- Form to render the random card on the screen and save it to the database.

## 0.2.0

### Release date: 2020-06-19

#### Added

- CRUD functions for "Card" on the front end.
- README file.
- Basic CORS configuration to allow requests from front end.

## 0.1.0

### Release date: 2020-04-19

#### Added

- The change log itself.
- Entity, repository, service and controller for "Card".
