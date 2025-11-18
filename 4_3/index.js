const API_URL = "http://localhost:3000/jokebook";

document.getElementById("loadCategories").addEventListener("click", async () => {
  const res = await fetch(`${API_URL}/categories`);
  const data = await res.json();

  const list = document.getElementById("categoryList");
  list.innerHTML = "";

  data.forEach(category => {
    const li = document.createElement("li");
    li.textContent = category;
    list.appendChild(li);
  });
});

document.getElementById("randomJoke").addEventListener("click", async () => {
  const res = await fetch(`${API_URL}/all`);
  const data = await res.json();

  let categories = Object.keys(data);
  console.log(data)
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  let randomResponse=data["lameJoke"][0]
  const randomJoke = data[randomCategory][Math.floor(Math.random() * data[randomCategory].length)];
  let htmlRes=`<p>${randomResponse.joke}</p> <p> ${randomResponse.response}</p>`;
  document.getElementById("jokeDisplay").innerHTML = htmlRes
});
