# Project Name

Short project description goes here.

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Production Build](#production-build)

---

## Introduction

Briefly describe the project, its purpose, and any relevant background information.

---

## Features

# Key features or functionalities of the project.

- Product Fetching: fetching products from FakeStore API
- Product Display: displaying products in grid format and showing relevent information - title, price and rating.
- Search: users can search products by typing title or description either by clickinig on the input or by pressing ctrl+k
- Product Details Page: each product has a product details page which have all the information about the product
- Product Filtering By Category: the products can be filtered by clicking on the category buttons
- Sorting Products: products can be sorted based on 4 things - price(high to low), price(low to high), rating(high to low), rating(low to high)
- Shopping Cart Functionality: users cab add product to cart and remove product from cart. users can view the cart contents in the cart page
- Persist Shopping Cart: cart state is stored inside localstorage
- Error Handling By Toasts Notification: toasts notification renders on adding product to cart or removing products from cart
- Global State Management by context api
- Performance Optimization: using techniques like lazy loading and code splitting for better performance

---

## Prerequisites

Specify any prerequisites or requirements needed to run the project. For example:

- Node.js (version)
- npm (version)

---

## Installation

Provide step-by-step instructions on how to install and set up the project locally.

1. Clone the repository:

   ```bash
   git clone https://github.com/barkha-gupta/bazaar.git

   ```

2. Navigate into the project directory:

```bash
 cd bazaar

```

3. Install dependencies using npm:

```bash
 npm install

```

4. Development

```bash
 npm run dev

```

This command starts the Vite development server. It will automatically open your default browser with the application running at http://localhost:5173/.

## Dependencies

The main dependencies and libraries used in the project are:

1. React
2. React Router
3. Vite
4. Tailwind

---

## Production Build

To build the project for production:

```bash
 npm run dev

```
