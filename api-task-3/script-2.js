const postsContainer = document.getElementById('posts');
const paginationContainer = document.getElementById('pagination');

let allPosts = [];
let page = 1;
let postsPerPage = 10;

async function loadPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  allPosts = await response.json();
  console.log(allPosts);
  
  showPosts();
  showButtons();
}

function showPosts() {
  postsContainer.innerHTML = "";

  let start = (page - 1) * postsPerPage;
  let end = start + postsPerPage;   

  for (let i = start; i < end && i < allPosts.length; i++) {
    let post = allPosts[i];
    let div = document.createElement("div");
    div.innerHTML = `<h2>Title: ${post.title}</h2><p>Body: ${post.body}</p>`;
    postsContainer.appendChild(div);
  }
}

function showButtons() {
  paginationContainer.innerHTML = "";

  let prev = document.createElement("button");
  prev.textContent = "Prev";
  prev.addEventListener("click", function () {
    if (page > 1) {
        page--;
        showPosts();
    }});;

  let next = document.createElement("button");
  next.textContent = "Next";
  next.addEventListener("click", function(){
    if (page < allPosts.length / postsPerPage) {
      page++;
      showPosts();
    }
  });

  paginationContainer.appendChild(prev);
  paginationContainer.appendChild(next);
}

loadPosts();