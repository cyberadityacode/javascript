/* function getData(){
  return 'data retrieved'
} */

/* async function getData(){  //Promise {<fulfilled>: 'data retrieved'}
  return 'data retrieved'
}

getData()  */

/* async function makeRequest() {
  const response = fetch('https://httpbin.org/delay/5000')
  response.then((response)=> response.json()).then((data)=>{
    console.log(data);
  })
}

makeRequest() */

//using await keyword

/* async function makeRequest() {
  const response = await fetch('https://httpbin.org/delay/5000')
  console.log(response);
  console.log('hi');
}
 */
async function makeRequest() {
  const response = await (await fetch('https://httpbin.org/delay/5000')).json()
  // console.log(response);
  return response
} 

makeRequest().then(console.log)