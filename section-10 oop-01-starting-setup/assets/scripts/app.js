class Product {
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}

  createRootElement(tag, cssClasse, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasse) {
      rootElement.className = cssClasse;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>\€${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId, false);
    this.orderProducts = () => {
      console.log("Ordering...");
      console.log(this.items);
    };
    this.render();
  }

  addProduct(product) {
    // this.items.push(product);
    // this.totalOutput.innerHTML = `<h2>Total: \€${this.totalAmount}</h2>`; into the setter
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    // const cartEl = document.createElement("section");
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
    <h2>Total: \€${0}</h2>
    <button>Order Now!</button>
    `;
    // cartEl.className = "cart";
    const orderButton = document.querySelector("button");
    // orderButton.addEventListener("click", () => this.orderProducts());
    orderButton.addEventListener("click", this.orderProducts);
    this.totalOutput = cartEl.querySelector("h2");
    // return cartEl; no need to return
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    // const prodEl = document.createElement("li");
    // prodEl.className = "product-item";
    const prodEl = this.createRootElement("li", "product-item");
    prodEl.innerHTML = `
            <div>
                <img src = "${this.product.imageUrl}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\€${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    // return prodEl; no need class Component return in the DOM already
  }
}

class ProductList extends Component {
  #products = [];

  constructor(renderHookId) {
    super(renderHookId, false);
    this.render();
    this.fetchProducts();
  }

  fetchProducts() {
    this.#products = [
      new Product(
        "Chaussure Riviera Classic toile marine",
        "https://cdn.shopify.com/s/files/1/1608/0685/products/riv_cla_2014_sh20_1000x1000.jpg?v=1592402233",
        "COTTON CANVAS & MESH SLIP ON Classic Toile et Filet Bleu de Travail",
        60.0
      ),
      new Product(
        "Chaussures Riviera Classic jean bleu",
        "https://cdn.shopify.com/s/files/1/1608/0685/products/riv_jea_1053_sh20_1000x1000.jpg?v=1592402823",
        "JEAN SLIP ON Classic Jean Bleu",
        70.0
      ),
    ];
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this.#products) {
      new ProductItem(prod, "prod-list");
    }
  }

  render() {
    // const renderHook = document.getElementById("app"); cut to class Shop
    // const prodList = document.createElement("ul");
    this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);
    if (this.#products && this.#products.length > 0) {
      this.renderProducts();
    }
    // prodList.id = "prod-list"; managed in class ElementAttribute
    // prodList.className = "product-item"; managed in class Component
    //for (const prod of this.products) { moved to method renderProducts() above
    //new ProductItem(prod, "prod-list"); // removed storage in const productItem
    // const prodEl = productItem.render(); const prodEl removed
    // productItem.render(); removed render
    // prodList.append(prodEl); removed because we append from parent class Component
    // }
    // renderHook.append(prodList); cut to class Shop
    // return prodList; no need to return
  }
}

class Shop {
  constructor() {
    this.render();
    // we can add super(); instead or add only this.render(); because we don't need other feature from the base class Component
  }

  render() {
    // const renderHook = document.getElementById("app"); don't need to access

    this.cart = new ShoppingCart("app");
    // const cartEl = this.cart.render(); with super() of constructor of class Component ; don't need to store in a const.
    // this.cart.render(); removed render
    new ProductList("app"); // no more storing in a const productList
    // const prodListEl = productList.render(); no need to store and to return a const
    // productList.render(); removed render

    // renderHook.append(cartEl); no more need with super() of constructor of class Component
    // renderHook.append(prodListEl); no need to append
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    // shop.render(); removed render
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
