import React from "react";

function Tags({ location }) {

    const tagMap = location?.tags?.map((tag) => (
        <li key={tag}>{tag}</li>
    ));

    return (
        <React.Fragment>
            {tagMap}
        </React.Fragment>
    )

}

export default Tags;