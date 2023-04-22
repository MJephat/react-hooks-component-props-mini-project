import React from 'react';
import Article from './Article';

function ArticleList(props){
    const list = props.blogData;
    const listItem = list.map((lists)=>
    <li key={lists.id}>{lists}</li>)
    ;
    
    return(
        <main>
            <ul>{listItem}</ul>
        </main>
      

    )
}
export default ArticleList;