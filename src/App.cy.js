import React from "react";
import App from "./App";
import { URL , API } from './Helper/API-URL'

describe('API ACTION' ,()=>{
    
    it('renders',()=>{
        cy.mount(<App/>)
    })

    it("Create new task API",()=>{
        cy.request({
            method: 'POST', 
            url: `${URL}todos/1/items`, 
            body : {
                name: "TEST TEST",
                progress_percentage : 90
            },
            headers: {
                Authorization: API
            }
        }).then((data)=>{
            cy.mount(<App/>)
            // cy.log(cy.get('[data-cy="board-container"]').children())
            // cy.get('[data-cy="board-container"]').children().should('have.length', data.body.length)
        })
    })


    it("Update task API",()=>{
        cy.request({
            method: 'PATCH', 
            url: `${URL}todos/1/items/2`, 
            body : {
                name: "Change Name Test"
            },
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5LCJleHAiOjE2ODQ1NTgzNjd9.k_krTkxTdx_j8LjT03BPT-bKlecQFJs5yYXri6aHZVc'
            }
        }).then((data)=>{
            cy.mount(<App/>)
            // cy.log(cy.get('[data-cy="board-container"]').children())
            // cy.get('[data-cy="board-container"]').children().should('have.length', data.body.length)
        })
    })
})
