import React, { Component } from 'react';
import { Col, Container, Row, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CreateExpense from './components/create-expense';
import EditExpense from './components/edit-expense';
import ExpensesList from './components/expenses-listing';

class App extends Component{
  render(){
    return(
        <Router>
            <div className = 'App'>
              <header className='App-header'>
                  <Navbar bg='success' varient = 'success'>
                    <Container>
                        <Navbar.Brand>
                          <Link to = {'/create-expense'} className = 'nav-link'>
                              Expense Manager
                          </Link>
                        </Navbar.Brand>

                        <Nav className = 'justify-content-end'>
                            <Nav>
                                <Link to = {'/create-expense'} className = 'nav-link'>
                                    Create Expense
                                </Link>
                                <Link to = {'/expenses-listing'} className = 'nav-link'>
                                    Expense List
                                </Link>
                            </Nav>
                        </Nav>
                    </Container>
                  </Navbar>
              </header>

              <Container>
                <Row>
                  <Col md = {12}>
                      <div className = 'wrapper'>
                          <Switch>
                            <Route exact path = '/' component = {CreateExpense} />
                            <Route exact path = '/create-expense' component = {CreateExpense} />
                            <Route exact path = '/edit-expense/:id' component = {EditExpense} />
                            <Route exact path = '/expenses-listing' component = {ExpensesList} />
                          </Switch>
                      </div>
                  </Col>
                </Row>
              </Container>
            </div>  
        </Router>
    );
  }
}


export default App;
