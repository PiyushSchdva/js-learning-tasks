
  const postsContainer = document.getElementById('posts');

  fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      
      const firstTenPosts = data.slice(0, 10);
      
      firstTenPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        postDiv.innerHTML = `
          <h2>Title: ${post.title}</h2>
          <p>Body: ${post.body}</p>
        `;

        postsContainer.appendChild(postDiv);
      });
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
      postsContainer.innerHTML = "<p>Failed to load posts.</p>";
    });;