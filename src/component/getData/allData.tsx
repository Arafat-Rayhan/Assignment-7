// all product
export const getDataByAllBazarProduct = async()=>{
    "use cache"
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    if(!res.ok){
    throw new Error('NOT FOUND')
        
    }
    return res.json()
}
//  all catagories
export const getDataByAllCatagories = async ()=>{
    "use cache"
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
    if(!res.ok){
        throw new Error("not found");
        
    }
    return res.json()
}

// catagori by grop with its bazar idea
export const getDataByGropOfCatagoriName=async({name}:{name:string})=>{
    "use cache"
    const res =await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${name}`)
    if(!res.ok){
        throw new Error ('NOT FOUND')
    }
    return res.json()
}

// 1 ctagori by with 4 poperty
export const getDataBySingelName=async({name}:{name:string})=>{
    "use cache"
   const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/categories/${name}`);

if (!res.ok) {
  throw new Error('not found');
}

return  await res.json();
}


// 1 catagori by detail with all bazar
export const getDataByOneFullDetail=async({id}:{id:string})=>{
    const res =await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${id}`)
    if(!res.ok){
        throw new Error ('NOT FOUND')
    }
    return res.json()
}