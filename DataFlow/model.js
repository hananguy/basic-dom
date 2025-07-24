const posts = [
  { name: 'Eyal', text: 'Hello everyone!' },
  { name: 'Dana', text: 'How are you today?' },
  { name: 'Tal', text: 'Honestly, great!' }
];
export const GetPosts = function()
{
    return posts;
}
export const AddPost = function(userName, userText)
{
    posts.push({name: userName, text: userText});
}