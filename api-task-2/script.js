
        const button = document.getElementById("button");
        const result = document.getElementById("result");

        button.addEventListener("click", async () => {
            const username = document.getElementById("username").value;
            result.innerHTML = "";    
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                if (!response.ok) {
                    result.innerHTML = "<p>User not found!</p>";
                    return;
                }

                const data = await response.json();
                result.innerHTML = `
                    <img src="${data.avatar_url}" alt="Avatar" width="100">
                    <h3>${data.name || data.login}</h3>
                    <p><a href="${data.html_url}">View Profile</a></p>
                `;
            } catch (error) {
                console.error('Error finding user:', error);
                result.innerHTML = "Something went wrong.</p>";
            }
        });
   