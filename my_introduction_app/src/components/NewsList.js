// File: src/components/NewsList.js
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsList = (props) => {
    const { newlistData } = props;

    // State to track search inputs for each column
    const [nameFilter, setNameFilter] = useState("");
    const [emailFilter, setEmailFilter] = useState("");
    const [addressFilter, setAddressFilter] = useState("");
    const [phoneFilter, setPhoneFilter] = useState("");
    const [websiteFilter, setWebsiteFilter] = useState("");
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    // Filter the data based on the search inputs
    const filteredData = newlistData.filter((newsItem) =>
        newsItem.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
        newsItem.email.toLowerCase().includes(emailFilter.toLowerCase()) &&
        newsItem.address.toLowerCase().includes(addressFilter.toLowerCase()) &&
        newsItem.phone.toLowerCase().includes(phoneFilter.toLowerCase()) &&
        newsItem.website.toLowerCase().includes(websiteFilter.toLowerCase())
    );

    //Sort the data based on the selected column and direction
    const sortedData = [...filteredData].sort((a, b) => {
        if (sortConfig.key) {
            const aValue = a[sortConfig.key].toLowerCase();
            const bValue = b[sortConfig.key].toLowerCase();
            if (aValue < bValue) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (aValue > bValue) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
        }
        return 0;
    });

    // Function to handle sorting when a column header is clicked
    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    }; 

    return (
        <div className="news-table-container">
            <h2>Employees List</h2>
            <table className="table table-striped table-bordered table-hover news-table">
                <thead>
                    <tr>
                        <th key='name' onClick={() => requestSort('name')} style={{ cursor: 'pointer' }}>
                            Name
                            {sortConfig.key === 'name' && (
                                <span>
                                    {sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽'}
                                </span>
                            )}
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Name"
                                    value={nameFilter}
                                    onChange={(e) => setNameFilter(e.target.value)}
                                />
                            </div>
                        </th>
                        <th>
                            Email
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Email"
                                    value={emailFilter}
                                    onChange={(e) => setEmailFilter(e.target.value)}
                                />
                            </div>
                        </th>
                        <th>
                            Address
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Address"
                                    value={addressFilter}
                                    onChange={(e) => setAddressFilter(e.target.value)}
                                />
                            </div>
                        </th>
                        <th>
                            Phone
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Phone"
                                    value={phoneFilter}
                                    onChange={(e) => setPhoneFilter(e.target.value)}
                                />
                            </div>
                        </th>
                        <th>
                            Website
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Website"
                                    value={websiteFilter}
                                    onChange={(e) => setWebsiteFilter(e.target.value)}
                                />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((newsItem, index) => (
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
            <button
                className="btn btn-primary mt-3"
                onClick={() => {
                    setNameFilter("");
                    setEmailFilter("");
                    setAddressFilter("");
                    setPhoneFilter("");
                    setWebsiteFilter("");
                }}
            >
                Clear Filters
            </button>
        </div>
    );
};

export default NewsList;