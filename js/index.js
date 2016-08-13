;
(function(window) {

	'use strict';

	// Various Supports:
	var support = {
			transitions: Modernizr.csstransitions,
			transform: Modernizr.csstransforms3d,
			flex: Modernizr.flexbox,
			touch: Modernizr.touch
		},
		transEndEventNames = { 'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd', 'msTransition': 'MSTransitionEnd', 'transition': 'transitionend' },
		transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];
	/**
	 * For latest Modernizr, touch is now called touchevents and pointerevents are added
	 */

	var Portfolio = function() {
		var self = this;
		/**
		 * Helpers is a property, that contains all my Helping methods for Backward and ECMA5+ compatibility
		 * This property should be instantiated at the start, before any other property, as others might use this
		 */
		this.helpers = {
				getElement: function(selector) {
					return document.querySelector(selector);
				},
				getElements: function(selector) {
					return document.querySelectorAll(selector);
				},
				// trigger event with "name" on the given element "el"
				trigger: function(name, el) {
					// This way of triggering events is a bit old school, Check Mozilla for more updates
					var event;

					if (document.createEvent) {
						event = document.createEvent("Event");
						event.initEvent(name, true, true);
					} else {
						// for IE
						event = document.createEventObject();
						event.eventType = name;
					}

					if (document.createEvent) {
						el.dispatchEvent(event);
					} else {
						el.fireEvent("on" + event.eventType, event);
					}
				},
				// Test for Empty Objects
				isEmptyObject: function(obj) {
					if (Object.keys) {
						return Object.keys(obj).length === 0 && obj.constructor === Object
					} else {
						for (var prop in obj) {
							if (obj.hasOwnProperty(prop))
								return false;
						}

						return true && JSON.stringify(obj) === JSON.stringify({});
					}
				},
				forEach: function(el, callback, scope) {
					// https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
					for (var i = 0; i < el.length; i++) {
						callback.call(scope, el[i], i);
					}
				},
				getElementWithData: function(el, type, value) {
					var returnEl;
					if (document.body.dataset) {
						if (el.length) {
							this.forEach(el, function(ele, i) {
								if (ele.dataset[type] == value)
									returnEl = ele;
							})
						} else {
							if (el.dataset[type] == value)
								returnEl = el;
						}
					} else {
						if (el.length) {
							this.forEach(el, function(ele, i) {
								if (ele.getAttribute('data-' + type) == value)
									returnEl = ele;
							})
						} else {
							if (el.getAttribute('data-' + type) == value)
								returnEl = el;
						}
					}
					return returnEl;
				},
				getCss: function(el, name) {
					return getComputedStyle(el).getPropertyValue(name);
				},
			},
			this.chrome = {
				el: {
					// Frame image element
					frame: self.helpers.getElement('.chrome-frame .relative-img img'),
					// Animating element
					animate: self.helpers.getElement('#web-projects .img-wrapper'),
					projectImg: self.helpers.getElements('#web-projects .project-img'),
					leftBtn: self.helpers.getElement('#web-projects .left-btn'),
					rightBtn: self.helpers.getElement('#web-projects .right-btn'),
					uriFont: self.helpers.getElement('.chrome-frame .uri-panel'),
					titleFont: self.helpers.getElement('.chrome-frame .project-title'),
					projects: self.helpers.getElements('#web-projects article.project')
				},
				get width() {
					return this.el.frame.width;
				},
				get height() {
					return this.el.frame.height;
				},
				get total() {
					return this.el.projectImg.length;
				},
				touchstartx: undefined,
				touchmovex: undefined,
				movex: undefined,
				longTouch: false,
				index: 0,
				flagAnimate: false,
				swipe: 0,

				// Functions
				setChromeFrameFontSize: function() {
					this.el.uriFont.style.fontSize = (this.height * 0.02094241) + 'px';
					this.el.titleFont.style.fontSize = (this.height * 0.01384109) + 'px';
				},

				animateChrome: function(state) {
					var nextProject, currentProject;
					this.flagAnimate = true;
					switch (state) {
						case 0:
							if (this.index < this.total - 1) {
								this.index++;
							}
							break;
						case 1:
							if (this.index > 0) {
								this.index--;
							}
							break;
					}
					var ratio = this.index * this.width;
					this.el.animate.style[Modernizr.prefixed('transform')] = "translate3d(-" + ratio + "px,0,0)";

					var eventHandler;
					this.el.animate.addEventListener(transEndEventName, eventHandler = function(ev) {
						this.swipeActionAnimate(ev, this.chrome.el.projects, this.chrome.index, state, eventHandler);
					}.bind(self));
				},

				touchStart: function(event) {
					var mSelf = this;
					event.preventDefault();
					this.longTouch = false;
					this.touchTimer = window.setTimeout(function() {
						mSelf.longTouch = true;
					}, 250);
					this.touchstartx = event.touches[0].pageX;
					this.touchstarty = event.touches[0].pageY;
					classie.remove(this.el.animate, 'animate');
				},
				touchMove: function(event) {
					this.touchmovex = event.touches[0].pageX;
					this.dely = this.touchstarty - event.touches[0].pageY;
					this.delx = this.touchstartx - this.touchmovex;

					var leftSwipe = this.delx > 0 && this.index > -1 && this.index < this.total - 1,
						rightSwipe = this.delx < 0 && this.index > 0 && this.index < this.total;
					if (!this.flagAnimate) {
						this.flagAnimate = true;
						this.swipe = leftSwipe ? 0 : rightSwipe ? 1 : 2;
					}

					this.movex = this.index * this.width + (this.delx);
					if (this.movex < ((this.total - 1) * this.width)) {
						// Makes the holder stop moving when there is no more content.
						this.el.animate.style[Modernizr.prefixed('transform')] = 'translate3d(-' + this.movex + 'px,0,0)';
					}
				},
				touchEnd: function(event) {
					var absMove = Math.abs(this.index * this.width - this.movex);
					var absDelX = Math.abs(this.delx), absDelY = Math.abs(this.dely);
					window.clearTimeout(this.touchTimer);
					var complete = absMove > this.width / 2;
					this.longTouch = absDelY > absDelX? true: this.longTouch;
					// Calculate the index. All other calculations are based on the index.
					if (complete || this.longTouch === false) {

						if (this.movex > this.index * this.width && this.index < this.total - 1) {
							this.index++;
						} else if (this.movex < this.index * this.width && this.index > 0) {
							this.index--;
						}
					}
					// Move and animate the elements.
					classie.add(this.el.animate, 'animate');
					this.el.animate.style[Modernizr.prefixed('transform')] = 'translate3d(-' + this.index * this.width + 'px,0,0)';
					
					this.flagAnimate = false;

					var eventHandler;
					this.el.animate.addEventListener(transEndEventName, eventHandler = function(ev) {
						this.swipeActionAnimate(ev, this.chrome.el.projects, this.chrome.index, this.chrome.swipe, eventHandler);
					}.bind(self))
				}
			},

			this.android = {
				el: {
					frame: self.helpers.getElement('#android-projects .relative-img img'),
					animate: self.helpers.getElements('#android-projects .project-img'),
					leftBtn: self.helpers.getElement('#android-projects .left-btn'),
					rightBtn: self.helpers.getElement('#android-projects .right-btn'),
					projects: self.helpers.getElements('#android-projects article.project')
				},
				width: undefined,
				height: undefined,
				index: 0,
				flagAnimate: false,
				complete: false,
				currentEl: undefined,
				nextEl: undefined,
				touchstartx: undefined,
				touchstarty: undefined,
				touchmovex: undefined,
				longTouch: false,
				delx: undefined,
				swipe: 0, // Left Swipe means 0, Right means 1 & No swipe means 2

				init: function() {
					this.width = parseFloat(self.helpers.getCss(this.el.animate[0], 'width'));
					this.height = parseFloat(self.helpers.getCss(this.el.animate[0], 'height'));
					this.currentEl = self.helpers.getElementWithData(this.el.animate, 'count', this.index + 1);
				},

				androidAnimate: function(state) {
					this.flagAnimate = true;
					classie.add(this.el.animate[0], 'active-project')
					switch (state) {
						// Left Swipe
						case 0:
							// Animate into view, enter next project
							if (this.index > -1 && this.index < this.el.animate.length - 1) {
								this.el.animate[this.index].style = "";
								this.el.animate[this.index + 1].style = "";
								classie.add(this.el.animate[this.index], 'exit');
								classie.add(this.el.animate[this.index + 1], 'active-project');
								this.index++;
								this.index = this.index < this.el.animate.length ? this.index : this.el.animate.length - 1;
							}
							break;

							// Right Swipe
						case 1:
							// Animate out of view, enter prev project
							if (this.index > 0 && this.index < this.el.animate.length) {
								this.el.animate[this.index].style = "";
								this.el.animate[this.index - 1].style = "";

								classie.remove(this.el.animate[this.index], 'active-project');
								classie.remove(this.el.animate[this.index - 1], 'exit');
								this.index--;
								this.index = this.index > -1 ? this.index : 0;
							}
							break;
					}

					

					var eventHandler;
					this.el.animate[this.index].addEventListener(transEndEventName, eventHandler = function(ev) {
						this.swipeActionAnimate(ev, this.android.el.projects, this.android.index, state, eventHandler);
					}.bind(self));
				},
				touchStart: function(event) {
					this.init();
					event.preventDefault();
					var mSelf = this;
					this.longTouch = false;
					this.touchTimer = window.setTimeout(function() {
						mSelf.longTouch = true;
					}, 250);
					this.touchstartx = event.touches[0].pageX;
					this.touchstarty = event.touches[0].pageY;
					console.log(this.touchstartx);
					// The movement gets all janky if there's a transition on the elements.
					self.helpers.forEach(this.el.animate, function(ele, i) {
						classie.remove(ele, 'animate');
					})


				},

				touchMove: function(event) {

					this.touchmovex = event.touches[0].pageX;
					this.dely = this.touchstarty - event.touches[0].pageY;
					this.delx = this.touchstartx - this.touchmovex;
					var leftSwipe = this.delx > 0 && this.index > -1 && this.index < this.el.animate.length - 1,
						rightSwipe = this.delx < 0 && this.index > 0 && this.index < this.el.animate.length;
					if (!this.flagAnimate) {
						this.flagAnimate = true;
						this.swipe = leftSwipe ? 0 : rightSwipe ? 1 : 2;
						if (this.swipe) {
							// right swipe
							this.nextEl = self.helpers.getElementWithData(this.el.animate, 'count', this.index);
						} else {
							// left swipe
							this.nextEl = self.helpers.getElementWithData(this.el.animate, 'count', this.index + 2);
						}
					}

					if (this.width > Math.abs(this.delx)) {
						var ratio = Math.abs(this.delx) / this.width;
						switch (this.swipe) {
							// Left
							case 0:

								var scale = 0.3 + (0.7 * ratio);
								// This condition is for a check if user continues to move for a leftSwipe towards right,
								// I need to stop the transform... rightSwipe is not used as it contains check for
								// index too...
								if (this.delx < 0) {
									this.currentEl.style[Modernizr.prefixed('transform')] = "scale3d(1,1,1) translate3d(0,0,0)";
									this.currentEl.style[Modernizr.prefixed('opacity')] = 1;
									this.nextEl.style[Modernizr.prefixed('transform')] = "scale3d(0.3,0.3,1)";
									this.nextEl.style[Modernizr.prefixed('opacity')] = 0;
									break;
								}
								// Animate
								this.currentEl.style[Modernizr.prefixed('transform')] = "scale3d(1,1,1) translate3d(-" + this.delx + "px,0,0)";
								this.currentEl.style[Modernizr.prefixed('opacity')] = 1 - ratio;
								this.nextEl.style[Modernizr.prefixed('transform')] = "scale3d(" + scale + "," + scale + ",1)";
								this.nextEl.style[Modernizr.prefixed('opacity')] = ratio;
								break;

								// Right
							case 1:
								// Here the nextElement refers to prevElement that has to be translated
								var nextEl = self.helpers.getElementWithData(this.el.animate, 'count', this.index + 2);
								var scale = (0.7 * ratio);
								// This condition is for a check if user continues to move for a leftSwipe towards right,
								// I need to stop the transform... rightSwipe is not used as it contains check for
								// index too...
								if (this.delx > 0) {
									this.currentEl.style[Modernizr.prefixed('transform')] = "scale3d(1,1,1)";
									this.currentEl.style[Modernizr.prefixed('opacity')] = 1;
									this.nextEl.style[Modernizr.prefixed('transform')] = "scale3d(1,1,1) translate3d(-" + this.width + "px,0,0)";
									this.nextEl.style[Modernizr.prefixed('opacity')] = 0;
									break;
								}
								// Animate
								this.currentEl.style[Modernizr.prefixed('transform')] = "scale3d(" + (1 - scale) + "," + (1 - scale) + ",1)";
								this.currentEl.style[Modernizr.prefixed('opacity')] = 1 - ratio;
								this.nextEl.style[Modernizr.prefixed('transform')] = "scale3d(1,1,1) translate3d(-" + (this.width + this.delx) + "px,0,0)";
								this.nextEl.style[Modernizr.prefixed('opacity')] = ratio;
								break;

								// This case is for the first & last indexes of project images that should not be scrolled, 
								// thus here an animation can be shown which reflects there are no elements further
							case 2:
								break;
						}
					}
				},

				touchEnd: function(event) {
					
					var absDelX = Math.abs(this.delx), absDelY = Math.abs(this.dely);
					this.complete = this.width / 2 < absDelX;

					this.longTouch = absDelY > absDelX? true: this.longTouch;
					// For smooth transition
					self.helpers.forEach(this.el.animate, function(ele, i) {
						classie.add(ele, 'animate');
					})

					switch (this.swipe) {
						case 0:
							if (this.complete || this.longTouch === false) {
								this.index++;
								this.index = this.index < this.el.animate.length ? this.index : this.el.animate.length - 1;

								this.currentEl.style[Modernizr.prefixed('transform')] = "scale3d(1,1,1) translate3d(-" + this.width + "px,0,0)";
								this.currentEl.style[Modernizr.prefixed('opacity')] = 0;
								this.nextEl.style[Modernizr.prefixed('transform')] = "scale3d(1,1,1)";
								this.nextEl.style[Modernizr.prefixed('opacity')] = 1;

								classie.add(this.currentEl, 'exit');
								classie.add(this.nextEl, 'active-project');
							} else {
								this.currentEl.style[Modernizr.prefixed('transform')] = "scale3d(1,1,1) translate3d(0,0,0)";
								this.currentEl.style[Modernizr.prefixed('opacity')] = 1;
								this.nextEl.style[Modernizr.prefixed('transform')] = "scale3d(0.3,0.3,1)";
								this.nextEl.style[Modernizr.prefixed('opacity')] = 0;
							}
							break;

						case 1:
							if (this.complete || this.longTouch === false) {
								this.index--;
								this.index = this.index > -1 ? this.index : 0;
								this.currentEl.style[Modernizr.prefixed('transform')] = "scale3d(0.3,0.3,1)";
								this.currentEl.style[Modernizr.prefixed('opacity')] = 0;
								this.nextEl.style[Modernizr.prefixed('transform')] = "scale3d(1,1,1) translate3d(0,0,0)";
								this.nextEl.style[Modernizr.prefixed('opacity')] = 1;

								classie.remove(this.currentEl, 'active-project');
								classie.remove(this.nextEl, 'exit');
							} else {
								this.currentEl.style[Modernizr.prefixed('transform')] = "scale3d(1,1,1) translate3d(0,0,0)";
								this.currentEl.style[Modernizr.prefixed('opacity')] = 1;
								this.nextEl.style[Modernizr.prefixed('transform')] = "scale3d(1,1,1) translate3d(-" + this.width + "px,0,0)";
								this.nextEl.style[Modernizr.prefixed('opacity')] = 0;
							}
							break;
					}

					this.flagAnimate = false;
					var eventHandler;
					this.currentEl.addEventListener(transEndEventName, eventHandler = function(ev) {
						this.swipeActionAnimate(ev, this.android.el.projects, this.android.index, this.android.swipe, eventHandler);
					}.bind(self));

				}
			},

			this.swipeActionAnimate = function(ev, list, index, swipe, caller) {
				var currentProject;
				if (swipe === 0) {
					currentProject = self.helpers.getElementWithData(list, 'count', index+1);
				} else if (swipe === 1) {
					currentProject = self.helpers.getElementWithData(list, 'count', index + 1);
				}
				if (currentProject) {
					self.helpers.forEach(list, function(ele, i) {
						classie.remove(ele, 'active')
					});
					classie.add(currentProject, 'active');
				}
				ev.target.removeEventListener(transEndEventName, caller);
			}
	}

	Portfolio.prototype.init = function() {
		this.bindUIEvents();
	},

	Portfolio.prototype.bindUIEvents = function() {
		var self = this;
		window.addEventListener('resize', function() {
			self.chrome.setChromeFrameFontSize();
		})
		self.chrome.el.frame.addEventListener('load', function() {
			self.chrome.setChromeFrameFontSize();
		});
		if (self.chrome.el.frame.complete) {
			self.helpers.trigger('load', self.chrome.el.frame);
		}

		var navs = self.helpers.getElements('nav.navbar .nav-link');
		self.helpers.forEach(navs, function(el, i){
			var mSelf = this;
			el.addEventListener('click', function(ev) {
				mSelf.helpers.forEach(navs, function(ele, i) {
					classie.remove(ele, 'active');
				});
				classie.add(this, 'active');
			})
		}, self);
		// Bind Android Nexus Button & Touch Listeners
		(function() {
			// Right button, to move frame left
			self.android.el.rightBtn.addEventListener('click', function() {
					self.android.androidAnimate(0);
				})
				// Left Button to move frame right
			self.android.el.leftBtn.addEventListener('click', function() {
				self.android.androidAnimate(1);
			})

			var wrapper = self.helpers.getElement('#android-projects .project-images:last-child');
			wrapper.addEventListener('touchstart', function(event) {
				self.android.touchStart(event);
			})
			wrapper.addEventListener('touchmove', function(event) {
				self.android.touchMove(event);
			})
			wrapper.addEventListener('touchend', function(event) {
				self.android.touchEnd(event);
			})
		})();

		// Binding Chrome Frame button listeners
		(function() {
			var count = 0,
				MAX = 2;
			// right now count doesn't have any use
			// Left
			self.chrome.el.leftBtn.addEventListener('click', function() {
					self.chrome.animateChrome(1);
				})
				// Right
			self.chrome.el.rightBtn.addEventListener('click', function() {
				self.chrome.animateChrome(0);
			})

			self.chrome.el.animate.addEventListener('touchstart', function(event) {
				self.chrome.touchStart(event);
			})
			self.chrome.el.animate.addEventListener('touchmove', function(event) {
				self.chrome.touchMove(event);
			})
			self.chrome.el.animate.addEventListener('touchend', function(event) {
				self.chrome.touchEnd(event);
			})

		})();
	}

	var jokerBox = document.querySelector('.joker-box');
	var lid = document.getElementById('lid');
	var flagEnter=false;
	
	/**
	 * Above hack isn't working for me, so I am removing the mouseenter and leave events if touch is working;
	 * Best option so far I guess;
	 */
	
	var enter = function(event){
		if(!flagEnter){
			console.log(event.type+' called');
			classie.add( lid, 'bounceIn' );
			flagEnter = true;
			// setTimeout(function(){ flagEnter = true; }, 100);
		}
	}
	var leave = function(event){
		if(flagEnter){
			console.log(event.type+' called');
			classie.remove( lid, 'bounceIn' );
			flagEnter = false;
 			// Not required now.
			// setTimeout(function(){ flagEnter = false; }, 100);
		}
	}
	jokerBox.addEventListener('mouseenter', enter)
	jokerBox.addEventListener('mouseleave', leave)
	
	jokerBox.addEventListener('touchstart', function(event){
		jokerBox.removeEventListener('mouseenter', enter);
		enter(event);		
	});
	jokerBox.addEventListener('touchend', function(event){
		jokerBox.removeEventListener('mouseLeave', leave);
		leave(event);
	})
	
	var portfolio = new Portfolio();
	portfolio.init();
})(window);