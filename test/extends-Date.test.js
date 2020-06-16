const { should, expect, assert } = require('chai');

require('../src/extends-Date.js');

describe('expect', () => {
	it('Date.today', () => {
		const now = new Date();
		const today = Date.today();

		expect(today.getFullYear()).to.be.equal(now.getFullYear());
		expect(today.getMonth()).to.be.equal(now.getMonth());
		expect(today.getDate()).to.be.equal(now.getDate());
		expect(today.getHours()).to.be.equal(0);
		expect(today.getMinutes()).to.be.equal(0);
		expect(today.getSeconds()).to.be.equal(0);
		expect(today.getMilliseconds()).to.be.equal(0);
	});

	it('Date.prototype.toFormattedString', () => {
		const now = new Date();

		expect(now.toFormattedString('yyyy')).to.be.equal(String(now.getFullYear()).padStart(4, '0'));
		expect(now.toFormattedString('MM')).to.be.equal(String(now.getMonth() + 1).padStart(2, '0'));
		expect(now.toFormattedString('dd')).to.be.equal(String(now.getDate()).padStart(2, '0'));
		expect(now.toFormattedString('HH')).to.be.equal(String(now.getHours()).padStart(2, '0'));
		expect(now.toFormattedString('mm')).to.be.equal(String(now.getMinutes()).padStart(2, '0'));
		expect(now.toFormattedString('ss')).to.be.equal(String(now.getSeconds()).padStart(2, '0'));

		expect(now.toFormattedString('M')).to.be.equal(String(now.getMonth() + 1));
		expect(now.toFormattedString('d')).to.be.equal(String(now.getDate()));
		expect(now.toFormattedString('H')).to.be.equal(String(now.getHours()));
		expect(now.toFormattedString('m')).to.be.equal(String(now.getMinutes()));
		expect(now.toFormattedString('s')).to.be.equal(String(now.getSeconds()));

		expect(now.toFormattedString('yyyy/MM/dd')).to.be.equal(`${String(now.getFullYear()).padStart(4, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}`);
		expect(now.toFormattedString('H:m:s')).to.be.equal(`${String(now.getHours())}:${String(now.getMinutes())}:${String(now.getSeconds())}`);
	});

	it('Date.prototype.isWeekend', () => {
		expect(new Date('2000-01-01 08:00:00').isWeekend()).to.be.true;  // Saturday
		expect(new Date('2000-01-02 08:00:00').isWeekend()).to.be.true;  // Sunday
		expect(new Date('2000-01-03 08:00:00').isWeekend()).to.be.false; // Monday
		expect(new Date('2000-01-04 08:00:00').isWeekend()).to.be.false; // Tuesday
		expect(new Date('2000-01-05 08:00:00').isWeekend()).to.be.false; // Wednesday
		expect(new Date('2000-01-06 08:00:00').isWeekend()).to.be.false; // Thursday
		expect(new Date('2000-01-07 08:00:00').isWeekend()).to.be.false; // Friday
		expect(new Date('2000-01-08 08:00:00').isWeekend()).to.be.true;  // Saturday
	});

	it('Date.today', () => {
		const now = new Date();
		const today = Date.today();
		const yesterday = new Date(today.getSeconds() - 24 * 60 * 60 * 1000);
		const tomorrow = new Date(today.getSeconds() + 24 * 60 * 60 * 1000);

		expect(now.isToday()).to.be.true;
		expect(today.isToday()).to.be.true;
		expect(yesterday.isToday()).to.be.false;
		expect(tomorrow.isToday()).to.be.false;
	});

	it('Date.prototype.setUnixTimestamp', () => {
		const date = new Date('1970-01-01 08:00:00');
		expect(new Date().setUnixTimestamp(0, 8).getTime()).to.be.equals(date.getTime());
	});

	it('Date.prototype.getUnixTimestamp', () => {
		const date = new Date('2000-01-01 08:00:00');
		expect(date.getUnixTimestamp(8)).to.be.equals(parseInt(date.getTime() / 1000));
	});

	it('Date.prototype.toLocaleDayString', () => {
		const date = new Date('2000-01-01 08:00:00');
		expect(date.toLocaleDayString()).to.be.equals('Saturday');
		expect(date.toLocaleDayString('zh-CN')).to.be.equals('星期六');
	});

	it('Date.prototype.toLocaleDayString', () => {
		const date = new Date('2000-01-01 08:00:00');
		expect(date.toLocaleShortDayString()).to.be.equals('Sat');
		expect(date.toLocaleShortDayString('zh-CN')).to.be.equals('六');
	});

	it('Date.prototype.toLocaleMonthString', () => {
		const date = new Date('2000-01-01 08:00:00');
		expect(date.toLocaleMonthString()).to.be.equals('January');
		expect(date.toLocaleMonthString('zh-CN')).to.be.equals('一月');
	});

	it('Date.prototype.toLocaleShortMonthString', () => {
		const date = new Date('2000-01-01 08:00:00');
		expect(date.toLocaleShortMonthString()).to.be.equals('Jan');
		expect(date.toLocaleShortMonthString('zh-CN')).to.be.equals('一');
	});
});