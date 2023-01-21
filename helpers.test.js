describe ('Helpers Test', function () {
    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should calculate tip percent correct', function (){
        expect(sumPaymentTotal("billAmt")).toEqual(50);
    })

    it("should add payment to the table", function (){
        expect(summaryTds[0].innerHTML).toEqual('$50');
    })

    it('should calculate tip percent correct', function(){
        expect(summaryTds[2].innerHTML).toEqual('40%');
    })
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
      });
})