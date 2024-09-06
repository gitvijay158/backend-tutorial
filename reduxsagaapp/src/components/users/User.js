import '../../App.css';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers, updateUser, deleteUser } from '../../redux/actions/userActions';

function Users() {

  const dispatch = useDispatch();
  
  // Ensure that 'user' corresponds to the key in your rootReducer
  const users = useSelector((state) => state.userData?.users); // Safe access in case it's undefined

  useEffect(() => {
    dispatch(loadUsers());
    
  }, [dispatch]);

  // dispatch({ type: LOAD_USERS });

  const updateUserRecord = (userId) => {

    const updatedUserData = {
      id: userId,
      role_name: 'Vice President',
      user_name: 'Anurag Sahni',
      user_type: 'Devops',
      roleId: 45,
      created_date: '2023-09-05',

      
    };

    // console.log('Update User Record: ', userId);
    dispatch(updateUser(userId, updatedUserData));
  };

  const deleteUserRecord = (userId) => {
    // console.log('Delete User Record: ', userId);
    dispatch(deleteUser(userId));
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Get day and add leading 0 if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed) and add leading 0
    const year = date.getFullYear(); // Get full year
    return `${day}/${month}/${year}`; // Format in dd-mm-YYYY
  };

    return (
      
                <div className="row">
                    <div className="col-md-10 col-sm-10">
                        <h2 className="display-4 text-center" >User List</h2>
                    </div>

                    
                    <div className="col-md-12 table-responsive">
                         <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr >
                                    <th>User Name</th>
                                    <th>Email Address</th>
                                    <th>User Type</th>
                                    <th>Role Id</th>
                                    <th>Created Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users && users.map((userData, index) => {
                                    // console.log(userData.firstName + ' ' + userData.lastName);
                                    return <tr key={index} >
                                        <td>{userData.role_name }</td>
                                        <td>{userData.user_name}</td>
                                        <td>{userData.user_type}</td>
                                        <td>{userData.roleId}</td>
                                        <td>{formatDate(userData.created_date)}</td>
                                        <td className="actionClass">
                                        <button onClick={() => updateUserRecord(userData.id)}> Update </button>
                                        <button onClick={() => deleteUserRecord(userData.id)}> Delete </button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>

               
           
    );



}
export default Users;