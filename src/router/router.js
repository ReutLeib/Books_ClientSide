import React from "react";
import { Route } from "react-router-dom";
import BookList from "../Components/BookList";
import BookByRank from "../Components/BookByRank";
import BookByRankAuthor from "../Components/BookByRankAuthor";
import Header from "../Header";

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={BookList} />
            <Route  path="/BookByRank" component={BookByRank} />
            <Route  path="/BookByRankAuthor" component={BookByRankAuthor} />
        </React.Fragment>
    );}

export default ReactRouter;
