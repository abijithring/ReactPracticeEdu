// File: src/components/NewsList.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// Removed invalid <link> tags. Stylesheets are now included in public/index.html.


const NewsList = (props) => {
    console.log(props.newlistData);
    const NewsTable = () => {
        return (
            <div className="news-table-container">
            <h2> Employees list </h2>
            <table className="table table-striped table-bordered table-hover news-table">
                <thead>
                <tr>
                    {["Name", "Email", "Address", "Phone", "Website"].map((header, index) => (
                    <th key={index}>
                        {header}
                        <div className="input-group">
                        <input type="text" className="form-control" placeholder={`Search ${header}`} />
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="button">
                            <i className="fa fa-search"></i>
                            </button>
                        </div>
                        </div>
                    </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {props.newlistData.map((newsItem, index) => (
                    <tr key={index}>
                    <td>{newsItem.name}</td>
                    <td>{newsItem.email}</td>
                    <td>{newsItem.address}</td>
                    <td>{newsItem.phone}</td>
                    <td>{newsItem.website}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        );
    }
    return (
        <div className="news-list">
            <NewsTable />
        </div>
    );
};

export default NewsList;