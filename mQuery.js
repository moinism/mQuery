/*
	mQuery (Mini Query)
	A lightweight DOM library for the times when you don't want to use the heavy ones.
*/

window.$m = function(s) {
	var sel = typeof s === 'object' ? s : document.querySelectorAll(s);

	var _each = function(fn) {
		if(sel.length) {
			for (var i = 0; i < sel.length; i++) {
				fn(sel[i], i);
			}
		} else {
			fn(sel, 0);
		}
	},
	_single = function () {
		return sel[0] || sel;
	};

	var
		_is = function(state) {
			return _single()[state];
		},
		_eq = function (index) {
			sel = sel[index];
			return mQuery;
		},
		_css = function(styl) {
			_each(function(el) {
				for(var p in styl) {
					el.style[ p.replace('_', '-') ] = styl[p]; // to allow variable-allowed names. e.g: border_color instead of 'border-color'
				}
				return mQuery;
			});
		},
		_attr = function(el, attr, val) {
			val = val || null;
			el.setAttribute(attr, val);
			return el;
		},
		_genPop = function(ctx, t) {
			return function (t) {
				return _commonAttr(ctx, t);
			};
		},
		_commonAttr = function (attr, t) {
			if(t) {
				_each(function(el) {
					_attr(el, attr, t);
				});
				return mQuery;
			} else {
				return _single().getAttribute(attr);
			}
		},
		_data = function (attr, v) {
			return _commonAttr('data-' + attr, v);
		},
		_addClass = function(klass) {
			_each(function(el) {
				el.classList.add(klass);
			});
			return mQuery;
		},
		_removeClass = function(klass) {
			_each(function(el) {
				el.classList.remove(klass);
			});
			return mQuery;
		},
		_toggleClass = function(klass) {
			_each(function(el) {
				el.classList.toggle(klass);
			});
			return mQuery;
		},
		_hasClass = function(klass) {
			return _single().classList.contains(klass);
		},
		_show = function() {
			_each(function(el) {
				el.style.display = 'inline-block';
			});
			return mQuery;
		},
		_hide = function() {
			_each(function(el) {
				el.style.display = 'none';
			});
			return mQuery;
		},
		_remAttr = function (attr) {
			_each(function (el) {
				el.removeAttribute(attr);
			});
			return mQuery;
		},
		_on = function(evt, func) {
			_each(function(el) {
				el.addEventListener(evt, func);
			});
			return mQuery;
		},
		_off = function(evt, func) {
			_each(function(el) {
				el.removeEventListener(evt, func);
			});
			return mQuery;
		};

	var mQuery = {
		is: _is,
		eq: _eq,
		on: _on,
		off: _off,
		css: _css,
		show: _show,
		hide: _hide,
		data: _data,
		attr: _commonAttr,
		hasClass: _hasClass,
		addClass: _addClass,
		removeAttr: _remAttr,
		val: _genPop('value'),
		toggleClass: _toggleClass,
		removeClass: _removeClass,
		html: _genPop('innerHTML'),
		text: _genPop('textContent')
	};

	return mQuery;
};
