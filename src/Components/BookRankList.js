import React from 'react';


const BookRankList = ({ books }) => (
  <div className="col-12">
    <ul className="list-inline">
      { books && books.map((item, index) => 
        <li  className="col-2 list-inline-item" key={index}> 
          {item.name} 
        </li> ) }
      </ul>
    </div>
      );

export default BookRankList;