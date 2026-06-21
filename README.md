# Web Development Project 3 - Bioinformatics Flashcards Part 2

Submitted by: **Rolake**

This web app: **A flashcard study app built with React that helps users learn bioinformatics terms. Users can guess answers via a text input, navigate sequentially through cards, shuffle the deck, and track their correct-answer streak.**

Time spent: **4.5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can submit a guess into an input box before seeing the flipside of a card**
  - [x] Application features a clearly labeled input box with a submit button where users can type in a guess
  - [x] Clicking on the submit button with an incorrect answer shows visual feedback that it is wrong
  - [x] Clicking on the submit button with a correct answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cards**
  - [x] A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - [x] A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - [x] Both the next and back buttons have visual indication (graying out) when the user is at the beginning or end of the list, with no wrap-around navigation

The following **optional** features are implemented:

- [x] Users can use a shuffle button to randomize the order of the cards
  - [x] Cards remain in the same sequence unless the shuffle button is clicked
- [x] A user's answer may be counted as correct even when it is slightly different from the target answer
  - [x] Case and punctuation differences are ignored when checking answers
- [x] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of displayed cards

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://raw.githubusercontent.com/RolakeOkans/flashcards/main/flashcard_bioinformatics_2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with Kap

## Notes

Learning how to compare typed input against stored answers was tricky at first since exact string matching is very strict — adding lowercase conversion and punctuation stripping fixed that. Implementing the shuffle button using the Fisher-Yates algorithm on an array of indices was the most challenging part.

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
