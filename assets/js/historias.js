let params = new URLSearchParams(location.search);
//alert(params.getAll('nam'))

fetch('https://gc751049a04829a-db202111272136.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/prismx/historias/', {
  method: 'GET',


})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});