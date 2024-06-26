// Sample data for posts (you can replace this with actual data fetched from a server or database)
const posts = [
    {
        title: "Review",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni, accusantium consequatur harum incidunt voluptas eligendi vitae sunt ipsam praesentium.",
        author: "Unknown",
        date: "January XX, 20XX"
    },
    {
        title: "Review",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni, accusantium consequatur harum incidunt voluptas eligendi vitae sunt ipsam praesentium.",
        author: "Unknown",
        date: "January XX, 20XX"
    },
    {
        title: "Review",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni, accusantium consequatur harum incidunt voluptas eligendi vitae sunt ipsam praesentium.",
        author: "Unknown",
        date: "January XX, 20XX"
    }
];

// Function to generate HTML for each post and append to the blog-posts container
function renderPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    posts.forEach(post => {
        const postHTML = `
            <article class="post">
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p class="author">Written by ${post.author}</p>
                <p class="date">Published on ${post.date}</p>
            </article>
        `;
        blogPostsContainer.innerHTML += postHTML;
    });
}

// Render the posts when the page loads
window.addEventListener('load', renderPosts);
