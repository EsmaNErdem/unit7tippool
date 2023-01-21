describe ('Payment test', function (){
    beforeEach(function () {
        // initialization logic
        billAmtInput.value =  50;
        tipAmtInput.value = 10;
      });

    it('should submit payment to allPayments', function (){
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual("50");
})
    it("should recognize empty billAmt input", function (){
        billAmtInput.value = '';
        submitPaymentInfo();
        createCurPayment()
        expect(Object.keys(allPayments).length).toEqual(0);
  })
    
    it('should add payment to payment table', function (){
        submitPaymentInfo();
        createCurPayment();
        updateServerTable();
        expect(document.querySelector('#payment1').children[0].innerHTML).toEqual('$50')
        expect(document.querySelector('#payment1').children[2].innerHTML).toEqual('20%')
    })
      afterEach(function() {
        // teardown logic
        billAmtInput.value =  "";
        tipAmtInput.value =  '';
        paymentId = 0;
        paymentTbody.innerHTML = ''
        allPayments = {};
    
      });
})