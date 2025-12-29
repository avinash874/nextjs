const Products = async ({searchParams}) => {
   const searchParam = await searchParams;
    // console.log(searchParams);

    const category = searchParam?.category || "all";
    const sort = searchParam?.sort || "default";
    const page = searchParam?.page || 1;

    
     return (
     <div>
       Showing {category} products, sorted by {sort}, page {page}
    </div>)
}

export default Products;