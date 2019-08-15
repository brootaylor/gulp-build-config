/**
 * This contains the core code for all effects
 * @module BWT
 */
const BWT = ((module, $) => {
	/**
	 * Functions for creating the current year datestamp
	 *
	 * @main yearDateStamp
	 */
	module.yearDateStamp = (function () {
		/**
		 * This function dynamically writes the current year into the footer
		 *
		 */
		const currentYearStamp = () => {
			const currentYear = new Date().getFullYear();
			const el = document.getElementById('year-current');

			el.innerHTML = currentYear;
		};

		/**
		 * This fires all functions for the current year datestamp
		 *
		 * @method init
		 * @private
		 */
		(function init() {
			currentYearStamp();
		})();

	})();

	return module;
})(BWT || {}, jQuery);