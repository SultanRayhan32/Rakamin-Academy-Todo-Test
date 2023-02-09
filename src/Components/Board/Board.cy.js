import React from 'react'
import Board from './Board'


describe('<Board />',()=>{
    it('renders',()=>{
        cy.mount(<Board/>)
    })
})