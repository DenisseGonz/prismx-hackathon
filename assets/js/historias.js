let params = new URLSearchParams(location.search);
let categoria = params.get('id')

fetch('https://gc751049a04829a-db202111272136.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/prismx/historia/'+categoria, {
  method: 'GET',
})
.then(response => response.json())
.then(data => {
  console.log(data.items)
})
.catch((error) => {
  console.error('Error:', error);
});

