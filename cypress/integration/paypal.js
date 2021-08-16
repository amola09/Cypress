describe('Paypal Request', ()=>{

    let token = null

    it('Generate Token', ()=>{
        cy.request({
            method: 'POST',
            url:'https://api-m.sandbox.paypal.com/v1/oauth2/token',
            headers:{
                authorization: 'Basic QVdMNkxjT3poRWZISGJWYjhaS0lnUXItWkNQSG80UzJXY3RMT09HT1lZX2c4MVpXYWEzUlBZR3c4LWtDX19acHYyU0lEMW43dmFqV3doOW86RUVQblp0MlI5NEhnWFM0SG9OYmpmdmQ1cEZLczJ5cEMxQzkzZl9wRHpDUGwySDgyVmhYWk5TdndsQjR1YjBBeXF4MDhpcUpaQ3RXUTJIR0w='
            },
            form: true,
            body:{
                'grant_type': 'client_credentials'
            }
        }).then((response)=>{

                token  = response.body.access_token
                expect(response.status).to.eq(200)  
                expect(response.duration).to.be.lessThan(1500)
                expect(response.headers).to.contain({
                    'content-type': 'application/json'
                })
                expect(response.body).to.contain({
                    "token_type": "Bearer",
                    "app_id": "APP-80W284485P519543T"
                })
        })
    })
 it('Create order', ()=>{

        cy.request({
            method: 'POST',
            url:'https://api-m.sandbox.paypal.com/v2/checkout/orders',
            headers:{
                "content-type": 'application/json',
                authorization: `Bearer ${token}`
            },
            body:{
                "intent": "CAPTURE",
                "purchase_units": [
                  {
                    "amount": {
                      "currency_code": "USD",
                      "value": "100.00"
                    }
                  }
                ]
            }
        }).then((response)=>{
            expect(response.status).to.eq(201)
        })
    })
})
