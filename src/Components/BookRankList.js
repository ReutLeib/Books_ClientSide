
import React from 'react';

const BookRankList = ({ books, i }) => (
  <div>
   { books && books.map( (item, index) => 
       <div key={'container'+i}className="card" style={{width: 18 + 'rem'}}>
         <div className="card-body">
          <div key={'book'+i} index={i} >
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.author.nationality}</p>
              <p className="card-text">{item.author.age}</p>
              <p className="card-text">{item.rank}</p>
          </div>
        </div>
      </div>
    )}
  </div>
    
  );

export default BookRankList;