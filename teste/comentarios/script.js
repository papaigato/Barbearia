const commentForm = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

commentForm.addEventListener('submit', addComment);
window.addEventListener('load', displayCommentsFromStorage);

function addComment(event) {
  event.preventDefault();

  const author = document.getElementById('author').value;
  const commentContent = document.getElementById('comment').value;

  if (author && commentContent) {
    const commentItem = document.createElement('li');
    commentItem.innerHTML = `
      <div class="comment-header">
        <span class="comment-author">${author}</span>
      </div>
      <p class="comment-content">${commentContent}</p>
    `;
    commentList.appendChild(commentItem);

    // Armazenar no Local Storage
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push({ author, commentContent });
    localStorage.setItem('comments', JSON.stringify(comments));

    // Limpar o formulário
    commentForm.reset();
  }
}

function displayCommentsFromStorage() {
  const comments = JSON.parse(localStorage.getItem('comments')) || [];

  comments.forEach(comment => {
    const commentItem = document.createElement('li');
    commentItem.innerHTML = `
      <div class="comment-header">
        <span class="comment-author">${comment.author}</span>
      </div>
      <p class="comment-content">${comment.commentContent}</p>
    `;
    commentList.appendChild(commentItem);
  });
}
