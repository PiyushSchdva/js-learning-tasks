
  const postsContainer = document.getElementById('posts');

  // Step 2: Fetch data from API
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) // convert response into JSON
    .then(data => {
      
      const firstTenPosts = data.slice(0, 10);
      // console.log(firstTenPosts);
      
      firstTenPosts.forEach(post => {
        // Create a div for each post
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        // Add post title and body
        postDiv.innerHTML = `
          <h2>Title: ${post.title}</h2>
          <p>Body: ${post.body}</p>
        `;

        // Append to container
        postsContainer.appendChild(postDiv);
      });
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
      postsContainer.innerHTML = "<p>Failed to load posts.</p>";
    });;