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
            <Route exact path="/2017-2018/dcs/dev_22/client_app/" component={BookList} />
            <Route  path="/2017-2018/dcs/dev_22/client_app/BookByRank" component={BookByRank} />
            <Route  path="/2017-2018/dcs/dev_22/client_app/BookByRankAuthor" component={BookByRankAuthor} />
        </React.Fragment>
    );}

export default ReactRouter;
