
const GlobalFunctions = {

    // filter products by filter 
    handleCountProductsOfEachFilter : (arr, prop) => {
    const res = []
    for (const element of arr) {
        if(element&&element['attributes']&&element['attributes'][prop]){
            if (res.find(e=>e.item['attributes'][prop]==element['attributes'][prop])) {
                res.find(e=>e.item['attributes'][prop]==element['attributes'][prop]).count += 1
            } else {
                res.push({item:element, count:1})
            }
        }
    }
    return(res) 
    },

    // filter products by filter price 
    handleCountProductsOfEachPrice : (arr, prop, prices) => {
    let res = []
    for (let i=0; i<prices.length-1; i++){
        res.push({
            id : prices[i],
            item : [prices[i], prices[i+1]], 
            count : (arr.filter(element=>element['attributes']&&element['attributes'][prop]&&element['attributes'][prop]>prices[i]&&element['attributes'][prop]<prices[i+1])).length
        })
    }
    res = res.filter(e=>e.count>0)
    return(res) 
   },
  
   // get sum of products of category
   handleGetSumOfProductsOfCategory : (categorie) => {

    let sum = categorie["attributes"]["typeprods"]["data"].reduce((sum, curValue)=> {

        return sum += curValue["attributes"]["produits"]["data"].length
      
      }, 0)

      if(categorie["attributes"]["produits"]){
        return sum +categorie["attributes"]["produits"]["data"].length
      }
      else {
        return sum
      }
   },

   // get sum of products of univers
   handleGetSumOfProductsOfUnivers : (univers) => {

    let sum = univers["attributes"]["categories"]["data"].reduce((sum, curValue)=> {

        return sum += GlobalFunctions["handleGetSumOfProductsOfCategory"](curValue)
      
      }, 0)

      return sum
   }

}

export default GlobalFunctions