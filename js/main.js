var prodctName=document.getElementById("productname")
var prodctPrice=document.getElementById("productprice")
var productCategory=document.getElementById("productcategory"l)
var productDescription=document.getElementById("productdescription")
var productList=[]

function addProduct() {
  var product={
    name:prodctName.value,
    price:prodctPrice.value,
    Category:productCategory.value,
    description:productDescription.value,
  }
  productList.push(product)
  console.log(productList);
  clearInputValues()  
  displayProduct()
}
function clearInputValues() {
    prodctName.value=""
    prodctPrice.value=""
    productCategory.value=""
    productDescription.value=""
}
localStorage.getItem
function displayProduct(){
    var cartona=""
    for(var i=0 ; i<productList.length ; i++){
        cartona +=` <div class="col-md-4">
            <div class="card">
              <img src="images/imageihone17.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title fw-bold">${productList[i].name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <div class="d-flex justify-content-between">
                  <h2>${productList[i].price}</h2>
                  <div class="d-flex">
                    <button class="btn btn-outline-danger rounded-end-0"><i class="fas fa-trash"></i></button>
                    <button class="btn btn-outline-warning rounded-start-0"><i class="fas fa-edit"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>`

    }
    document.getElementById("rowData").innerHTML=cartona
}

