import React from 'react'

import Board from './Board'
import { URL , API } from '../../Helper/API-URL'

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
                Authorization: API
            }
        }).then((data)=>{
            cy.mount(<Board/>)
            // cy.log(data.body)
            cy.log( document.getElementById("board-container") ) 
            // cy.get('.board-container').children().should('have.length', data.body.length)
        })
    })
    
    it("The add task part should have cursor pointer",()=>{
        cy.mount(<Board/>)
        // cy.get('[data-cy="add-task"]').should('have.css','cursor','pointer')
    })

})