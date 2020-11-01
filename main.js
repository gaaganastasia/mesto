(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._formConfig=e,this._formElement=n}var n,r;return n=t,(r=[{key:"_showInputError",value:function(e,t){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.add(this._formConfig.inputTypeError),this._errorElement.textContent=t,this._errorElement.classList.add(this._formConfig.inputErrorActive)}},{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.remove(this._formConfig.inputTypeError),this._errorElement.classList.remove(this._formConfig.inputErrorActive),this._errorElement.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"enableValidation",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._formConfig.formInput)),this._buttonElement=this._formElement.querySelector(this._formConfig.formSubmit),this._toggleButtonState(this._inputList,this._buttonElement),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._inputList,e._buttonElement)}))}))}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?(t.classList.add(this._formConfig.buttonDisabled),t.setAttribute("disabled",!0)):(t.classList.remove(this._formConfig.buttonDisabled),t.removeAttribute("disabled"))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.cardTitle,o=t.cardSrc,i=t.cardTemplate;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=r,this._src=o,this._card=i.cloneNode(!0),this._handleCardClick=n}var t,r;return t=e,(r=[{key:"setEventListeners",value:function(){var e=this;this._card.querySelector(".element__like").addEventListener("click",(function(t){e._toggleLike(t)})),this._card.querySelector(".element__delete").addEventListener("click",(function(t){e._removeCard(t)})),this._cardImage.addEventListener("click",(function(t){e._handleCardClick(t)}))}},{key:"_toggleLike",value:function(e){e.target.classList.toggle("element__like_active")}},{key:"_removeCard",value:function(e){var t=this;this._cardImage.removeEventListener("click",(function(e){t._handleCardClick(e)})),e.target.closest(".element").remove()}},{key:"generateCard",value:function(){return this._card.querySelector(".element__title").textContent=this._title,this._cardImage=this._card.querySelector(".element__image"),this._cardImage.setAttribute("src",this._src),this._cardImage.setAttribute("alt",this._title),this.setEventListeners(),this._card}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=t.name,this._userInfo=t.job}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userInfo:this._userInfo.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userInfo.textContent=t}}])&&u(t.prototype,n),e}(),a=document.querySelector(".template-card").content,l=document.querySelector(".elements"),s={form:".popup-form__container",formInput:".popup-form__input",inputTypeError:"popup-form__input_type_error",inputErrorActive:"popup-form__input-error_active",formSubmit:".popup-form__submit",buttonDisabled:"popup-form__submit_disabled"},f=document.querySelector(".popup-add"),p=document.querySelector(".profile__add-button"),d=document.querySelector(".popup-add__container"),h=document.querySelector(".popup-img"),m=document.querySelector(".popup-img__caption"),y=document.querySelector(".popup-img__image"),_=document.querySelector(".popup-edit"),v=document.querySelector(".info__edit-button"),b=document.querySelector(".popup-edit__container"),g=document.querySelector(".popup-edit__input_name"),E=document.querySelector(".popup-edit__input_job"),k={name:document.querySelector(".info__title"),job:document.querySelector(".info__subtitle")},w={title:document.querySelector(".popup-add__input_title"),src:document.querySelector(".popup-add__input_url")};function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),this.setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(e){27===e.keyCode&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;document.addEventListener("click",(function(t){e._handleOverlayClose(t)})),document.addEventListener("keydown",(function(t){e._handleEscClose(t)})),this._popup.querySelector(".popup__reset").addEventListener("click",this.close)}}])&&S(t.prototype,n),e}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t,n){return(L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function u(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._caption=t,r._photo=n,r}return t=u,(n=[{key:"open",value:function(e,t){var n=e,r=t;this._caption.textContent=n,this._photo.setAttribute("src",r),this._photo.setAttribute("alt",r),L(x(u.prototype),"open",this).call(this)}}])&&I(t.prototype,n),u}(C);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t,n){return(D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submit=t,n}return t=u,(n=[{key:"_getInputValues",value:function(e){return{titleValue:e.title.value,srcValue:e.src.value}}},{key:"setEventListeners",value:function(){this._popup.querySelector(".popup-form__container").addEventListener("submit",this._submit),D(B(u.prototype),"setEventListeners",this).call(this)}}])&&R(t.prototype,n),u}(C),M=new P(h,m,y),H=new c(k),J=function(e){new t(s,e).enableValidation()},Q=new N(_,(function(e){e.preventDefault(),H.setUserInfo(g.value,E.value),Q.close()})),U=new N(f,(function(e){e.preventDefault();var t=U._getInputValues(w),n=t.titleValue,o=t.srcValue,i=new r({cardTitle:n,cardSrc:o,cardTemplate:a},z);W.addItem(i.generateCard()),w.title.value="",w.src.value="",U.close()})),W=new i({items:[{name:"Neon",link:"https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=823&q=80"},{name:"Cyberpunk",link:"https://images.unsplash.com/photo-1531279550271-23c2a77a765c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"},{name:"Neon Lights",link:"https://images.unsplash.com/photo-1530919424169-4b95f917e937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"},{name:"Light Background",link:"https://images.unsplash.com/photo-1515693516428-3c89b92d3220?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"},{name:"Light Tunnel",link:"https://images.unsplash.com/photo-1553675559-5046b59a5ca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"},{name:"Neon City",link:"https://images.unsplash.com/photo-1582476098883-598790a693d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"}],renderer:function(e){var t=e.name,n=e.link,o=new r({cardTitle:t,cardSrc:n,cardTemplate:a},z);W.addItem(o.generateCard())}},l);function z(e){var t=e.target.getAttribute("alt"),n=e.target.getAttribute("src");M.open(t,n)}W.renderItems(),v.addEventListener("click",(function(){Q.open(),J(b),g.value=H.getUserInfo().userName,E.value=H.getUserInfo().userInfo})),p.addEventListener("click",(function(){U.open(),J(d)}))})();