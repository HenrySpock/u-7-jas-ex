
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(values)).toEqual(361.45);
});


it("should return a result with 2 decimal places", function() {
  expect((calculateMonthlyPayment(values)).toString()).toMatch(/^\d+\.\d\d$/);
});

/// etc 