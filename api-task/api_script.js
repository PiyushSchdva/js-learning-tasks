const postsContainer = document.getElementById('posts');

async function loadPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
    

    data.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      const title = document.createElement("h2");
      title.textContent = `Title: ${post.title}`

      const body = document.createElement("p")
      body.textContent = `Body: ${post.body}`

      postsContainer.appendChild(postDiv);
      postDiv.append(title);
      title.append(body);
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    postsContainer.innerHTML = "<p>Failed to load posts.</p>";
  }
}

loadPosts();