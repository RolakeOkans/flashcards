# Web Development Project 2 - Bioinformatics Flashcards

Submitted by: **Rolake**

This web app: **A flashcard study app built with React that helps users learn bioinformatics terms. Users can flip cards to see answers and navigate through cards in random order.**

Time spent: **2.5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed
  - [x] A short description of the card set is displayed
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed
- [x] **A single card at a time is displayed**
  - [x] A single card is displayed at a time
  - [x] Only one half of the information pair is displayed at a time
  - [x] Clicking on the card flips it over, showing the back with corresponding information
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contain images in addition to or in place of text
- [x] Cards have different visual styles such as color based on their category
  - [x] Cards are colored based on category: basics (green), tools (blue), field (purple), advanced (orange)

The following **additional** features are implemented:

* A flip hint is shown at the bottom of each card telling users whether to click to see the question or answer

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://raw.githubusercontent.com/RolakeOkans/flashcards/main/flashcards_bioinformatics.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with Kap

## Notes

Learning useState and how state updates trigger re-renders was the main challenge. Understanding how to use a boolean state variable to toggle between showing the question and answer on the card took some getting used to.

## License

    Copyright 2026 Rolake

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
