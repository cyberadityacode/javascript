function makeHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    console.log(xhr.response.users);
    // console.log(xhr.response.users[0].id);
    callback(xhr.response);
  });

  xhr.open(method, url);
  xhr.send();
}
// https://dummyjson.com/posts/user/5
makeHttpRequest("GET", "https://dummyjson.com/users", (data) => {
  console.log("hi");
  console.log(data.users[0].id);

  makeHttpRequest(
    "GET",
    `https://dummyjson.com/posts/user/${data.users[0].id}`,
    (data) => {
      console.log(data.posts);
    }
  );

  // get comments from post id
  makeHttpRequest("GET", "https://dummyjson.com/comments/post/15", (data) => {
    console.log(data.comments);
  });
});
