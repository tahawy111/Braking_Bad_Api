// let json = JSON.parse("https://api.github.com/users/tahawy111/repos");
const api = "https://www.breakingbadapi.com/api/characters/";
async function getData() {
  const response = await fetch(api);
  const data = await response.json();
  console.log(data[0]);
  printData(data);
}
function printData(data) {
  const content = document.getElementById("content");
  const header = document.getElementById("header");
  header.innerHTML += `
        <select class="form-control" onchange="getCh(this.value)">
        <option>الرجاء اختيار ممثل</option>
        ${data.map((n) => `<option>${n.name}</option>`)}
        </select>
  `;
}

async function getCh(e) {
  const response = await fetch(`${api}?name=${e}`);
  const data = await response.json();
  content.innerHTML = `
        <div class="card" style="width: 25rem">
        <img src="${data[0].img}" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text mb-3">
            <h3 class="card-title">${data[0].name}(${data[0].nickname})</h3>
            <h6 class="card-subtitle mb-2 text-muted">occupation: ${data[0].occupation}</h6>
          </p>
        </div>
      </div>
  `;
}

getData();
