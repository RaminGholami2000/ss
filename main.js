let input = document.querySelector("input");
let html = "";
input.addEventListener("keyup", function () {
  let searchItem = input.value.trim();

  let regex = new RegExp(searchItem, "i");
  async function fetchData() {
    let data = await fetch("https://ramingholami2000.github.io/api/");
    let res = await data.json();

    let filterData = res.filter((item) => regex.test(item.name));
    if (input.value.length > 0) {
      html = filterData.map((elem) => {
        console.log(elem);
        return `<div  class="col-4 bg-dark text-white"> 
        <h2>${elem.name}</h2>
        <img src=${elem.image} alt=""  class="img-fluid w-100">
        <p>
        ${elem.text}
        </p>
        </div>`;
      });
      document.querySelector(".row").innerHTML = html;
    } else {
      document.querySelector(".row").innerHTML = "";
    }
  }
  fetchData();
});
