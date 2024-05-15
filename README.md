
  <h1 align="center">
    <br>
    <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://github.com/taisprestes01/tradeogre-api/assets/108246691/dec0b4a0-1225-491b-8859-dc0f052b388c" alt="Markdownify" width="300"></a>
    <br>
    TradeOgre API
    <br>
  </h1> 

  <h4 align="center">
    TradeOgre API provides an easy to use API for anyone to access the market.
  </h4>

  <p align="center">
    <a href="https://www.npmjs.com/package/npm/v/9.7.1">
      <img src="https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&ts=1683906897&type=6e&v=9.7.1&x2=0">
    </a>
  </p>

  <p align="center">
    <a href="#key-features">Key Features</a> •
    <a href="#how-to-use">How To Use</a> •
    <a href="#wallet-created">Wallet created</a> •
    <a href="#support">Support</a> •
    <a href="#you-may-also-like">You may also like</a> 
  </p>

  <h2>Key Features</h2>
  <ul>
    <li>List Markets</li>
    <li>Get Order Book</li>
    <li>Get Ticker</li>
    <li>Get Trade History</li>
    <li>Submit Sell Order</li>
    <li>Cancel Order</li>
    <li>Get Orders</li>
    <li>Get Order</li>
    <li>Get Balance</li>
    <li>Get Balances</li>
  </ul>
  
  <h2>How To Use</h2>
  <p>
    To clone and run this application, you'll need <a href="https://git-scm.com">Git</a> and <a href="https://nodejs.org/en/download/">Node.js</a> (which comes with <a href="http://npmjs.com">npm</a>) installed on your computer. From your command line:
  </p>
  <pre>
    <code>
      # Clone this repository
      $ git clone https://github.com/taisprestes01/tradeogre-api

      # Install Node
      - https://nodejs.org/en

      # Go into the repository
      $ cd tradeogre-api

      # Install dependencies
      $ npm install

      # Run the app
      $ npm run start:watch
    </code>
  </pre>

  <h3>Using the Routes</h3>
  <p>Here's how you can use them:</p>

  <p>Get all balances: This route returns all the balances in your TradeOgre account.</p>
  <pre><code>http://localhost:3333/getbalances</code></pre>

  <p>Get balance of a specific currency: This route returns the balance of a specific currency in your TradeOgre account. Replace :currency with the symbol of the currency.</p>
  <pre><code>http://localhost:3333/getbalance/:currency</code></pre>

  <p>Get all orders: This route returns all your orders in TradeOgre.</p>
  <pre><code>http://localhost:3333/getOrders</code></pre>

  <p>Get a specific order: This route returns a specific order. Replace :uuid with the UUID of the order.</p>
  <pre><code>http://localhost:3333/getOrder/:uuid</code></pre>

  <p>Cancel an order: This route cancels a specific order. Replace :uuid with the UUID of the order.</p>
  <pre><code>http://localhost:3333/cancelOrder/:uuid</code></pre>

  <h2>Support</h2>
  <a href="https://www.buymeacoffee.com/taisprestek" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/black_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

