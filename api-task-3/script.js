const postsContainer = document.getElementById('posts');
const paginationContainer = document.getElementById('pagination');

let allPosts = [];
let currentPage = 1;
const postsPerPage = 10;

async function loadPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    allPosts = await response.json();
    loadPage(currentPage);
    createPaginationControls();
  } catch {
    postsContainer.innerHTML = "<p>Failed to load posts.</p>";
  }
}

function loadPage(page) {
  postsContainer.innerHTML = '';
  allPosts.slice((page-1)*postsPerPage, page*postsPerPage)
          .forEach(post => {
            postsContainer.innerHTML += `<div class="post">
                                            <h2>Title: ${post.title}</h2>
                                            <p>Body: ${post.body}</p>
                                          </div>`;
          });
}

function createPaginationControls() {
  paginationContainer.innerHTML = '';
  const totalPages =(allPosts.length / postsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.innerText = i;
    if(i === currentPage) button.style.backgroundColor = 'blue';
    button.addEventListener('click', () => {
      currentPage = i;
      loadPage(currentPage);
      createPaginationControls();
    });
    paginationContainer.appendChild(button);
  }
}

loadPosts();