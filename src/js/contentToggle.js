/**
 * This contains the core code for...
 * @module BWT
 */
const BWT = ((module, $) => {
	/**
	 * Functions for creating the ability to toggle content
	 *
	 * @main contentToggle
	 */
	module.contentToggle = (function () {
		/**
		 * Set global variables
		*/
		const siteContainer = document.querySelector('html');
		const contentToggleContainer = document.querySelectorAll('[data-toggle-container]');

		/**
		 * This function gets all the instances of the 'toggle' component
		 * ...and then assigns the necessary events to each instance
		 */
		const contentToggleInit = () => {
			/**
			 * Getting all the toggle component instances
			 */
			contentToggleContainer.forEach((toggleInstance) => {

				const contentToggleItems = toggleInstance.querySelector('[data-toggle-items]');
				const contentToggleButton = toggleInstance.querySelector('[data-toggle-button]');

				// Event listener added to the button...
				contentToggleButton.addEventListener('click', (event) => {
					event.preventDefault(); // In case it's an <a> or <input> element

					buttonState(contentToggleButton);
					buttonLabels(contentToggleButton);
					contentToggle(contentToggleItems);
				});
			});

		};

		/**
		 * This toggles the button's labeling
		 * @method buttonLabels
		 * @private
		 */
		const buttonLabels = (el) => {
			const buttonIsActive = el.classList.contains('active');

			buttonIsActive ? el.innerHTML = 'View less' : el.innerHTML = 'View more'
		}

		/**
		 * This toggles the button state by adding 'active' class
		 * @method buttonState
		 * @private
		 */
		const buttonState = (el) => {
			el.classList.toggle('active');
		};

		/**
		 * This toggles the content (show/hide)
		 * @method contentToggle
		 * @private
		 */
		const contentToggle = (el) => {
			$(el).slideToggle('slow');
		};

		/**
		 * This fires all functions for reveal more method
		 *
		 * @method init
		 * @private
		 */
		(function init() {
			if (contentToggleContainer) {
				contentToggleInit();
			}
		})();

	})();

	return module;
})(BWT || {}, jQuery);