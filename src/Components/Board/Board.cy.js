import React from 'react'

import Board from './Board'
import URL from '../../Helper/API-URL'

describe('<Board />',()=>{

    it('renders',()=>{
        cy.mount(<Board/>)
    })

    // integration / api testing
    it('The API should run without any problem and the render element length must be same with the api data length',()=>{
        cy.request({
            method: 'GET', 
            url: `${URL}todos`, 
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5LCJleHAiOjE2ODQ1NTgzNjd9.k_krTkxTdx_j8LjT03BPT-bKlecQFJs5yYXri6aHZVc'
            }
        }).then((data)=>{
            cy.mount(<Board/>)
            cy.log(data.body)
            cy.get('.board-container').children().should('have.length', data.body.length)
        })
    })
    
    it("The add task part should have cursor pointer",()=>{
        cy.mount(<Board/>)
        cy.get('[data-cy="add-task"]').should('have.css','cursor','pointer')
    })

})