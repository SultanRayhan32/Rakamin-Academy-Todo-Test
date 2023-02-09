import React from 'react'
import Board from './Board'


describe('<Board />',()=>{
    it('renders',()=>{
        cy.mount(<Board/>)
    })
    it('the text should be New Task',()=>{
        cy.mount(<Board/>)
        cy.get('[data-cy="add-task"]').should('have.text','New Task')
    })
    it('The title and description should not empty',()=>{
        cy.mount(<Board title={"test-title"} description={"test-description"}/>)
        cy.get('[data-cy="board-title"]').should('not.empty')
        cy.get('[data-cy="board-description"]').should('not.empty')
    })
})