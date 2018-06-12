import React, { Component } from 'react'

class BookByRankAuthor extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form action="https://books-ranking.herokuapp.com/bookRankAuthor/" method="POST">
                    <label>
                        Rank:
                        <input type="text" name="rank" />
                      </label>
                    <label>
                        Author:
                        <input type="text" name="author_rank" />
                      </label>
                    <input type="submit" value="Send" />
                </form>
            </div>
        )
    }
}
export default BookByRankAuthor