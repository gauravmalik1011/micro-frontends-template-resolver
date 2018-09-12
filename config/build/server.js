/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-errors */ \"http-errors\");\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_pageRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/pageRenderer */ \"./src/utils/pageRenderer.js\");\nconst app=express__WEBPACK_IMPORTED_MODULE_1___default()();// view engine setup\n// app.engine(\"html\", es6Renderer);\n// app.set(\"views\", path.join(__dirname, \"views\"));\n// app.set(\"view engine\", \"html\");\napp.use(morgan__WEBPACK_IMPORTED_MODULE_4___default()(\"dev\"));app.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.json());app.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({extended:false}));app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());// app.use(\"/templates\", express.static(path.resolve(__dirname, \"./templates\")));\n// app.get(\"/templates/*\", express.static(path.resolve(__dirname, \"./templates\")));\napp.get(\"*\",_utils_pageRenderer__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);// catch 404 and forward to error handler\napp.use((req,res,next)=>{next(http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404));});// error handler\napp.use((err,req,res,next)=>{// set locals, only providing error in development\nres.locals.message=err.message;res.locals.error=req.app.get(\"env\")===\"development\"?err:{};// render the error page\nres.status(err.status||500);res.send(\"Error occurred : \"+err.message);});/* harmony default export */ __webpack_exports__[\"default\"] = (app);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzExMTIiXSwibmFtZXMiOlsiYXBwIiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImdldCIsInJlcSIsInJlcyIsIm5leHQiLCJlcnIiLCJsb2NhbHMiLCJtZXNzYWdlIiwiZXJyb3IiLCJzdGF0dXMiLCJzZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQSxLQUFNQSxJQUFHLENBQUcsOENBQU8sRUFBbkIsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSw2Q0FBTSxDQUFDLEtBQUQsQ0FBZCxFQUNBRCxHQUFHLENBQUNDLEdBQUosQ0FBUSw4Q0FBTyxDQUFDQyxJQUFSLEVBQVIsRUFDQUYsR0FBRyxDQUFDQyxHQUFKLENBQVEsOENBQU8sQ0FBQ0UsVUFBUixDQUFtQixDQUFFQyxRQUFRLENBQUUsS0FBWixDQUFuQixDQUFSLEVBQ0FKLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLG9EQUFZLEVBQXBCLEVBQ0E7QUFDQTtBQUVBRCxHQUFHLENBQUNLLEdBQUosQ0FBUSxHQUFSLENBQWEsMkRBQWIsRUFFQTtBQUNBTCxHQUFHLENBQUNDLEdBQUosQ0FBUSxDQUFDSyxHQUFELENBQU1DLEdBQU4sQ0FBV0MsSUFBWCxHQUFvQixDQUMxQkEsSUFBSSxDQUFDLGtEQUFXLENBQUMsR0FBRCxDQUFaLENBQUosQ0FDRCxDQUZELEVBSUE7QUFDQVIsR0FBRyxDQUFDQyxHQUFKLENBQVEsQ0FBQ1EsR0FBRCxDQUFNSCxHQUFOLENBQVdDLEdBQVgsQ0FBZ0JDLElBQWhCLEdBQXlCLENBQy9CO0FBQ0FELEdBQUcsQ0FBQ0csTUFBSixDQUFXQyxPQUFYLENBQXFCRixHQUFHLENBQUNFLE9BQXpCLENBQ0FKLEdBQUcsQ0FBQ0csTUFBSixDQUFXRSxLQUFYLENBQW1CTixHQUFHLENBQUNOLEdBQUosQ0FBUUssR0FBUixDQUFZLEtBQVosSUFBdUIsYUFBdkIsQ0FBdUNJLEdBQXZDLENBQTZDLEVBQWhFLENBRUE7QUFDQUYsR0FBRyxDQUFDTSxNQUFKLENBQVdKLEdBQUcsQ0FBQ0ksTUFBSixFQUFjLEdBQXpCLEVBQ0FOLEdBQUcsQ0FBQ08sSUFBSixDQUFTLG9CQUFzQkwsR0FBRyxDQUFDRSxPQUFuQyxFQUNELENBUkQsRUFVZSwrREFBQVgsR0FBZiIsImZpbGUiOiIuL3NyYy9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlRXJyb3IgZnJvbSBcImh0dHAtZXJyb3JzXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSBcImNvb2tpZS1wYXJzZXJcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIm1vcmdhblwiO1xuXG5pbXBvcnQgcGFnZVJlbmRlcmVyIGZyb20gXCIuL3V0aWxzL3BhZ2VSZW5kZXJlclwiO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbi8vIHZpZXcgZW5naW5lIHNldHVwXG4vLyBhcHAuZW5naW5lKFwiaHRtbFwiLCBlczZSZW5kZXJlcik7XG4vLyBhcHAuc2V0KFwidmlld3NcIiwgcGF0aC5qb2luKF9fZGlybmFtZSwgXCJ2aWV3c1wiKSk7XG4vLyBhcHAuc2V0KFwidmlldyBlbmdpbmVcIiwgXCJodG1sXCIpO1xuXG5hcHAudXNlKGxvZ2dlcihcImRldlwiKSk7XG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xuLy8gYXBwLnVzZShcIi90ZW1wbGF0ZXNcIiwgZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3RlbXBsYXRlc1wiKSkpO1xuLy8gYXBwLmdldChcIi90ZW1wbGF0ZXMvKlwiLCBleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vdGVtcGxhdGVzXCIpKSk7XG5cbmFwcC5nZXQoXCIqXCIsIHBhZ2VSZW5kZXJlcik7XG5cbi8vIGNhdGNoIDQwNCBhbmQgZm9yd2FyZCB0byBlcnJvciBoYW5kbGVyXG5hcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBuZXh0KGNyZWF0ZUVycm9yKDQwNCkpO1xufSk7XG5cbi8vIGVycm9yIGhhbmRsZXJcbmFwcC51c2UoKGVyciwgcmVxLCByZXMsIG5leHQpID0+IHtcbiAgLy8gc2V0IGxvY2Fscywgb25seSBwcm92aWRpbmcgZXJyb3IgaW4gZGV2ZWxvcG1lbnRcbiAgcmVzLmxvY2Fscy5tZXNzYWdlID0gZXJyLm1lc3NhZ2U7XG4gIHJlcy5sb2NhbHMuZXJyb3IgPSByZXEuYXBwLmdldChcImVudlwiKSA9PT0gXCJkZXZlbG9wbWVudFwiID8gZXJyIDoge307XG5cbiAgLy8gcmVuZGVyIHRoZSBlcnJvciBwYWdlXG4gIHJlcy5zdGF0dXMoZXJyLnN0YXR1cyB8fCA1MDApO1xuICByZXMuc2VuZChcIkVycm9yIG9jY3VycmVkIDogXCIgKyBlcnIubWVzc2FnZSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chalk */ \"chalk\");\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/**\n * Normalize a port into a number, string, or false.\n */const normalizePort=val=>{const port=parseInt(val,10);if(isNaN(port)){// named pipe\nreturn val;}if(port>=0){// port number\nreturn port;}return false;};/**\n * Event listener for HTTP server \"error\" event.\n */const onError=error=>{if(error.syscall!==\"listen\"){throw error;}const bind=typeof port===\"string\"?\"Pipe \"+port:\"Port \"+port;// handle specific listen errors with friendly messages\nswitch(error.code){case\"EACCES\":console.error(bind+\" requires elevated privileges\");process.exit(1);break;case\"EADDRINUSE\":console.error(bind+\" is already in use\");process.exit(1);break;default:throw error;}};/**\n * Event listener for HTTP server \"listening\" event.\n */const onListening=()=>{const addr=server.address();const bind=typeof addr===\"string\"?\"pipe :\"+addr:\"port :\"+addr.port;console.log(chalk__WEBPACK_IMPORTED_MODULE_1___default.a.blue(\"Listening on \"+bind));};/**\n * Get port from environment and store in Express.\n */const port=normalizePort(process.env.PORT||\"8000\");_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"port\",port);/**\n * Create HTTP server.\n */const server=http__WEBPACK_IMPORTED_MODULE_0___default.a.createServer(_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);/**\n * Listen on provided port, on all network interfaces.\n */server.listen(port);server.on(\"error\",onError);server.on(\"listening\",onListening);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJub3JtYWxpemVQb3J0IiwidmFsIiwicG9ydCIsInBhcnNlSW50IiwiaXNOYU4iLCJvbkVycm9yIiwiZXJyb3IiLCJzeXNjYWxsIiwiYmluZCIsImNvZGUiLCJjb25zb2xlIiwicHJvY2VzcyIsImV4aXQiLCJvbkxpc3RlbmluZyIsImFkZHIiLCJzZXJ2ZXIiLCJhZGRyZXNzIiwibG9nIiwiYmx1ZSIsImVudiIsIlBPUlQiLCJzZXQiLCJjcmVhdGVTZXJ2ZXIiLCJsaXN0ZW4iLCJvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0dBSUEsS0FBTUEsY0FBYSxDQUFHQyxHQUFHLEVBQUksQ0FDM0IsS0FBTUMsS0FBSSxDQUFHQyxRQUFRLENBQUNGLEdBQUQsQ0FBTSxFQUFOLENBQXJCLENBRUEsR0FBSUcsS0FBSyxDQUFDRixJQUFELENBQVQsQ0FBaUIsQ0FDZjtBQUNBLE1BQU9ELElBQVAsQ0FDRCxDQUVELEdBQUlDLElBQUksRUFBSSxDQUFaLENBQWUsQ0FDYjtBQUNBLE1BQU9BLEtBQVAsQ0FDRCxDQUVELE1BQU8sTUFBUCxDQUNELENBZEQsQ0FnQkE7O0dBSUEsS0FBTUcsUUFBTyxDQUFHQyxLQUFLLEVBQUksQ0FDdkIsR0FBSUEsS0FBSyxDQUFDQyxPQUFOLEdBQWtCLFFBQXRCLENBQWdDLENBQzlCLEtBQU1ELE1BQU4sQ0FDRCxDQUVELEtBQU1FLEtBQUksQ0FBRyxNQUFPTixLQUFQLEdBQWdCLFFBQWhCLENBQTJCLFFBQVVBLElBQXJDLENBQTRDLFFBQVVBLElBQW5FLENBRUE7QUFDQSxPQUFRSSxLQUFLLENBQUNHLElBQWQsRUFDRSxJQUFLLFFBQUwsQ0FDRUMsT0FBTyxDQUFDSixLQUFSLENBQWNFLElBQUksQ0FBRywrQkFBckIsRUFDQUcsT0FBTyxDQUFDQyxJQUFSLENBQWEsQ0FBYixFQUNBLE1BQ0YsSUFBSyxZQUFMLENBQ0VGLE9BQU8sQ0FBQ0osS0FBUixDQUFjRSxJQUFJLENBQUcsb0JBQXJCLEVBQ0FHLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLENBQWIsRUFDQSxNQUNGLFFBQ0UsS0FBTU4sTUFBTixDQVZKLENBWUQsQ0FwQkQsQ0FzQkE7O0dBSUEsS0FBTU8sWUFBVyxDQUFHLElBQU0sQ0FDeEIsS0FBTUMsS0FBSSxDQUFHQyxNQUFNLENBQUNDLE9BQVAsRUFBYixDQUNBLEtBQU1SLEtBQUksQ0FDUixNQUFPTSxLQUFQLEdBQWdCLFFBQWhCLENBQTJCLFNBQVdBLElBQXRDLENBQTZDLFNBQVdBLElBQUksQ0FBQ1osSUFEL0QsQ0FFQVEsT0FBTyxDQUFDTyxHQUFSLENBQVksNENBQUssQ0FBQ0MsSUFBTixDQUFXLGdCQUFrQlYsSUFBN0IsQ0FBWixFQUNELENBTEQsQ0FPQTs7R0FJQSxLQUFNTixLQUFJLENBQUdGLGFBQWEsQ0FBQ1csT0FBTyxDQUFDUSxHQUFSLENBQVlDLElBQVosRUFBb0IsTUFBckIsQ0FBMUIsQ0FDQSw0Q0FBRyxDQUFDQyxHQUFKLENBQVEsTUFBUixDQUFnQm5CLElBQWhCLEVBRUE7O0dBSUEsS0FBTWEsT0FBTSxDQUFHLDJDQUFJLENBQUNPLFlBQUwsQ0FBa0IsNENBQWxCLENBQWYsQ0FFQTs7R0FJQVAsTUFBTSxDQUFDUSxNQUFQLENBQWNyQixJQUFkLEVBQ0FhLE1BQU0sQ0FBQ1MsRUFBUCxDQUFVLE9BQVYsQ0FBbUJuQixPQUFuQixFQUNBVSxNQUFNLENBQUNTLEVBQVAsQ0FBVSxXQUFWLENBQXVCWCxXQUF2QiIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwIGZyb20gXCJodHRwXCI7XG5pbXBvcnQgY2hhbGsgZnJvbSBcImNoYWxrXCI7XG5pbXBvcnQgYXBwIGZyb20gXCIuL2FwcFwiO1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHBvcnQgaW50byBhIG51bWJlciwgc3RyaW5nLCBvciBmYWxzZS5cbiAqL1xuXG5jb25zdCBub3JtYWxpemVQb3J0ID0gdmFsID0+IHtcbiAgY29uc3QgcG9ydCA9IHBhcnNlSW50KHZhbCwgMTApO1xuXG4gIGlmIChpc05hTihwb3J0KSkge1xuICAgIC8vIG5hbWVkIHBpcGVcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgaWYgKHBvcnQgPj0gMCkge1xuICAgIC8vIHBvcnQgbnVtYmVyXG4gICAgcmV0dXJuIHBvcnQ7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEV2ZW50IGxpc3RlbmVyIGZvciBIVFRQIHNlcnZlciBcImVycm9yXCIgZXZlbnQuXG4gKi9cblxuY29uc3Qgb25FcnJvciA9IGVycm9yID0+IHtcbiAgaWYgKGVycm9yLnN5c2NhbGwgIT09IFwibGlzdGVuXCIpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIGNvbnN0IGJpbmQgPSB0eXBlb2YgcG9ydCA9PT0gXCJzdHJpbmdcIiA/IFwiUGlwZSBcIiArIHBvcnQgOiBcIlBvcnQgXCIgKyBwb3J0O1xuXG4gIC8vIGhhbmRsZSBzcGVjaWZpYyBsaXN0ZW4gZXJyb3JzIHdpdGggZnJpZW5kbHkgbWVzc2FnZXNcbiAgc3dpdGNoIChlcnJvci5jb2RlKSB7XG4gICAgY2FzZSBcIkVBQ0NFU1wiOlxuICAgICAgY29uc29sZS5lcnJvcihiaW5kICsgXCIgcmVxdWlyZXMgZWxldmF0ZWQgcHJpdmlsZWdlc1wiKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJFQUREUklOVVNFXCI6XG4gICAgICBjb25zb2xlLmVycm9yKGJpbmQgKyBcIiBpcyBhbHJlYWR5IGluIHVzZVwiKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuLyoqXG4gKiBFdmVudCBsaXN0ZW5lciBmb3IgSFRUUCBzZXJ2ZXIgXCJsaXN0ZW5pbmdcIiBldmVudC5cbiAqL1xuXG5jb25zdCBvbkxpc3RlbmluZyA9ICgpID0+IHtcbiAgY29uc3QgYWRkciA9IHNlcnZlci5hZGRyZXNzKCk7XG4gIGNvbnN0IGJpbmQgPVxuICAgIHR5cGVvZiBhZGRyID09PSBcInN0cmluZ1wiID8gXCJwaXBlIDpcIiArIGFkZHIgOiBcInBvcnQgOlwiICsgYWRkci5wb3J0O1xuICBjb25zb2xlLmxvZyhjaGFsay5ibHVlKFwiTGlzdGVuaW5nIG9uIFwiICsgYmluZCkpO1xufTtcblxuLyoqXG4gKiBHZXQgcG9ydCBmcm9tIGVudmlyb25tZW50IGFuZCBzdG9yZSBpbiBFeHByZXNzLlxuICovXG5cbmNvbnN0IHBvcnQgPSBub3JtYWxpemVQb3J0KHByb2Nlc3MuZW52LlBPUlQgfHwgXCI4MDAwXCIpO1xuYXBwLnNldChcInBvcnRcIiwgcG9ydCk7XG5cbi8qKlxuICogQ3JlYXRlIEhUVFAgc2VydmVyLlxuICovXG5cbmNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGFwcCk7XG5cbi8qKlxuICogTGlzdGVuIG9uIHByb3ZpZGVkIHBvcnQsIG9uIGFsbCBuZXR3b3JrIGludGVyZmFjZXMuXG4gKi9cblxuc2VydmVyLmxpc3Rlbihwb3J0KTtcbnNlcnZlci5vbihcImVycm9yXCIsIG9uRXJyb3IpO1xuc2VydmVyLm9uKFwibGlzdGVuaW5nXCIsIG9uTGlzdGVuaW5nKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/templateRegistry.js":
/*!*********************************!*\
  !*** ./src/templateRegistry.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({home:\"home.html\"});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVSZWdpc3RyeS5qcz81YTUyIl0sIm5hbWVzIjpbImhvbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQWUsZ0VBQ2JBLElBQUksQ0FBRSxXQURPLENBQWYiLCJmaWxlIjoiLi9zcmMvdGVtcGxhdGVSZWdpc3RyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgaG9tZTogXCJob21lLmh0bWxcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/templateRegistry.js\n");

/***/ }),

/***/ "./src/utils/fetch.js":
/*!****************************!*\
  !*** ./src/utils/fetch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\nconst fetch=(url,callback)=>{return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(function(response){return response.json();}).then(callback);};/* harmony default export */ __webpack_exports__[\"default\"] = (fetch);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZmV0Y2guanM/MWMxZSJdLCJuYW1lcyI6WyJmZXRjaCIsInVybCIsImNhbGxiYWNrIiwibm9kZUZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUEsS0FBTUEsTUFBSyxDQUFHLENBQUNDLEdBQUQsQ0FBTUMsUUFBTixHQUFtQixDQUMvQixNQUFPQyxDQUFBLGlEQUFTLENBQUNGLEdBQUQsQ0FBVCxDQUNKRyxJQURJLENBQ0MsU0FBU0MsUUFBVCxDQUFtQixDQUN2QixNQUFPQSxTQUFRLENBQUNDLElBQVQsRUFBUCxDQUNELENBSEksRUFJSkYsSUFKSSxDQUlDRixRQUpELENBQVAsQ0FLRCxDQU5ELENBUWUsK0RBQUFGLEtBQWYiLCJmaWxlIjoiLi9zcmMvdXRpbHMvZmV0Y2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZUZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XG5cbmNvbnN0IGZldGNoID0gKHVybCwgY2FsbGJhY2spID0+IHtcbiAgcmV0dXJuIG5vZGVGZXRjaCh1cmwpXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAudGhlbihjYWxsYmFjayk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/fetch.js\n");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: createScriptTag, createStyleTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createScriptTag\", function() { return createScriptTag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStyleTag\", function() { return createStyleTag; });\nconst createScriptTag=(src,$)=>{if(src){var scriptTag=$(\"<script>\");scriptTag.attr({type:\"text/javascript\",src:src});$(\"body\").append(scriptTag);}};const createStyleTag=(link,$)=>{if(link){var linkTag=$(\"<link>\");linkTag.attr({type:\"text/css\",rel:\"stylesheet\",href:link});$(\"head\").append(linkTag);}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXguanM/ZWQwOCJdLCJuYW1lcyI6WyJjcmVhdGVTY3JpcHRUYWciLCJzcmMiLCIkIiwic2NyaXB0VGFnIiwiYXR0ciIsInR5cGUiLCJhcHBlbmQiLCJjcmVhdGVTdHlsZVRhZyIsImxpbmsiLCJsaW5rVGFnIiwicmVsIiwiaHJlZiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQU8sS0FBTUEsZ0JBQWUsQ0FBRyxDQUFDQyxHQUFELENBQU1DLENBQU4sR0FBWSxDQUN6QyxHQUFJRCxHQUFKLENBQVMsQ0FDUCxHQUFJRSxVQUFTLENBQUdELENBQUMsQ0FBQyxVQUFELENBQWpCLENBQ0FDLFNBQVMsQ0FBQ0MsSUFBVixDQUFlLENBQ2JDLElBQUksQ0FBRSxpQkFETyxDQUViSixHQUFHLENBQUVBLEdBRlEsQ0FBZixFQUlBQyxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVJLE1BQVYsQ0FBaUJILFNBQWpCLEVBQ0QsQ0FDRixDQVRNLENBV0EsS0FBTUksZUFBYyxDQUFHLENBQUNDLElBQUQsQ0FBT04sQ0FBUCxHQUFhLENBQ3pDLEdBQUlNLElBQUosQ0FBVSxDQUNSLEdBQUlDLFFBQU8sQ0FBR1AsQ0FBQyxDQUFDLFFBQUQsQ0FBZixDQUNBTyxPQUFPLENBQUNMLElBQVIsQ0FBYSxDQUNYQyxJQUFJLENBQUUsVUFESyxDQUVYSyxHQUFHLENBQUUsWUFGTSxDQUdYQyxJQUFJLENBQUVILElBSEssQ0FBYixFQUtBTixDQUFDLENBQUMsTUFBRCxDQUFELENBQVVJLE1BQVYsQ0FBaUJHLE9BQWpCLEVBQ0QsQ0FDRixDQVZNIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNyZWF0ZVNjcmlwdFRhZyA9IChzcmMsICQpID0+IHtcbiAgaWYgKHNyYykge1xuICAgIHZhciBzY3JpcHRUYWcgPSAkKFwiPHNjcmlwdD5cIik7XG4gICAgc2NyaXB0VGFnLmF0dHIoe1xuICAgICAgdHlwZTogXCJ0ZXh0L2phdmFzY3JpcHRcIixcbiAgICAgIHNyYzogc3JjXG4gICAgfSk7XG4gICAgJChcImJvZHlcIikuYXBwZW5kKHNjcmlwdFRhZyk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTdHlsZVRhZyA9IChsaW5rLCAkKSA9PiB7XG4gIGlmIChsaW5rKSB7XG4gICAgdmFyIGxpbmtUYWcgPSAkKFwiPGxpbms+XCIpO1xuICAgIGxpbmtUYWcuYXR0cih7XG4gICAgICB0eXBlOiBcInRleHQvY3NzXCIsXG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogbGlua1xuICAgIH0pO1xuICAgICQoXCJoZWFkXCIpLmFwcGVuZChsaW5rVGFnKTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/index.js\n");

/***/ }),

/***/ "./src/utils/pageRenderer.js":
/*!***********************************!*\
  !*** ./src/utils/pageRenderer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cheerio */ \"cheerio\");\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/fetch */ \"./src/utils/fetch.js\");\n/* harmony import */ var _templateRegistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templateRegistry */ \"./src/templateRegistry.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst MODULE_RESOLVER_ENDPOINT=process.env.MODULE_RESOLVER_ENDPOINT||\"http://localhost:8001\";const pageRenderer=async(req,res,next)=>{const pageName=req.path.split(\"/\")[1];if(_templateRegistry__WEBPACK_IMPORTED_MODULE_5__[\"default\"][pageName]){const $=cheerio__WEBPACK_IMPORTED_MODULE_3___default.a.load(fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname,\"../templates/\",_templateRegistry__WEBPACK_IMPORTED_MODULE_5__[\"default\"][pageName])));const modulesPromiseList=[];$(\"[data-module]\").each((index,element)=>{const $element=$(element);const moduleName=$element.attr(\"data-module\");modulesPromiseList.push(Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(MODULE_RESOLVER_ENDPOINT+\"/\"+moduleName,content=>{$element.html(content.html);content.css.forEach(function(link){Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"createStyleTag\"])(link,$);});content.js.forEach(function(src){Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"createScriptTag\"])(src,$);});}));});await Promise.all(modulesPromiseList);res.send($.html());}else res.send(\"Unknown page.\");};/* harmony default export */ __webpack_exports__[\"default\"] = (pageRenderer);\n/* WEBPACK VAR INJECTION */}.call(this, \"src/utils\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcGFnZVJlbmRlcmVyLmpzPzkyM2MiXSwibmFtZXMiOlsiTU9EVUxFX1JFU09MVkVSX0VORFBPSU5UIiwicHJvY2VzcyIsImVudiIsInBhZ2VSZW5kZXJlciIsInJlcSIsInJlcyIsIm5leHQiLCJwYWdlTmFtZSIsInBhdGgiLCJzcGxpdCIsIiQiLCJsb2FkIiwicmVhZEZpbGVTeW5jIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsIm1vZHVsZXNQcm9taXNlTGlzdCIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCIkZWxlbWVudCIsIm1vZHVsZU5hbWUiLCJhdHRyIiwicHVzaCIsImNvbnRlbnQiLCJodG1sIiwiY3NzIiwiZm9yRWFjaCIsImxpbmsiLCJqcyIsInNyYyIsIlByb21pc2UiLCJhbGwiLCJzZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQSxLQUFNQSx5QkFBd0IsQ0FDNUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRix3QkFBWixFQUF3Qyx1QkFEMUMsQ0FHQSxLQUFNRyxhQUFZLENBQUcsTUFBT0MsR0FBUCxDQUFZQyxHQUFaLENBQWlCQyxJQUFqQixHQUEwQixDQUM3QyxLQUFNQyxTQUFRLENBQUdILEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxLQUFULENBQWUsR0FBZixFQUFvQixDQUFwQixDQUFqQixDQUVBLEdBQUkseURBQWdCLENBQUNGLFFBQUQsQ0FBcEIsQ0FBZ0MsQ0FDOUIsS0FBTUcsRUFBQyxDQUFHLDhDQUFPLENBQUNDLElBQVIsQ0FDUix5Q0FBRSxDQUFDQyxZQUFILENBQ0UsMkNBQUksQ0FBQ0MsT0FBTCxDQUFhQyxTQUFiLENBQXdCLGVBQXhCLENBQXlDLHlEQUFnQixDQUFDUCxRQUFELENBQXpELENBREYsQ0FEUSxDQUFWLENBTUEsS0FBTVEsbUJBQWtCLENBQUcsRUFBM0IsQ0FFQUwsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQk0sSUFBbkIsQ0FBd0IsQ0FBQ0MsS0FBRCxDQUFRQyxPQUFSLEdBQW9CLENBQzFDLEtBQU1DLFNBQVEsQ0FBR1QsQ0FBQyxDQUFDUSxPQUFELENBQWxCLENBQ0EsS0FBTUUsV0FBVSxDQUFHRCxRQUFRLENBQUNFLElBQVQsQ0FBYyxhQUFkLENBQW5CLENBRUFOLGtCQUFrQixDQUFDTyxJQUFuQixDQUNFLDREQUFLLENBQUN0Qix3QkFBd0IsQ0FBRyxHQUEzQixDQUFpQ29CLFVBQWxDLENBQThDRyxPQUFPLEVBQUksQ0FDNURKLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjRCxPQUFPLENBQUNDLElBQXRCLEVBRUFELE9BQU8sQ0FBQ0UsR0FBUixDQUFZQyxPQUFaLENBQW9CLFNBQVNDLElBQVQsQ0FBZSxDQUNqQyw2REFBYyxDQUFDQSxJQUFELENBQU9qQixDQUFQLENBQWQsQ0FDRCxDQUZELEVBSUFhLE9BQU8sQ0FBQ0ssRUFBUixDQUFXRixPQUFYLENBQW1CLFNBQVNHLEdBQVQsQ0FBYyxDQUMvQiw4REFBZSxDQUFDQSxHQUFELENBQU1uQixDQUFOLENBQWYsQ0FDRCxDQUZELEVBR0QsQ0FWSSxDQURQLEVBYUQsQ0FqQkQsRUFtQkEsS0FBTW9CLFFBQU8sQ0FBQ0MsR0FBUixDQUFZaEIsa0JBQVosQ0FBTixDQUVBVixHQUFHLENBQUMyQixJQUFKLENBQVN0QixDQUFDLENBQUNjLElBQUYsRUFBVCxFQUNELENBL0JELElBK0JPbkIsSUFBRyxDQUFDMkIsSUFBSixDQUFTLGVBQVQsRUFDUixDQW5DRCxDQXFDZSwrREFBQTdCLFlBQWYsRSIsImZpbGUiOiIuL3NyYy91dGlscy9wYWdlUmVuZGVyZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBjaGVlcmlvIGZyb20gXCJjaGVlcmlvXCI7XG5cbmltcG9ydCBmZXRjaCBmcm9tIFwiLi4vdXRpbHMvZmV0Y2hcIjtcbmltcG9ydCB0ZW1wbGF0ZVJlZ2lzdHJ5IGZyb20gXCIuLi90ZW1wbGF0ZVJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBjcmVhdGVTY3JpcHRUYWcsIGNyZWF0ZVN0eWxlVGFnIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmNvbnN0IE1PRFVMRV9SRVNPTFZFUl9FTkRQT0lOVCA9XG4gIHByb2Nlc3MuZW52Lk1PRFVMRV9SRVNPTFZFUl9FTkRQT0lOVCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMVwiO1xuXG5jb25zdCBwYWdlUmVuZGVyZXIgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgcGFnZU5hbWUgPSByZXEucGF0aC5zcGxpdChcIi9cIilbMV07XG5cbiAgaWYgKHRlbXBsYXRlUmVnaXN0cnlbcGFnZU5hbWVdKSB7XG4gICAgY29uc3QgJCA9IGNoZWVyaW8ubG9hZChcbiAgICAgIGZzLnJlYWRGaWxlU3luYyhcbiAgICAgICAgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLi90ZW1wbGF0ZXMvXCIsIHRlbXBsYXRlUmVnaXN0cnlbcGFnZU5hbWVdKVxuICAgICAgKVxuICAgICk7XG5cbiAgICBjb25zdCBtb2R1bGVzUHJvbWlzZUxpc3QgPSBbXTtcblxuICAgICQoXCJbZGF0YS1tb2R1bGVdXCIpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG4gICAgICBjb25zdCBtb2R1bGVOYW1lID0gJGVsZW1lbnQuYXR0cihcImRhdGEtbW9kdWxlXCIpO1xuXG4gICAgICBtb2R1bGVzUHJvbWlzZUxpc3QucHVzaChcbiAgICAgICAgZmV0Y2goTU9EVUxFX1JFU09MVkVSX0VORFBPSU5UICsgXCIvXCIgKyBtb2R1bGVOYW1lLCBjb250ZW50ID0+IHtcbiAgICAgICAgICAkZWxlbWVudC5odG1sKGNvbnRlbnQuaHRtbCk7XG5cbiAgICAgICAgICBjb250ZW50LmNzcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmspIHtcbiAgICAgICAgICAgIGNyZWF0ZVN0eWxlVGFnKGxpbmssICQpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29udGVudC5qcy5mb3JFYWNoKGZ1bmN0aW9uKHNyYykge1xuICAgICAgICAgICAgY3JlYXRlU2NyaXB0VGFnKHNyYywgJCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwobW9kdWxlc1Byb21pc2VMaXN0KTtcblxuICAgIHJlcy5zZW5kKCQuaHRtbCgpKTtcbiAgfSBlbHNlIHJlcy5zZW5kKFwiVW5rbm93biBwYWdlLlwiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VSZW5kZXJlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/pageRenderer.js\n");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"@babel/polyfill");
module.exports = __webpack_require__(/*! /Users/vidshah/Projects/micro-frontends/template-resolver/src/index.js */"./src/index.js");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcG9seWZpbGxcIj83MDhkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBiYWJlbC9wb2x5ZmlsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9wb2x5ZmlsbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@babel/polyfill\n");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGFsa1wiPzA3Y2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiY2hhbGsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGFsa1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///chalk\n");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cheerio\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGVlcmlvXCI/MTRiMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjaGVlcmlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hlZXJpb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cheerio\n");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWUtcGFyc2VyXCI/MjFkYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb29raWUtcGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cookie-parser\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/MjJmZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJleHByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCI/OGQxOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJodHRwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///http\n");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-errors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwLWVycm9yc1wiPzIxODMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiaHR0cC1lcnJvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwLWVycm9yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///http-errors\n");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIj8zMjA2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1vcmdhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///morgan\n");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWZldGNoXCI/NWNkNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub2RlLWZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///node-fetch\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ })

/******/ });