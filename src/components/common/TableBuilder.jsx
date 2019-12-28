import React from 'react';

const TableBuilder = ({ columns, data }) => {
    console.log(data);

    const parseData = (columns, item) => {
        //console.log("item", item)
        
        const recursiveParser = (columnName, item) => {
            
            for(let key in item) {
                if (key === columnName) {
                    console.log(item[key])
                    return <td>{item[key]}</td>
                }
            }
            
            //Object.entries(item => console.log("ITEM",item))

            // for (let [key, value] of Object.entries(item)) {
            //     console.log(key,value)
            //     if (key === columnName) return <td>{value ? value : "unknown"}</td>
            //     if (value && typeof value === 'object') {
            //         recursiveParser(value);
            //     }
            // }
        }

        Object.keys(columns).map(columnName => {
            console.log(columnName)
            recursiveParser(columnName, item);
        })
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    {Object.values(columns).map((columnTitle, i) => <th key={i}>{columnTitle}</th>)}
                    {/* <th>Title</th>
                <th>Author</th>
                <th>Category</th> */}
                </tr>
            </thead>
            <tbody>
                {data.map(item => {
                    return (
                        <tr key={item.id}>
                            {parseData(columns, item)}
                            {/* <td>

                            <a className="btn btn-light"
                            href={"http://pluralsight.com/courses/" + course.slug}>
                                Watch
                            </a>
                        </td>
                        <td>
                            <Link to={"/course/" + course.slug}>{course.title}</Link>
                        </td>
                        <td>{course.authorId}</td>
                        <td>{course.category}</td> */}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TableBuilder;