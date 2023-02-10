import React from "react";
import Modal from "./Modal";

describe('<Modal />',()=>{

    it('renders' , ()=>{
        cy.mount(<Modal/>)   
    })

    it('The modal container should be has display none by default',()=>{
        cy.mount(<Modal/>)
        cy.get('[data-cy="modal-container"]').should('have.css','display','none')
    })

    it('The title Modal text should be "Create Task" if the status is create new title modal',()=>{
        cy.mount(<Modal/>)
        cy.get('[data-cy="create-task-modal"]').should('have.text','Create Task')
    })

    it('The title Modal text should be "Edit Task" if the status is edit new title modal',()=>{
        cy.mount(<Modal/>)
        cy.get('[data-cy="edit-task-modal"]').should('have.text','Edit Task')
    })

    it('The title Modal text should be "Delete Task" if the status is delete new title modal',()=>{
        cy.mount(<Modal/>)
        cy.get('[data-cy="delete-task-modal"]').should('have.text','Create Task')
    })

    it('The edit task input should have default value',()=>{
        cy.get('[data-cy="input-edit-task-name]"').should('not.empty')
    })

    it('The create task input should have placeholder',()=>{
        cy.get('[data-cy="input-create-task-name]"').should('have.attr', 'placeholder', 'Type your task')
        cy.get('[data-cy="input-create-task-progress]"').should('have.attr', 'placeholder', 'Type your progress')
    })

})