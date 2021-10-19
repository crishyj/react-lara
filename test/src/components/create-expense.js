import React, { Component } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import ExpenseList from './expenses-listing';
import Swal from 'sweetalert2';

export default class CreateExpense extends Component{
    constructor(props){
        super(props);
        
        this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
        this.onChangeExpenseAmount = this.onChangeExpenseAmount.bind(this);
        this.onChangeExpenseDescription = this.onChangeExpenseDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name:'',
            description : '',
            amount : '',
            child: [],
        }
    }

    onChangeExpenseName(e){
        this.setState({name: e.target.value})
    }

    onChangeExpenseDescription(e){
        this.setState({description: e.target.value})
    }

    onChangeExpenseAmount(e){
        this.setState({amount: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const expense = {
            name: this.state.name,
            amount: this.state.amount,
            description: this.state.description
        };

        axios.post('http://localhost:8000/api/expenses/', expense)
            .then((res) => {
                // console.log(res.data);
                console.log(res.data.expense);
                this.setState({
                    child: res.data.expense
                });
            });

        Swal.fire(
            'Good Job',
            'Expense Added Successfully',
            'success'
        )

        this.setState({
            name: '',
            description: '',
            amount: ''
        });
    }

    render(){
        return(
            <div className="form-wrapper">
                <Form onSubmit = {this.onSubmit}>
                    
                    <Row>
                        <Col>
                            <Form.Group controlId = 'Name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    type='text' 
                                    value ={this.state.name}  
                                    onChange = {this.onChangeExpenseName}
                                />
                            </Form.Group>
                        </Col>
                    
                        <Col>
                            <Form.Group controlId='Amount'>
                                <Form.Label>Amount</Form.Label>
                                <Form.Control 
                                    type='number' 
                                    value ={this.state.amount}  
                                    onChange = {this.onChangeExpenseAmount}
                                />

                            </Form.Group>
                        </Col>

                    </Row>

                    <Row>
                        <Col>
                            <Form.Group controlId='description'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as = 'textarea'
                                    type = 'textarea'
                                    value = {this.state.description}
                                    onChange = {this.onChangeExpenseDescription}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button varient='primary' size='lg' block = 'block' type = 'submit'>
                                Add Expense
                            </Button>
                        </Col>
                    </Row>
                </Form>

                <br></br>
                
                <ExpenseList dataParentToChild = {this.state.child}></ExpenseList>

            </div>
        );
    }
}