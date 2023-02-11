import React from "react";
import App from "./App";
import { URL , API } from './Helper/API-URL'

describe('API ACTION' ,()=>{
    
    it('renders',()=>{
        cy.mount(<App/>)
    })

    it('All of the actions API should be worked properly',()=>{
        let todosId = 0
        cy.request({
            method: 'POST', 
            url: `${URL}todos`, 
            body : {
                title: "Testing Data",
                description : "June - Desember"
            },
            headers: {
                Authorization: API
            }
        }).then((data)=>{
            cy.log(data[0])
            todosId = data.body.id
            return cy.request({
                method: 'POST', 
                url: `${URL}todos/${data.body.id}/items`, 
                body : {
                    name: "First Item",
                    progress_percentage: 60
                },
                headers: {
                    Authorization: API
                }
            })
        })
        .then((data)=>{
            cy.log(data)
            return cy.request({
                method: 'PATCH', 
                url: `${URL}todos/${todosId}/items/${data.body.id}`, 
                body : {
                    target_todo_id : todosId,
                    name: "First Item has change",
                },
                headers: {
                    Authorization: API
                }
            })
        })
        .then((data)=>{
            cy.log(data)
            return cy.request({
                method: 'DELETE', 
                url: `${URL}todos/${todosId}/items/${data.body.id}`, 
                headers: {
                    Authorization: API
                }
            })
        })
        .then((data)=>{
            cy.log("THE API HAS BEEN WORKING PROPERLY")
        })
    })
})
