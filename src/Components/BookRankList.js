
import React from 'react';
import Idea from './Book'

const BookRankList = ({ books, i }) => (
  <div>
   { books && books.map((item, index) => 
       <div key={'container'+i}className="card" style={{width: 18 + 'rem'}}>
         <div className="card-body">
          <Idea key={'book'+i} index={i}>
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.author.nationality}</p>
              <p className="card-text">{item.author.age}</p>
              <p className="card-text">{item.rank}</p>
          </Idea>
        </div>
      </div>
    )}
  </div>
    
  );

export default BookRankList;