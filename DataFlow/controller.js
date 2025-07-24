import { GetPosts, AddPost } from "./model.js";
const render = function()
{
    const postsList = document.getElementById("posts")
    postsList.innerHTML = ''
    const posts = GetPosts();

    for(const post of posts)
    {
        const postBy = post.name;
        const postContent = post.text;
        const postByDiv = document.createElement("div");
        postByDiv.textContent = `${postBy}: ${postContent}`;
        postsList.append(postByDiv);
    }
}
document.addEventListener('DOMContentLoaded', () => 
{
    render();
    const sumbitBtn = document.getElementById("submit")
    sumbitBtn.addEventListener("click", () =>
    {
        const nameInput = document.getElementById("nameInput");
        const textInput = document.getElementById("textInput");

        AddPost(nameInput.value, textInput.value);
        nameInput.value = ""
        textInput.value = ""
        render();
    })
})
