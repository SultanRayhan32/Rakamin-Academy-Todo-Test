import React from 'react'
import Task from './Task'

describe('<Task />' ,()=>{

    it('renders',()=>{
        cy.mount(<Task/>)
    })

    it('The Item component should show "No Task" when the item does not exist',()=>{
        cy.mount(<Task/>)
        cy.get('[data-cy="item-message-error"').should('have.text','No Task')
    })

    it('The item name should not be empty',()=>{
        cy.mount(<Task/>)
        cy.get('[data-cy="item-title"]').should('not.empty')
    })

})