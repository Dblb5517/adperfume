import Product from "../product/Product";
import "./shop.scss";
import data from "../../data.js";
import React, { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const Shop = ({searchValue}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / 20);

  useEffect(()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },[currentPage])

  return (
    <>
      <div className="shop">
        {data
        .filter((item)=>{
          return item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
        })
        .slice((currentPage - 1) * 20, currentPage * 20).map((item) => {
          return <Product item={item} />;
        })}
      </div>
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default Shop;
