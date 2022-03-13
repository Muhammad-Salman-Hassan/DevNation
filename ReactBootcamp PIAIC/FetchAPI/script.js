const show = document.querySelector(".showcase");
console.log("FETCH API");
async function getData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1/");
  const jsonData = await data.json();

  console.log(jsonData);
  show.innerText = jsonData.title;
}
getData();

async function PostApi() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Foo",
      body: "Bar my body",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }
  
  );
  const jsonData = await data.json();

  console.log(jsonData);
}
PostApi()
