import React from 'react';
import { useLocation } from 'react-router-dom';

const View = () => {
    const location = useLocation();
    const userData = location.state;

    const columns = ['Name', 'Occupation', 'Gender', 'Phone Number'];

    if (!userData) {
        return <div>No data available.</div>;
    }

    const { userInfo, familyInfo } = userData;

    return (
        <div className='user_box'>
        <div className='user_form'>
            <div className='user_view'>
                <h2>User Information</h2>
                <p><span>Full Name:</span> <span>{userInfo.firstName} {userInfo.lastName}</span></p>
                <p><span>Parent Name:</span> <span>{userInfo.parentsName}</span></p>
                <p><span>Email:</span> <span>{userInfo.email}</span></p>
                <p><span>Phone Number:</span> <span>{userInfo.phoneNumber}</span></p>
                <p><span>Address:</span> <span>{userInfo.address}</span></p>
            </div>

            <div>
                <h2>Family Information</h2>
                <table>
                    <thead>
                        <tr>
                            {columns.map(column => (
                                <th key={column}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {familyInfo.map((familyMember, index) => (
                            <tr key={index}>
                                <td>{familyMember.name}</td>
                                <td>{familyMember.occupation}</td>
                                <td>{familyMember.gender}</td>
                                <td>{familyMember.phoneNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default View;
