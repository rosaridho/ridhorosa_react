import React from "react";

const NotMatch = props => {
    const pathname = window.location.pathname;

    return(
        <section className='content'>
        <h4>Not Found</h4>
        <p>
            page: <b>{pathname}</b> is not found
        </p>
        </section>
    );
};

export default NotMatch;