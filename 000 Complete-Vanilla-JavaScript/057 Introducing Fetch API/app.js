/* fetch('https://dummyjson.com/products').then((response)=>{
  // console.log(response); // it is response obj, data is present in body
  console.log(response.json()); // when called with json, products are displayed 
  
}) */

/* fetch("https://dummyjson.com/products").
then((response) => response.json()).
then((json)=>console.log(json))
 */


fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Some random post added',
    category: 'books'
    /* other post data */
  })
})
.then(res => res.json())
.then(console.log).catch((error)=> console.log(error))