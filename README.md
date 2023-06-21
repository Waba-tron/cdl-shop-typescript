# cdl-shop-typescript

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Used](#technology-used) 
- [Installation](#installation)
- [Usage](#usage)
- [Calculation](#calculation)
- [Features](#features)
- [Limitations](#limitations)
- [Deployment](#limitations)

## Project Overview

CDL submission for web engineer role. This is a UI is a cart system

## Technology Used

- React
- TypeScript
- Jest
- Github Action

## Installation

In the project directory, you can run:

### `npm install`

install node package in route directory

## Usage

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

## Calculation

   This is the algorithm/calculation i went for. The basic concept is the following. Notice i was using the The useRef Hook. This allowed me to persist values between renders. The reason I used this hook is because I was having issues where the total pricing of my items, would always be a state behind. Use ref is great because it allowed me to fix this problem as it directly accesses the DOM directly

    So the way the calculation works is we have a counter 

```javascript
const specialPriceCounter =  useRef<number>(0);
```
    Example: 1

    Once counter reaches condition of special price,
    take away the prices of items * condition 
    
  (Use item A for example)

    total - (price * condition)

    counter = 3 

    total = 1.5 (for 3 units of item A)

    finalTotal = 1.5 (current total) - 1.5 ie (50 * 3)

    Add the special price to the total

    total = 0 + 130

    reset the counter

    counter = 0


```javascript

const items: Item[] = [
  { id: 0, name: "Item A", price: 0.5, specialPrice: 1.3, condition: 3 },
  { id: 1, name: "Item B", price: 0.3, specialPrice: 0.45, condition: 2 },
  { id: 2, name: "Item C", price: 0.2, specialPrice: 0.3, condition: 2 },
  { id: 3, name: "Item D", price: 0.15, specialPrice: 0.2, condition: 2 },
];

  const addItem = (price: number) => {

    specialPriceCounter.current++;
    console.log(specialPriceCounter.current);

    if (specialPriceCounter.current >= condition) {
      const finalTotal = total - condition * price;
      setTotal(finalTotal + specialPrice);

      const finalTotal2 = totalr.current - condition * price;
      totalr.current = finalTotal2 + specialPrice + item.price;

      specialPriceCounter.current = 0;
    } else {
      setTotal(total + price);
      totalr.current = totalr.current + price;
    }

  };
```

## Features

- The UI Caluclate total price of a number of items
- Checkouts items in any order

## Limitations

- If given more time the first thing I would start implementing is improving the calculation algorithm. I think it can difficult to read understand so that would be my first improvement
- Another limitation is it is quite limited as an application so adding new exciting features is a must. Currently the app only lets you calculate the items price in the application and thats that. But maybe having a checkout feature to allow the user to checkout a list of items and making further checkouts along the way

## Deployment
The following yaml file is used for the automated deployment using github actions, simply making changes to the code and pushing those changing will trigger a github actions pipeline to automate the build, test and deployment phases of the app

### `git push`

```yaml
name: deploy

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
    - name: Deploy with gh-pages
      run: |
        git remote set-url origin https://git:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git
        npx gh-pages -d build -u "github-actions-bot <support+actions@github.com>"
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```


