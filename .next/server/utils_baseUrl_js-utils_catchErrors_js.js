exports.id = "utils_baseUrl_js-utils_catchErrors_js";
exports.ids = ["utils_baseUrl_js-utils_catchErrors_js"];
exports.modules = {

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(module) {

const baseUrl =  true ? "http://localhost:3000" : 0;
module.exports = baseUrl;

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg;

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXJuLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vbWVybi1zb2NpYWwtbWVkaWEvLi91dGlscy9jYXRjaEVycm9ycy5qcyIsIndlYnBhY2s6Ly9tZXJuLXNvY2lhbC1tZWRpYS9pZ25vcmVkfEM6XFxVc2Vyc1xcTGF3cmVuY2UgQW50aG9ueVxcRGVza3RvcFxcY2Fwc3RvbmUgcHJvamVjdCBDVlJcXE1FUk4gc29jaWxhIG1lZGlhXFxjYXBzdG9uZS1wcm9qZWN0LWxhd3JlbmNlLWFudGhvbnktYXUxM1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2F0Y2hFcnJvcnMiLCJlcnJvciIsImVycm9yTXNnIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsInJlcXVlc3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTUEsT0FBTyxHQUNYLFFBQ0ksdUJBREosR0FFSSxDQUhOO0FBS0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkYsT0FBakIsQzs7Ozs7Ozs7Ozs7O0FDTEEsTUFBTUcsV0FBVyxHQUFHQyxLQUFLLElBQUk7QUFDM0IsTUFBSUMsUUFBSjs7QUFFQSxNQUFJRCxLQUFLLENBQUNFLFFBQVYsRUFBb0I7QUFDbEI7QUFFQUQsWUFBUSxHQUFHRCxLQUFLLENBQUNFLFFBQU4sQ0FBZUMsSUFBMUI7QUFFQUMsV0FBTyxDQUFDSixLQUFSLENBQWNDLFFBQWQ7QUFDRCxHQU5ELE1BTU8sSUFBSUQsS0FBSyxDQUFDSyxPQUFWLEVBQW1CO0FBQ3hCO0FBQ0FKLFlBQVEsR0FBR0QsS0FBSyxDQUFDSyxPQUFqQjtBQUVBRCxXQUFPLENBQUNKLEtBQVIsQ0FBY0MsUUFBZDtBQUNELEdBTE0sTUFLQTtBQUNMO0FBQ0FBLFlBQVEsR0FBR0QsS0FBSyxDQUFDTSxPQUFqQjtBQUVBRixXQUFPLENBQUNKLEtBQVIsQ0FBY0MsUUFBZDtBQUNEOztBQUNELFNBQU9BLFFBQVA7QUFDRCxDQXJCRDs7QUF1QkEsK0RBQWVGLFdBQWYsRTs7Ozs7Ozs7OztBQ3ZCQSxlIiwiZmlsZSI6InV0aWxzX2Jhc2VVcmxfanMtdXRpbHNfY2F0Y2hFcnJvcnNfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYXNlVXJsID1cclxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCJcclxuICAgID8gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIlxyXG4gICAgOiBcImh0dHBzOi8vaW5kZXItc29jaWFsLW1lZGlhMi5oZXJva3VhcHAuY29tXCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVcmw7XHJcbiIsImNvbnN0IGNhdGNoRXJyb3JzID0gZXJyb3IgPT4ge1xyXG4gIGxldCBlcnJvck1zZztcclxuXHJcbiAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAvLyBJZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciBub3QgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZSBpbiB0aGUgcmFuZ2Ugb2YgMnh4XHJcblxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgLy8gaWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIG5vIHJlc3BvbnNlIHdhcyByZWNldmllZCBmcm9tIHNlcnZlclxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiBzb21ldGhpbmcgZWxzZSBoYXBwZW5lZCB3aGlsZSBtYWtpbmcgdGhlIHJlcXVlc3RcclxuICAgIGVycm9yTXNnID0gZXJyb3IubWVzc2FnZTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yTXNnO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hFcnJvcnM7XHJcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=