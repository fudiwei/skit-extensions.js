(function () {
	Object.defineProperty(Date.prototype, '$isWeekend', {
		value: function () {
			if (!(this instanceof Date)) {
				throw new TypeError('Method \'Date.prototype.$isWeekend\' called on incompatible receiver ' + this);
			}

			return this.getDay() % 7 === 0 || this.getDay() % 7 === 6;
		},
		enumerable: false,
		configurable: false
	});
})();
