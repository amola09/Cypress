describe('Tranversing the DOM in cypress', () => {
    it('children() to get the Children element of the DOM', () => {
        
       
        cy.visit("https://recast.studio/")// to visit link
        cy.get('ul[id="menu-1-b0137a3"]').children().should('have.length', "4") // ul parent class children length 4
        cy.get('ul[id="menu-1-b0137a3"]').children('li').eq(0).children().should('have.text','Home') // ul parent class list index 0 element with text home
    })
    
    it('children() to get the Children element of the DOM', () => {
       cy.visit("https://www.webdriveruniversity.com/Data-Table/index.html") // to visit link
       cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children('.active').should('contain','Contact Us') // ol classname
       cy.get('.breadcrumb.traversal-breadcrumb').children('.active').should('contain','Contact Us')// . class name
        
       
    })

    it('closest() to validate the closest ancestor of the element',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html') // to visit link
        cy.get('.badge-light').closest('ul').should('have.class','list-group') // number of children element in ul list
    })

    it('eq() to retrive the specific element in the list based on index',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')// to visit link
        cy.get('.traversal-drinks-list').children().eq(3).should('contain',"Esp")// children equivalent with index 3 contain Esp 
    })

    it('last() to retrive the last element in the list',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')// to visit link
        cy.get('.traversal-drinks-list').children().last().should('contain',"Sugar")// last children contain text sugar
    })
    
    it('first() to retrive the first element in the list',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')// to visit link
        cy.get('.traversal-drinks-list').children().first().should('contain',"Coffee") // first children  contain text coffee
    })

    it('filter() to retrive the element that matched a specific condition',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')// to visit link
        cy.get('div[data-toggle="buttons"]').children().filter('.active').should('have.text',"Button-1")
        cy.get('div[data-toggle="buttons"]').children().filter('.active').should('have.attr',"type")

    })  

})