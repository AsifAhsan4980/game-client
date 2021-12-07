import React, { useState, useEffect } from 'react';
import { getAllUser, deleteUser, updateUserRole } from '../Api/user';
import { showSuccess } from '../utils/message';
import { userInfo } from '../utils/auth';
import './TableList.css';

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(6);
  const [visibleAdmin, setVisibleAdmin] = useState(6);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const userDetails = userInfo();

  useEffect(() => {
    getAllUser(userDetails.token)
      .then(response => setUsers(response.data))
  }, [users])

  const deleteUserById = (id) => () => {
    deleteUser(userDetails.token, id)
      .then((response) => {
        setSuccess(true),
          setMessage('User Delete Successfully')
      })
  }

  const showMore = () => {
    setVisible((prevValue) => prevValue + 6)
  }

  const showLess = () => {
    setVisible((prevValue) => prevValue - 6)
  }

  const showMoreAdmin = () => {
    setVisibleAdmin((prevValue) => prevValue + 6)
  }

  const showLessAdmin = () => {
    setVisibleAdmin((prevValue) => prevValue - 6)
  }

  const MakeRole = (user) => () => {
    const role = {
      role: user.role === "user" ? "admin" : "user",
      _id: user._id
    }
    updateUserRole(userDetails.token, role)
      .then((response) => {
        setSuccess(true),
          setMessage('Role Updated')
      })
  }

  return (
    <>
      {showSuccess(success, message)}
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Admin List</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Phone No</th>
                      <th className="border-0">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users && users.slice(0, visibleAdmin).map(user => {
                      if (user.role === 'admin') {
                        if (user.disabled === false) {
                          return (
                            <tr>
                              <td>{user.username}</td>
                              <td>{user.email}</td>
                              <td>{user.phonenumber}</td>
                              <td>{user.role}</td>
                            </tr>
                          )
                        }
                      }
                    })}
                  </tbody>
                </Table>
                <button className='btn btn-primary mr-3' onClick={showMoreAdmin}>Show More...</button>
                <button className='btn btn-success' onClick={showLessAdmin}>Show Less...</button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">All User List:</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Phone No</th>
                      <th className="border-0">Role</th>
                      {(userDetails.role === 'superadmin') && (<>
                        <th className="border-0"></th>
                      </>)}
                    </tr>
                  </thead>
                  <tbody>
                    {users && users.slice(0, visible).map((user, index) => {
                      if (user.role === 'admin' || user.role === 'user') {
                        if (user.disabled === false) {
                          return (
                            <tr>
                              <td>{user.username}</td>
                              <td>{user.email}</td>
                              <td>{user.phonenumber}</td>
                              {(userDetails.role === 'admin') && (<>
                                <td>{user.role}</td>
                              </>)}
                              {(userDetails.role === 'superadmin') && (<>
                                <td>
                                  <button id="role-btn" className="role-btn">{user.role}</button>
                                  <div className="dropdown">
                                    <button className="role-btn" style={{ borderLeft: "1px solid #0d8bf2", width: '35px' }}>
                                      <i className="fa fa-caret-down"></i>
                                    </button>
                                    <div id="role-dropdown" className="dropdown-content">
                                      <p onClick={MakeRole(user)}>{user.role === "user" ? "admin" : "user"}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="border-0"><button className='btn btn-danger' onClick={deleteUserById(user._id)}>Delete</button></td>
                              </>)}
                            </tr>
                          )
                        }
                      }
                    })}
                  </tbody>
                </Table>
                <button className='btn btn-primary mr-3' onClick={showMore}>Show More...</button>
                <button className='btn btn-success' onClick={showLess}>Show Less...</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
