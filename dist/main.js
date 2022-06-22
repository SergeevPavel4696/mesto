(()=>{"use strict";function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var t=function(){function t(e,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e["card-name"],this._link=e["card-link"],this.card=document.querySelector("#"+r).content.querySelector("."+r).cloneNode(!0),this._popup=n,this._cardImage=this.card.querySelector(".card__image")}var r,n;return r=t,(n=[{key:"_setImage",value:function(){this._cardImage.src=this._link,this._cardImage.alt=this._name}},{key:"_setCardTittle",value:function(){this.card.querySelector(".card__title").textContent=this._name}},{key:"_setCardLikeEvent",value:function(){this.card.querySelector(".card__like").addEventListener("click",(function(e){e.target.classList.toggle("card__like_active")}))}},{key:"_setCardTrashEvent",value:function(e){this.card.querySelector(".card__trash").addEventListener("click",(function(){e.remove(),e=null}))}},{key:"_setCardImageEvent",value:function(e,t,r){this._cardImage.addEventListener("click",(function(){e._open(t,r)}))}},{key:"getNewCard",value:function(){return this._setImage(),this._setCardTittle(),this._setCardLikeEvent(),this._setCardTrashEvent(this.card),this._setCardImageEvent(this._popup,this._link,this._name),this.card}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._close=this._close.bind(this),this._popupClose=this._popup.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"_open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"_close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this._close()}},{key:"setEventListeners",value:function(){var e=this;this._popupClose.addEventListener("mousedown",this._close),this._popup.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e._close()}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=s(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},a.apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function u(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(f,e);var t,r,n,o,s=(n=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(n);if(o){var r=l(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return u(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.call(this,e))._popupPicture=t._popup.querySelector(".popup__image"),t}return t=f,(r=[{key:"_open",value:function(e,t){this._popupPicture.src=e,this._popupPicture.alt=t,this._popup.querySelector(".popup__image-title").textContent=t,a(l(f.prototype),"_open",this).call(this)}}])&&i(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),f}(n);function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d=function(){function e(t){var r=t.name,n=t.aboutMyself;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(r),this._aboutMyself=document.querySelector(n)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,aboutMyself:this._aboutMyself.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._aboutMyself.textContent=e["about-myself"]}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var _=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=r,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputArray=Array.from(this._form.querySelectorAll(this._inputSelector)),this._button=this._form.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_addError",value:function(e){var t=document.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_deleteError",value:function(e){var t=document.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"_isValid",value:function(e){e.validity.valid?this._deleteError(e):this._addError(e)}},{key:"_invalidInput",value:function(){return this._inputArray.some((function(e){return!e.validity.valid}))}},{key:"_switchButton",value:function(){this._invalidInput()?this._button.classList.add(this._inactiveButtonClass):this._button.classList.remove(this._inactiveButtonClass)}},{key:"enableValidation",value:function(){var e=this;this._inputArray.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._switchButton()}))}))}},{key:"resetErrors",value:function(){var e=this;this._inputArray.forEach((function(t){e._deleteError(t)})),this._switchButton()}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=b(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},m.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E={formSelector:".form",inputSelector:".form__field",submitButtonSelector:".form__save",inactiveButtonClass:"form__save_nonactive",inputErrorClass:"form__field_error",errorClass:"form__field-error_active"},O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(n);if(o){var r=w(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return k(this,e)});function a(e,t,r,n){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(o=i.call(this,e))._callBack=t,o._openPopup=r,o._openButton=document.querySelector(n),o._form=o._popup.querySelector(E.formSelector),o._inputList=o._form.querySelectorAll(E.inputSelector),o._formValidator=new _(E,o._form),o._formValidator.enableValidation(),o._fieldsByName={},o}return t=a,(r=[{key:"getInput",value:function(e){return this._fieldsByName[e]}},{key:"getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"_createFieldsByName",value:function(){var e=this;this._inputList.forEach((function(t){return e._fieldsByName[t.name]=t}))}},{key:"_open",value:function(){this._openPopup(this),this._formValidator.resetErrors(),m(w(a.prototype),"_open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._createFieldsByName(),m(w(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._callBack(e),e._close()}),!1),this._openButton.addEventListener("click",(function(){e._open()}),!1)}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(n);function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var S=function(){function e(t,r,n){var o=t.items,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=i,this._items=o,this._cardGrid=document.querySelector(r),this._popup=n}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._renderer(this._popup,this._cardGrid,e)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(e._popup,e._cardGrid,t)}))}}])&&C(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),j=new f(".popup_image");j.setEventListeners(),new O(".popup_profile",(function(e){P.setUserInfo(e.getInputValues())}),(function(e){e.getInput("name").value=P.getUserInfo().name,e.getInput("about-myself").value=P.getUserInfo().aboutMyself}),".profile__info-button").setEventListeners(),new O(".popup_add",(function(e){L.addItem(e.getInputValues())}),(function(e){e.getInput("card-name").value="",e.getInput("card-link").value=""}),".profile__add").setEventListeners();var P=new d({name:".profile__info-name",aboutMyself:".profile__info-about-myself"}),L=new S({items:[{"card-name":"Архыз","card-link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{"card-name":"Челябинская область","card-link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{"card-name":"Иваново","card-link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{"card-name":"Камчатка","card-link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{"card-name":"Холмогорский район","card-link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{"card-name":"Байкал","card-link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e,r,n){r.prepend(new t(n,"card",e).getNewCard())}},".cards",j);L.renderItems()})();