import React, { Component } from 'react'

class BookByRank extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form action="https://books-ranking.herokuapp.com/bookByRank/" method="POST">
                  <label>
                    <p> book rank parameter is number must be under, equal 10</p>
                    Rank:
                    <input type="text" name="rank" />
                  </label>
                  <input type="submit" value="Send" />
                </form>
            </div>
        )
    }
}
export default BookByRank
