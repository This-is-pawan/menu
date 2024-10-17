let data = [
  {
    Title: "lunch",
    id: 1,
    img: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "buttermilk pancakes",
    price: "$2.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis aliquam officiis fugiat? Aperiam ratione ut alias, ex repellendus eveniet non facilis dicta modi totam autem nisi aliquid. Enim, non",
  },
  
  {
    Title: "breakfast",
    id: 2,
    img: "https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "buttermilk",
    price: "$6.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis aliquam officiis fugiat? Aperiam ratione ut alias, ex repellendus eveniet non facilis dicta modi totam autem nisi aliquid. Enim, non",
  },

  {
    Title: "breakfast",
    id: 3,
    img: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "buttermilk pancakes",
    price: "$5.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis aliquam officiis fugiat? Aperiam ratione ut alias, ex repellendus eveniet non facilis dicta modi totam autem nisi aliquid. Enim, non",
  },

  {
    Title: "breakfast",
    id: 4,
    img: "https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "buttermilk pancakes",
    price: "$3.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis aliquam officiis fugiat? Aperiam ratione ut alias, ex repellendus eveniet non facilis dicta modi totam autem nisi aliquid. Enim, non",
  },

  {
    Title: "lunch",
    id: 5,
    img: "https://images.pexels.com/photos/227432/pexels-photo-227432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "buttermilk pancakes",
    price: "$4.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis aliquam officiis fugiat? Aperiam ratione ut alias, ex repellendus eveniet non facilis dicta modi totam autem nisi aliquid. Enim, non",
  },
  {
    Title: "lunch",
    id: 6,
    img: "https://images.pexels.com/photos/28895989/pexels-photo-28895989/free-photo-of-delicious-cheesecake-with-lotus-biscuit-topping.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "breakfast",
    price: "$4.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis aliquam officiis fugiat? Aperiam ratione ut alias, ex repellendus eveniet non facilis dicta modi totam autem nisi aliquid. Enim, non",
  },
  {
    Title: "shakes",
    id: 7,
    img: "https://images.pexels.com/photos/28895994/pexels-photo-28895994/free-photo-of-delicious-pancakes-with-whipped-cream-and-chocolate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "buttermilk pancakes",
    price: "$4.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis aliquam officiis fugiat? Aperiam ratione ut alias, ex repellendus eveniet non facilis dicta modi totam autem nisi aliquid. Enim, non",
  },
  {
    Title: "shakes",
    id: 8,
    img: "https://images.pexels.com/photos/907142/pexels-photo-907142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "buttermilk pancakes",
    price: "$4.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis aliquam officiis fugiat? Aperiam ratione ut alias, ex repellendus eveniet non facilis dicta modi totam autem nisi aliquid. Enim, non",
  },
  {
    Title: "shakes",
    id: 9,
    img: "https://images.pexels.com/photos/1065030/pexels-photo-1065030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "buttermilk pancakes",
    price: "$4.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis aliquam officiis fugiat? Aperiam ratione ut alias, ex repellendus eveniet non facilis dicta modi totam autem nisi aliquid. Enim, non",
  },
  {
    Title: "shakes",
    id: 10,
    img: "https://images.pexels.com/photos/948421/pexels-photo-948421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "fruits",
    price: "$4.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis aliquam officiis fugiat? Aperiam ratione ut alias, ex repellendus eveniet non facilis dicta modi totam autem nisi aliquid. Enim, non",
  },
];

let main = document.querySelector(".main");
let btn = document.querySelectorAll(".btn");
let menuItem = document.querySelectorAll(".menu-item");
// console.log(menuItem);

window.addEventListener("DOMContentLoaded", () => {
  let ClickedShow = (filterCategory) => {

    if (filterCategory === "all") {
      let cake = data
        .map((item) => {
          const { id, img, heading, price, text, Title } = item;

          return `<div class="menu-item" data-txt="${Title}">
            <div class="menu-info">
              <img src="${img}" class="image" alt="">
              <div class="text">
                <article class="text-align">
                  <h3>${heading}</h3>
                  <span>${price}</span>
                </article>
                <p>${text}</p>
              </div>
            </div>
          </div>`;
        })
        .join("");

      main.innerHTML = cake;
    } else if (filterCategory === "breakfast" || filterCategory === "lunch" || filterCategory === "shakes") {
      let filteredItems = data.filter((items) => filterCategory === items.Title);

      let Milk = () => {
        return filteredItems
          .map((t) => {
            let { Title, id, img, heading, price, text } = t;

            return `<div class="menu-item" data-txt="${Title}">
              <div class="menu-info">
                <img src="${img}" class="image" alt="">
                <div class="text">
                  <article class="text-align">
                    <h3>${heading}</h3>
                    <span>${price}</span>
                  </article>
                  <p>${text}</p>
                </div>
              </div>
            </div>`;
          })
          .join("");
      };
      main.innerHTML = Milk();
    }
   
  };

  btn.forEach((ev) => {
    ev.addEventListener("click", (e) => {
      let filterCategory = e.target.innerHTML.toLowerCase();
      ClickedShow(filterCategory);
    });
  });
});
