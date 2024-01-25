const burgerMenu = document.querySelector("#burger-menu");

// nav item
const nav = document.querySelector("#nav");

const navbar = document.querySelector("#navbar");
burgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const gridProduct = document.querySelector("#grid-products");

const fetchProduk = async () => {
  const response = await fetch("https://fakestoreapi.com/products?limit=10");
  return await response.json();
};

let element = "";
fetchProduk().then((res) => {
  res.forEach((product, idx) => {
    element += `<div class="group  p-2 rounded-sm  relative cursor-pointer">
        <div class="aspect-h-1 h-72 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-72">
          <img
            src=${product.image}
            alt="Front of men&#039;s Basic Tee in black."
            class="h-full w-full object-contain lg:h-full lg:w-full"
          />
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-800">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${product.title}
            </h3>

            <p class="text-sm   text-gray-900 font-semibold md:hidden "> $${product.price}</p>
            <p class="mt-1 text-sm text-gray-800">
              Category: ${product.category}
            </p>
            <p class="mt-1 text-sm text-gray-800">
              Rating ${product.rating.rate} || Review ${product.rating.count}
            </p>
          </div>
          <p class="text-sm   text-gray-900 font-semibold md:block hidden"> $${product.price}</p>
        </div>
      </div>`;
  });
  gridProduct.innerHTML = element;
});

window.addEventListener("scroll", () => {
  scrollCheck();
});

function scrollCheck() {
  if (window.scrollY > navbar.scrollTop) {
    console.log("oke");
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
}

scrollCheck();
