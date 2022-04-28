/**  
* @author Rajat Verma
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/
* 
* Course: Cypress -Modern Automation Testing from Scratch + Frameworks(https://www.udemy.com/course/cypress-tutorial/)
* Tutor: Rahul Shetty (https://www.udemy.com/user/rahul445/)
*/

/***************************************************/


//Testing Framework - Mocha

describe('Section_05_RS_UI_Tests_GreenKart - Test Suite - Rahul Shetty Green Kart - _06_Cypress_ParentChild',function(){

    it('Test case for _06_Cypress_ParentChild',function(){

        //Test One -> Steps
        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/seleniumPractise/");
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/')
        
        //Selenium WebDriver -> driver.findElement(By.cssSelector(".search-keyword")).sendKeys("ca");
        cy.get('.search-keyword').type('ca')

        //Java -> Thread.sleep(2000);
        cy.wait(2000)
 
        //cy.get('.product') -> it is giving the count as 5 (4-visible , 1-invisible)
        //cy.get('.product').should('have.length',4)
    
        //cy.get('.product:visible') -> This will only give visible elements
        //In this step, Cypress is looking into whole page for the Web Element which has the class 'product' and in visible state
        //cy.get('.product:visible').should('have.length',4)

        //Scope is limited now
        //Now, Cypress will only try to find the webelements inside the element which has class 'products'
        cy.get('.products').find('.product').should('have.length',4)

    })//it


    it('Test case for _03_Cypress_Type - Intentionally Failing',function(){

        //Test One -> Steps
        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/seleniumPractise/");
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/')
        
        //Selenium WebDriver -> driver.findElement(By.cssSelector(".search-keyword")).sendKeys("ca");
        cy.get('.search-fake-locator').type('ca')
    })//it

})//describe