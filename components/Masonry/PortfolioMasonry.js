"use client";

import React, { useState } from "react";
import PortfolioItem from "@/components/Cards/PortfolioItem";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="pagination flex">
      {pageNumbers.map((pageNumber) => (
        <div
          key={pageNumber}
          className={`page-control-button cursor-pointer ${
            pageNumber === currentPage ? "page-control-active" : ""
          }`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </div>
      ))}
    </div>
  );
}

const PortfolioMasonry = ({ portfolioItems, equal = false }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = equal ? 6 : 4;

  function paginateItems(items, page, itemsPerPage) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

  const paginatedItems = paginateItems(
    portfolioItems,
    currentPage,
    itemsPerPage
  );

  return (
    <div className="portfolio-masonry">
      <div
        className={`masonry relative ${
          !equal
            ? "flex flex-wrap"
            : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        } justify-start my-4 md:my-16`}
      >
        {!equal &&
          paginatedItems.map((item, index) => (
            <div
              className={`portfolio-item w-[90%] ${
                index % 4 === 0 || index % 4 === 3 ? "xl:w-[64%]" : "xl:w-[32%]"
              } mx-3`}
              key={index}
            >
              <PortfolioItem
                category={item.category}
                url={item.url}
                image={item.image}
                title={item.title}
              />
            </div>
          ))}
        {equal &&
          paginatedItems.map((item, index) => (
            <div className={`portfolio-item w-[90%] mx-3`} key={index}>
              <PortfolioItem
                category={item.category}
                url={item.url}
                image={item.image}
                title={item.title}
              />
            </div>
          ))}
      </div>
      <div className="pagination flex justify-center mt-7 space-x-1">
        <div
          className="page-control-button"
          onClick={() => {
            if (currentPage !== 1) {
              handlePageChange(currentPage - 1);
            }
          }}
        >
          <BiChevronLeft className="w-6 h-6" />
        </div>

        {/* Render pagination component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        <div
          className="page-control-button"
          onClick={() => {
            if (currentPage !== totalPages) {
              handlePageChange(currentPage + 1);
            }
          }}
        >
          <BiChevronRight className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioMasonry;
