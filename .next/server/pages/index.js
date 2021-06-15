(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Home/MessageNotificationModal.js":
/*!*****************************************************!*\
  !*** ./components/Home/MessageNotificationModal.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
var _jsxFileName = "C:\\Users\\Lawrence Anthony\\Desktop\\capstone project CVR\\MERN socila media\\capstone-project-lawrence-anthony-au13\\components\\Home\\MessageNotificationModal.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function MessageNotificationModal({
  socket,
  showNewMessageModal,
  newMessageModal,
  newMessageReceived,
  user
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const onModalClose = () => showNewMessageModal(false);

  const formSubmit = e => {
    e.preventDefault();

    if (socket.current) {
      socket.current.emit("sendMsgFromNotification", {
        userId: user._id,
        msgSendToUserId: newMessageReceived.sender,
        msg: text
      });
      socket.current.on("msgSentFromNotification", () => {
        showNewMessageModal(false);
      });
    }
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    size: "small",
    open: newMessageModal,
    onClose: onModalClose,
    closeIcon: true,
    closeOnDimmerClick: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Header, {
    content: `New Message from ${newMessageReceived.senderName}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bubbleWrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inlineContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "inlineIcon",
    src: newMessageReceived.senderProfilePic,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "otherBubble other",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, newMessageReceived.msg), __jsx("span", {
    className: "other",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__.default)(newMessageReceived.date))), __jsx("div", {
    style: {
      position: "sticky",
      bottom: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    secondary: true,
    color: "teal",
    attached: "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    reply: true,
    onSubmit: formSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    size: "large",
    placeholder: "Send New Message",
    value: text,
    onChange: e => setText(e.target.value),
    action: {
      color: "blue",
      icon: "telegram plane",
      disabled: text === "",
      loading: loading
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  })))), __jsx("div", {
    style: {
      marginTop: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: `/messages?message=${newMessageReceived.sender}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "View All Messages")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }), __jsx(Instructions, {
    username: user.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  })))));
}

const Instructions = ({
  username
}) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 3
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  name: "help",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 7
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 7
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 9
  }
}, "If you do not like this popup to appear when you receive a new message:"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  name: "hand point right",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 7
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 7
  }
}, "You can disable it by going to", __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
  href: `/${username}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 11
  }
}, " Account ")), "Page and clicking on Settings Tab.")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  name: "hand point right",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 7
  }
}), "Inside the menu,there is an setting named: Show New Message Popup?"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  name: "hand point right",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 7
  }
}), "Just toggle the setting to disable/enable the Message Popup to appear."));

/* harmony default export */ __webpack_exports__["default"] = (MessageNotificationModal);

/***/ }),

/***/ "./components/Home/NotificationPortal.js":
/*!***********************************************!*\
  !*** ./components/Home/NotificationPortal.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/newMsgSound */ "./utils/newMsgSound.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
var _jsxFileName = "C:\\Users\\Lawrence Anthony\\Desktop\\capstone project CVR\\MERN socila media\\capstone-project-lawrence-anthony-au13\\components\\Home\\NotificationPortal.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function NotificationPortal({
  newNotification,
  notificationPopup,
  showNotificationPopup
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    name,
    profilePicUrl,
    username,
    postId
  } = newNotification;
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.TransitionablePortal, {
    transition: {
      animation: "fade left",
      duration: "500"
    },
    onClose: () => notificationPopup && showNotificationPopup(false),
    onOpen: _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_2__.default,
    open: notificationPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    style: {
      right: "5%",
      position: "fixed",
      top: "10%",
      zIndex: 1000
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "close",
    size: "large",
    style: {
      float: "right",
      cursor: "pointer"
    },
    onClick: () => showNotificationPopup(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Event, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Summary, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.User, {
    onClick: () => router.push(`/${username}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, name, " "), " ", "liked your ", __jsx("a", {
    onClick: () => router.push(`/post/${postId}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 28
    }
  }, " post"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Date, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(Date.now()))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (NotificationPortal);

/***/ }),

/***/ "./components/Post/CreatePost.js":
/*!***************************************!*\
  !*** ./components/Post/CreatePost.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
var _jsxFileName = "C:\\Users\\Lawrence Anthony\\Desktop\\capstone project CVR\\MERN socila media\\capstone-project-lawrence-anthony-au13\\components\\Post\\CreatePost.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function CreatePost({
  user,
  setPosts
}) {
  const {
    0: newPost,
    1: setNewPost
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    text: "",
    location: ""
  });
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setNewPost(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const addStyles = () => ({
    textAlign: "center",
    height: "150px",
    width: "150px",
    border: "dotted",
    paddingTop: media === null && "60px",
    cursor: "pointer",
    borderColor: highlighted ? "green" : "black"
  });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    let picUrl;

    if (media !== null) {
      picUrl = await (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_2__.default)(media);

      if (!picUrl) {
        setLoading(false);
        return setError("Error Uploading Image");
      }
    }

    await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_3__.submitNewPost)(newPost.text, newPost.location, picUrl, setPosts, setNewPost, setError);
    setMedia(null);
    setMediaPreview(null);
    setLoading(false);
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    error: error !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    error: true,
    onDismiss: () => setError(null),
    content: error,
    header: "Oops!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: user.profilePicUrl,
    circular: true,
    avatar: true,
    inline: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.TextArea, {
    placeholder: "Whats Happening",
    name: "text",
    value: newPost.text,
    onChange: handleChange,
    rows: 4,
    width: 14,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    value: newPost.location,
    name: "location",
    onChange: handleChange,
    label: "Add Location",
    icon: "map marker alternate",
    placeholder: "Want to add Location?",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }), __jsx("input", {
    ref: inputRef,
    onChange: handleChange,
    name: "media",
    style: {
      display: "none"
    },
    type: "file",
    accept: "image/*",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  })), __jsx("div", {
    onClick: () => inputRef.current.click(),
    style: addStyles(),
    onDrag: e => {
      e.preventDefault();
      setHighlighted(true);
    },
    onDragLeave: e => {
      e.preventDefault();
      setHighlighted(false);
    },
    onDrop: e => {
      e.preventDefault();
      setHighlighted(true);
      const droppedFile = Array.from(e.dataTransfer.files);
      setMedia(droppedFile[0]);
      setMediaPreview(URL.createObjectURL(droppedFile[0]));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, media === null ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "plus",
    size: "big",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    style: {
      height: "150px",
      width: "150px"
    },
    src: mediaPreview,
    alt: "PostImage",
    centered: true,
    size: "medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    circular: true,
    disabled: newPost.text === "" || loading,
    content: __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 20
      }
    }, "Post"),
    style: {
      backgroundColor: "#1DA1F2",
      color: "white"
    },
    icon: "send",
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CreatePost);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Post/CreatePost */ "./components/Post/CreatePost.js");
/* harmony import */ var _components_Post_CardPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Post/CardPost */ "./components/Post/CardPost.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout/Toastr */ "./components/Layout/Toastr.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-infinite-scroll-component */ "react-infinite-scroll-component");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_getUserInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/getUserInfo */ "./utils/getUserInfo.js");
/* harmony import */ var _components_Home_MessageNotificationModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Home/MessageNotificationModal */ "./components/Home/MessageNotificationModal.js");
/* harmony import */ var _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/newMsgSound */ "./utils/newMsgSound.js");
/* harmony import */ var _components_Home_NotificationPortal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Home/NotificationPortal */ "./components/Home/NotificationPortal.js");
var _jsxFileName = "C:\\Users\\Lawrence Anthony\\Desktop\\capstone project CVR\\MERN socila media\\capstone-project-lawrence-anthony-au13\\pages\\index.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















function Index({
  user,
  postsData,
  errorLoading
}) {
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(postsData || []);
  const {
    0: showToastr,
    1: setShowToastr
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: hasMore,
    1: setHasMore
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: pageNumber,
    1: setPageNumber
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
  const socket = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    0: newMessageReceived,
    1: setNewMessageReceived
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: newMessageModal,
    1: showNewMessageModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: newNotification,
    1: setNewNotification
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: notificationPopup,
    1: showNotificationPopup
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!socket.current) {
      socket.current = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()((_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default()));
    }

    if (socket.current) {
      socket.current.emit("join", {
        userId: user._id
      });
      socket.current.on("newMsgReceived", async ({
        newMsg
      }) => {
        const {
          name,
          profilePicUrl
        } = await (0,_utils_getUserInfo__WEBPACK_IMPORTED_MODULE_13__.default)(newMsg.sender);

        if (user.newMessagePopup) {
          setNewMessageReceived(_objectSpread(_objectSpread({}, newMsg), {}, {
            senderName: name,
            senderProfilePic: profilePicUrl
          }));
          showNewMessageModal(true);
        }

        (0,_utils_newMsgSound__WEBPACK_IMPORTED_MODULE_15__.default)(name);
      });
    }

    document.title = `Welcome, ${user.name.split(" ")[0]}`;
    return () => {
      if (socket.current) {
        socket.current.emit("disconnect");
        socket.current.off();
      }
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    showToastr && setTimeout(() => setShowToastr(false), 3000);
  }, [showToastr]);

  const fetchDataOnScroll = async () => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default())}/api/posts`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_12___default().get("token")
        },
        params: {
          pageNumber
        }
      });
      if (res.data.length === 0) setHasMore(false);
      setPosts(prev => [...prev, ...res.data]);
      setPageNumber(prev => prev + 1);
    } catch (error) {
      alert("Error fetching Posts");
    }
  };

  if (posts.length === 0 || errorLoading) return __jsx(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_8__.NoPosts, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 50
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (socket.current) {
      socket.current.on("newNotificationReceived", ({
        name,
        profilePicUrl,
        username,
        postId
      }) => {
        setNewNotification({
          name,
          profilePicUrl,
          username,
          postId
        });
        showNotificationPopup(true);
      });
    }
  }, []);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, notificationPopup && newNotification !== null && __jsx(_components_Home_NotificationPortal__WEBPACK_IMPORTED_MODULE_16__.default, {
    newNotification: newNotification,
    notificationPopup: notificationPopup,
    showNotificationPopup: showNotificationPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }), showToastr && __jsx(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_9__.PostDeleteToastr, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 22
    }
  }), newMessageModal && newMessageReceived !== null && __jsx(_components_Home_MessageNotificationModal__WEBPACK_IMPORTED_MODULE_14__.default, {
    socket: socket,
    showNewMessageModal: showNewMessageModal,
    newMessageModal: newMessageModal,
    newMessageReceived: newMessageReceived,
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, __jsx(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_4__.default, {
    user: user,
    setPosts: setPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }), __jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default()), {
    hasMore: hasMore,
    next: fetchDataOnScroll,
    loader: __jsx(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__.PlaceHolderPosts, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 19
      }
    }),
    endMessage: __jsx(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__.EndMessage, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 23
      }
    }),
    dataLength: posts.length,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, posts.map(post => __jsx(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_5__.default, {
    socket: socket,
    key: post._id,
    post: post,
    user: user,
    setPosts: setPosts,
    setShowToastr: setShowToastr,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  })))));
}

Index.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_7__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default())}/api/posts`, {
      headers: {
        Authorization: token
      },
      params: {
        pageNumber: 1
      }
    });
    return {
      postsData: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/getUserInfo.js":
/*!******************************!*\
  !*** ./utils/getUserInfo.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);




const getUserInfo = async userToFindId => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/chats/user/${userToFindId}`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("token")
      }
    });
    return {
      name: res.data.name,
      profilePicUrl: res.data.profilePicUrl
    };
  } catch (error) {
    console.error(error);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getUserInfo);

/***/ }),

/***/ "./utils/newMsgSound.js":
/*!******************************!*\
  !*** ./utils/newMsgSound.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const newMsgSound = senderName => {
  const sound = new Audio("/light.mp3");
  sound && sound.play();

  if (senderName) {
    document.title = `New message from ${senderName}`;

    if (document.visibilityState === "visible") {
      setTimeout(() => {
        document.title = "Messages";
      }, 5000);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (newMsgSound);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("lodash");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-infinite-scroll-component":
/*!**************************************************!*\
  !*** external "react-infinite-scroll-component" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-infinite-scroll-component");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-moment");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_baseUrl_js-utils_catchErrors_js","components_Layout_NoData_js-components_Layout_Toastr_js-components_Post_CardPost_js-utils_upl-d2318b"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXJuLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvSG9tZS9NZXNzYWdlTm90aWZpY2F0aW9uTW9kYWwuanMiLCJ3ZWJwYWNrOi8vbWVybi1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0hvbWUvTm90aWZpY2F0aW9uUG9ydGFsLmpzIiwid2VicGFjazovL21lcm4tc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L0NyZWF0ZVBvc3QuanMiLCJ3ZWJwYWNrOi8vbWVybi1zb2NpYWwtbWVkaWEvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZXJuLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2dldFVzZXJJbmZvLmpzIiwid2VicGFjazovL21lcm4tc29jaWFsLW1lZGlhLy4vdXRpbHMvbmV3TXNnU291bmQuanMiLCJ3ZWJwYWNrOi8vbWVybi1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL21lcm4tc29jaWFsLW1lZGlhL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vbWVybi1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly9tZXJuLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL21lcm4tc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL21lcm4tc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL21lcm4tc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9tZXJuLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly9tZXJuLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWVybi1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vbWVybi1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL21lcm4tc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtbW9tZW50XCIiLCJ3ZWJwYWNrOi8vbWVybi1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL21lcm4tc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9tZXJuLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNvY2tldC5pby1jbGllbnRcIiJdLCJuYW1lcyI6WyJNZXNzYWdlTm90aWZpY2F0aW9uTW9kYWwiLCJzb2NrZXQiLCJzaG93TmV3TWVzc2FnZU1vZGFsIiwibmV3TWVzc2FnZU1vZGFsIiwibmV3TWVzc2FnZVJlY2VpdmVkIiwidXNlciIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uTW9kYWxDbG9zZSIsImZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwiZW1pdCIsInVzZXJJZCIsIl9pZCIsIm1zZ1NlbmRUb1VzZXJJZCIsInNlbmRlciIsIm1zZyIsIm9uIiwic2VuZGVyTmFtZSIsInNlbmRlclByb2ZpbGVQaWMiLCJjYWxjdWxhdGVUaW1lIiwiZGF0ZSIsInBvc2l0aW9uIiwiYm90dG9tIiwidGFyZ2V0IiwidmFsdWUiLCJjb2xvciIsImljb24iLCJkaXNhYmxlZCIsIm1hcmdpblRvcCIsInVzZXJuYW1lIiwiSW5zdHJ1Y3Rpb25zIiwiTm90aWZpY2F0aW9uUG9ydGFsIiwibmV3Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uUG9wdXAiLCJzaG93Tm90aWZpY2F0aW9uUG9wdXAiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJuYW1lIiwicHJvZmlsZVBpY1VybCIsInBvc3RJZCIsImFuaW1hdGlvbiIsImR1cmF0aW9uIiwibmV3TXNnU291bmQiLCJyaWdodCIsInRvcCIsInpJbmRleCIsImZsb2F0IiwiY3Vyc29yIiwicHVzaCIsIkRhdGUiLCJub3ciLCJDcmVhdGVQb3N0Iiwic2V0UG9zdHMiLCJuZXdQb3N0Iiwic2V0TmV3UG9zdCIsImxvY2F0aW9uIiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJlcnJvciIsInNldEVycm9yIiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsIm1lZGlhIiwic2V0TWVkaWEiLCJtZWRpYVByZXZpZXciLCJzZXRNZWRpYVByZXZpZXciLCJoYW5kbGVDaGFuZ2UiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInByZXYiLCJhZGRTdHlsZXMiLCJ0ZXh0QWxpZ24iLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlciIsInBhZGRpbmdUb3AiLCJib3JkZXJDb2xvciIsImhhbmRsZVN1Ym1pdCIsInBpY1VybCIsInVwbG9hZFBpYyIsInN1Ym1pdE5ld1Bvc3QiLCJkaXNwbGF5IiwiY2xpY2siLCJkcm9wcGVkRmlsZSIsIkFycmF5IiwiZnJvbSIsImRhdGFUcmFuc2ZlciIsImJhY2tncm91bmRDb2xvciIsIkluZGV4IiwicG9zdHNEYXRhIiwiZXJyb3JMb2FkaW5nIiwicG9zdHMiLCJzaG93VG9hc3RyIiwic2V0U2hvd1RvYXN0ciIsImhhc01vcmUiLCJzZXRIYXNNb3JlIiwicGFnZU51bWJlciIsInNldFBhZ2VOdW1iZXIiLCJzZXROZXdNZXNzYWdlUmVjZWl2ZWQiLCJzZXROZXdOb3RpZmljYXRpb24iLCJ1c2VFZmZlY3QiLCJpbyIsImJhc2VVcmwiLCJuZXdNc2ciLCJnZXRVc2VySW5mbyIsIm5ld01lc3NhZ2VQb3B1cCIsImRvY3VtZW50IiwidGl0bGUiLCJzcGxpdCIsIm9mZiIsInNldFRpbWVvdXQiLCJmZXRjaERhdGFPblNjcm9sbCIsInJlcyIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb29raWUiLCJwYXJhbXMiLCJkYXRhIiwibGVuZ3RoIiwiYWxlcnQiLCJtYXAiLCJwb3N0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwidG9rZW4iLCJwYXJzZUNvb2tpZXMiLCJ1c2VyVG9GaW5kSWQiLCJjb25zb2xlIiwic291bmQiLCJBdWRpbyIsInBsYXkiLCJ2aXNpYmlsaXR5U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Esd0JBQVQsQ0FBa0M7QUFDaENDLFFBRGdDO0FBRWhDQyxxQkFGZ0M7QUFHaENDLGlCQUhnQztBQUloQ0Msb0JBSmdDO0FBS2hDQztBQUxnQyxDQUFsQyxFQU1HO0FBQ0QsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLCtDQUFRLENBQUMsS0FBRCxDQUF0Qzs7QUFFQSxRQUFNRyxZQUFZLEdBQUcsTUFBTVQsbUJBQW1CLENBQUMsS0FBRCxDQUE5Qzs7QUFFQSxRQUFNVSxVQUFVLEdBQUdDLENBQUMsSUFBSTtBQUN0QkEsS0FBQyxDQUFDQyxjQUFGOztBQUVBLFFBQUliLE1BQU0sQ0FBQ2MsT0FBWCxFQUFvQjtBQUNsQmQsWUFBTSxDQUFDYyxPQUFQLENBQWVDLElBQWYsQ0FBb0IseUJBQXBCLEVBQStDO0FBQzdDQyxjQUFNLEVBQUVaLElBQUksQ0FBQ2EsR0FEZ0M7QUFFN0NDLHVCQUFlLEVBQUVmLGtCQUFrQixDQUFDZ0IsTUFGUztBQUc3Q0MsV0FBRyxFQUFFZjtBQUh3QyxPQUEvQztBQU1BTCxZQUFNLENBQUNjLE9BQVAsQ0FBZU8sRUFBZixDQUFrQix5QkFBbEIsRUFBNkMsTUFBTTtBQUNqRHBCLDJCQUFtQixD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QVQ7O0FBRUEsTUFBSW5ILFVBQUosRUFBZ0I7QUFDZDBGLFlBQVEsQ0FBQ0MsS0FBVCxHQUFrQixvQkFBbUIzRixVQUFXLEVBQWhEOztBQUVBLFFBQUkwRixRQUFRLENBQUMwQixlQUFULEtBQTZCLFNBQWpDLEVBQTRDO0FBQzFDdEIsZ0JBQVUsQ0FBQyxNQUFNO0FBQ2ZKLGdCQUFRLENBQUNDLEtBQVQsR0FBaUIsVUFBakI7QUFDRCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7QUFDRjtBQUNGLENBZEQ7O0FBZ0JBLCtEQUFlbEUsV0FBZixFOzs7Ozs7Ozs7OztBQ2hCQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBNb2RhbCwgU2VnbWVudCwgTGlzdCwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlTm90aWZpY2F0aW9uTW9kYWwoe1xyXG4gIHNvY2tldCxcclxuICBzaG93TmV3TWVzc2FnZU1vZGFsLFxyXG4gIG5ld01lc3NhZ2VNb2RhbCxcclxuICBuZXdNZXNzYWdlUmVjZWl2ZWQsXHJcbiAgdXNlclxyXG59KSB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvbk1vZGFsQ2xvc2UgPSAoKSA9PiBzaG93TmV3TWVzc2FnZU1vZGFsKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZm9ybVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xyXG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwic2VuZE1zZ0Zyb21Ob3RpZmljYXRpb25cIiwge1xyXG4gICAgICAgIHVzZXJJZDogdXNlci5faWQsXHJcbiAgICAgICAgbXNnU2VuZFRvVXNlcklkOiBuZXdNZXNzYWdlUmVjZWl2ZWQuc2VuZGVyLFxyXG4gICAgICAgIG1zZzogdGV4dFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibXNnU2VudEZyb21Ob3RpZmljYXRpb25cIiwgKCkgPT4ge1xyXG4gICAgICAgIHNob3dOZXdNZXNzYWdlTW9kYWwoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICBvcGVuPXtuZXdNZXNzYWdlTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgIGNsb3NlSWNvblxyXG4gICAgICAgIGNsb3NlT25EaW1tZXJDbGlja1xyXG4gICAgICA+XHJcbiAgICAgICAgPE1vZGFsLkhlYWRlciBjb250ZW50PXtgTmV3IE1lc3NhZ2UgZnJvbSAke25ld01lc3NhZ2VSZWNlaXZlZC5zZW5kZXJOYW1lfWB9IC8+XHJcblxyXG4gICAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWJibGVXcmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbmxpbmVJY29uXCIgc3JjPXtuZXdNZXNzYWdlUmVjZWl2ZWQuc2VuZGVyUHJvZmlsZVBpY30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm90aGVyQnViYmxlIG90aGVyXCI+e25ld01lc3NhZ2VSZWNlaXZlZC5tc2d9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdGhlclwiPntjYWxjdWxhdGVUaW1lKG5ld01lc3NhZ2VSZWNlaXZlZC5kYXRlKX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInN0aWNreVwiLCBib3R0b206IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxTZWdtZW50IHNlY29uZGFyeSBjb2xvcj1cInRlYWxcIiBhdHRhY2hlZD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtIHJlcGx5IG9uU3VibWl0PXtmb3JtU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VuZCBOZXcgTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwidGVsZWdyYW0gcGxhbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGV4dCA9PT0gXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbWVzc2FnZXM/bWVzc2FnZT0ke25ld01lc3NhZ2VSZWNlaXZlZC5zZW5kZXJ9YH0+XHJcbiAgICAgICAgICAgICAgPGE+VmlldyBBbGwgTWVzc2FnZXM8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgPEluc3RydWN0aW9ucyB1c2VybmFtZT17dXNlci51c2VybmFtZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IEluc3RydWN0aW9ucyA9ICh7IHVzZXJuYW1lIH0pID0+IChcclxuICA8TGlzdD5cclxuICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgIDxJY29uIG5hbWU9XCJoZWxwXCIgLz5cclxuICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICA8TGlzdC5IZWFkZXI+XHJcbiAgICAgICAgICBJZiB5b3UgZG8gbm90IGxpa2UgdGhpcyBwb3B1cCB0byBhcHBlYXIgd2hlbiB5b3UgcmVjZWl2ZSBhIG5ldyBtZXNzYWdlOlxyXG4gICAgICAgIDwvTGlzdC5IZWFkZXI+XHJcbiAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgPC9MaXN0Lkl0ZW0+XHJcblxyXG4gICAgPExpc3QuSXRlbT5cclxuICAgICAgPEljb24gbmFtZT1cImhhbmQgcG9pbnQgcmlnaHRcIiAvPlxyXG4gICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgIFlvdSBjYW4gZGlzYWJsZSBpdCBieSBnb2luZyB0b1xyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHt1c2VybmFtZX1gfT5cclxuICAgICAgICAgIDxhPiBBY2NvdW50IDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgUGFnZSBhbmQgY2xpY2tpbmcgb24gU2V0dGluZ3MgVGFiLlxyXG4gICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgIDwvTGlzdC5JdGVtPlxyXG5cclxuICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgIDxJY29uIG5hbWU9XCJoYW5kIHBvaW50IHJpZ2h0XCIgLz5cclxuICAgICAgSW5zaWRlIHRoZSBtZW51LHRoZXJlIGlzIGFuIHNldHRpbmcgbmFtZWQ6IFNob3cgTmV3IE1lc3NhZ2UgUG9wdXA/XHJcbiAgICA8L0xpc3QuSXRlbT5cclxuXHJcbiAgICA8TGlzdC5JdGVtPlxyXG4gICAgICA8SWNvbiBuYW1lPVwiaGFuZCBwb2ludCByaWdodFwiIC8+XHJcbiAgICAgIEp1c3QgdG9nZ2xlIHRoZSBzZXR0aW5nIHRvIGRpc2FibGUvZW5hYmxlIHRoZSBNZXNzYWdlIFBvcHVwIHRvIGFwcGVhci5cclxuICAgIDwvTGlzdC5JdGVtPlxyXG4gIDwvTGlzdD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VOb3RpZmljYXRpb25Nb2RhbDtcclxuIiwiaW1wb3J0IHsgU2VnbWVudCwgVHJhbnNpdGlvbmFibGVQb3J0YWwsIEljb24sIEZlZWQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IG5ld01zZ1NvdW5kIGZyb20gXCIuLi8uLi91dGlscy9uZXdNc2dTb3VuZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuXHJcbmZ1bmN0aW9uIE5vdGlmaWNhdGlvblBvcnRhbCh7XHJcbiAgbmV3Tm90aWZpY2F0aW9uLFxyXG4gIG5vdGlmaWNhdGlvblBvcHVwLFxyXG4gIHNob3dOb3RpZmljYXRpb25Qb3B1cFxyXG59KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHsgbmFtZSwgcHJvZmlsZVBpY1VybCwgdXNlcm5hbWUsIHBvc3RJZCB9ID0gbmV3Tm90aWZpY2F0aW9uO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRyYW5zaXRpb25hYmxlUG9ydGFsXHJcbiAgICAgIHRyYW5zaXRpb249e3sgYW5pbWF0aW9uOiBcImZhZGUgbGVmdFwiLCBkdXJhdGlvbjogXCI1MDBcIiB9fVxyXG4gICAgICBvbkNsb3NlPXsoKSA9PiBub3RpZmljYXRpb25Qb3B1cCAmJiBzaG93Tm90aWZpY2F0aW9uUG9wdXAoZmFsc2UpfVxyXG4gICAgICBvbk9wZW49e25ld01zZ1NvdW5kfVxyXG4gICAgICBvcGVuPXtub3RpZmljYXRpb25Qb3B1cH1cclxuICAgID5cclxuICAgICAgPFNlZ21lbnQgc3R5bGU9e3sgcmlnaHQ6IFwiNSVcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgdG9wOiBcIjEwJVwiLCB6SW5kZXg6IDEwMDAgfX0+XHJcbiAgICAgICAgPEljb25cclxuICAgICAgICAgIG5hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd05vdGlmaWNhdGlvblBvcHVwKGZhbHNlKX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8RmVlZD5cclxuICAgICAgICAgIDxGZWVkLkV2ZW50PlxyXG4gICAgICAgICAgICA8RmVlZC5MYWJlbD5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZmlsZVBpY1VybH0gLz5cclxuICAgICAgICAgICAgPC9GZWVkLkxhYmVsPlxyXG4gICAgICAgICAgICA8RmVlZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDxGZWVkLlN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICA8RmVlZC5Vc2VyIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvJHt1c2VybmFtZX1gKX0+e25hbWV9IDwvRmVlZC5Vc2VyPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIGxpa2VkIHlvdXIgPGEgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wb3N0LyR7cG9zdElkfWApfT4gcG9zdDwvYT5cclxuICAgICAgICAgICAgICAgIDxGZWVkLkRhdGU+e2NhbGN1bGF0ZVRpbWUoRGF0ZS5ub3coKSl9PC9GZWVkLkRhdGU+XHJcbiAgICAgICAgICAgICAgPC9GZWVkLlN1bW1hcnk+XHJcbiAgICAgICAgICAgIDwvRmVlZC5Db250ZW50PlxyXG4gICAgICAgICAgPC9GZWVkLkV2ZW50PlxyXG4gICAgICAgIDwvRmVlZD5cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgPC9UcmFuc2l0aW9uYWJsZVBvcnRhbD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25Qb3J0YWw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW1hZ2UsIERpdmlkZXIsIE1lc3NhZ2UsIEljb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHVwbG9hZFBpYyBmcm9tIFwiLi4vLi4vdXRpbHMvdXBsb2FkUGljVG9DbG91ZGluYXJ5XCI7XHJcbmltcG9ydCB7IHN1Ym1pdE5ld1Bvc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIENyZWF0ZVBvc3QoeyB1c2VyLCBzZXRQb3N0cyB9KSB7XHJcbiAgY29uc3QgW25ld1Bvc3QsIHNldE5ld1Bvc3RdID0gdXNlU3RhdGUoeyB0ZXh0OiBcIlwiLCBsb2NhdGlvbjogXCJcIiB9KTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaGlnaGxpZ2h0ZWQsIHNldEhpZ2hsaWdodGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbWVkaWFQcmV2aWV3LCBzZXRNZWRpYVByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgZmlsZXMgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIGlmIChuYW1lID09PSBcIm1lZGlhXCIpIHtcclxuICAgICAgc2V0TWVkaWEoZmlsZXNbMF0pO1xyXG4gICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5ld1Bvc3QocHJldiA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IHZhbHVlIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRTdHlsZXMgPSAoKSA9PiAoe1xyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgaGVpZ2h0OiBcIjE1MHB4XCIsXHJcbiAgICB3aWR0aDogXCIxNTBweFwiLFxyXG4gICAgYm9yZGVyOiBcImRvdHRlZFwiLFxyXG4gICAgcGFkZGluZ1RvcDogbWVkaWEgPT09IG51bGwgJiYgXCI2MHB4XCIsXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgYm9yZGVyQ29sb3I6IGhpZ2hsaWdodGVkID8gXCJncmVlblwiIDogXCJibGFja1wiXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGxldCBwaWNVcmw7XHJcblxyXG4gICAgaWYgKG1lZGlhICE9PSBudWxsKSB7XHJcbiAgICAgIHBpY1VybCA9IGF3YWl0IHVwbG9hZFBpYyhtZWRpYSk7XHJcbiAgICAgIGlmICghcGljVXJsKSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIHNldEVycm9yKFwiRXJyb3IgVXBsb2FkaW5nIEltYWdlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgc3VibWl0TmV3UG9zdChcclxuICAgICAgbmV3UG9zdC50ZXh0LFxyXG4gICAgICBuZXdQb3N0LmxvY2F0aW9uLFxyXG4gICAgICBwaWNVcmwsXHJcbiAgICAgIHNldFBvc3RzLFxyXG4gICAgICBzZXROZXdQb3N0LFxyXG4gICAgICBzZXRFcnJvclxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRNZWRpYShudWxsKTtcclxuICAgIHNldE1lZGlhUHJldmlldyhudWxsKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybSBlcnJvcj17ZXJyb3IgIT09IG51bGx9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRFcnJvcihudWxsKX1cclxuICAgICAgICAgIGNvbnRlbnQ9e2Vycm9yfVxyXG4gICAgICAgICAgaGVhZGVyPVwiT29wcyFcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17dXNlci5wcm9maWxlUGljVXJsfSBjaXJjdWxhciBhdmF0YXIgaW5saW5lIC8+XHJcbiAgICAgICAgICA8Rm9ybS5UZXh0QXJlYVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXRzIEhhcHBlbmluZ1wiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e25ld1Bvc3QudGV4dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgd2lkdGg9ezE0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e25ld1Bvc3QubG9jYXRpb259XHJcbiAgICAgICAgICAgIG5hbWU9XCJsb2NhdGlvblwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiQWRkIExvY2F0aW9uXCJcclxuICAgICAgICAgICAgaWNvbj1cIm1hcCBtYXJrZXIgYWx0ZXJuYXRlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXYW50IHRvIGFkZCBMb2NhdGlvbj9cIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICBzdHlsZT17YWRkU3R5bGVzKCl9XHJcbiAgICAgICAgICBvbkRyYWc9e2UgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uRHJhZ0xlYXZlPXtlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZChmYWxzZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Ecm9wPXtlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3BwZWRGaWxlID0gQXJyYXkuZnJvbShlLmRhdGFUcmFuc2Zlci5maWxlcyk7XHJcblxyXG4gICAgICAgICAgICBzZXRNZWRpYShkcm9wcGVkRmlsZVswXSk7XHJcbiAgICAgICAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGRyb3BwZWRGaWxlWzBdKSk7XHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIHttZWRpYSA9PT0gbnVsbCA/IChcclxuICAgICAgICAgICAgPEljb24gbmFtZT1cInBsdXNcIiBzaXplPVwiYmlnXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTUwcHhcIiwgd2lkdGg6IFwiMTUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXttZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJQb3N0SW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgY2VudGVyZWRcclxuICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY2lyY3VsYXJcclxuICAgICAgICAgIGRpc2FibGVkPXtuZXdQb3N0LnRleHQgPT09IFwiXCIgfHwgbG9hZGluZ31cclxuICAgICAgICAgIGNvbnRlbnQ9ezxzdHJvbmc+UG9zdDwvc3Ryb25nPn1cclxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMURBMUYyXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgIGljb249XCJzZW5kXCJcclxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUG9zdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgQ3JlYXRlUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0NyZWF0ZVBvc3RcIjtcclxuaW1wb3J0IENhcmRQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3QvQ2FyZFBvc3RcIjtcclxuaW1wb3J0IHsgU2VnbWVudCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgeyBOb1Bvc3RzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L05vRGF0YVwiO1xyXG5pbXBvcnQgeyBQb3N0RGVsZXRlVG9hc3RyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1RvYXN0clwiO1xyXG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSBcInJlYWN0LWluZmluaXRlLXNjcm9sbC1jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGxhY2VIb2xkZXJQb3N0cywgRW5kTWVzc2FnZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9QbGFjZUhvbGRlckdyb3VwXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgZ2V0VXNlckluZm8gZnJvbSBcIi4uL3V0aWxzL2dldFVzZXJJbmZvXCI7XHJcbmltcG9ydCBNZXNzYWdlTm90aWZpY2F0aW9uTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9NZXNzYWdlTm90aWZpY2F0aW9uTW9kYWxcIjtcclxuaW1wb3J0IG5ld01zZ1NvdW5kIGZyb20gXCIuLi91dGlscy9uZXdNc2dTb3VuZFwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uUG9ydGFsIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvTm90aWZpY2F0aW9uUG9ydGFsXCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleCh7IHVzZXIsIHBvc3RzRGF0YSwgZXJyb3JMb2FkaW5nIH0pIHtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKHBvc3RzRGF0YSB8fCBbXSk7XHJcbiAgY29uc3QgW3Nob3dUb2FzdHIsIHNldFNob3dUb2FzdHJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtoYXNNb3JlLCBzZXRIYXNNb3JlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgyKTtcclxuXHJcbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IFtuZXdNZXNzYWdlUmVjZWl2ZWQsIHNldE5ld01lc3NhZ2VSZWNlaXZlZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbmV3TWVzc2FnZU1vZGFsLCBzaG93TmV3TWVzc2FnZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW25ld05vdGlmaWNhdGlvbiwgc2V0TmV3Tm90aWZpY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtub3RpZmljYXRpb25Qb3B1cCwgc2hvd05vdGlmaWNhdGlvblBvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgc29ja2V0LmN1cnJlbnQgPSBpbyhiYXNlVXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcImpvaW5cIiwgeyB1c2VySWQ6IHVzZXIuX2lkIH0pO1xyXG5cclxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJuZXdNc2dSZWNlaXZlZFwiLCBhc3luYyAoeyBuZXdNc2cgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgcHJvZmlsZVBpY1VybCB9ID0gYXdhaXQgZ2V0VXNlckluZm8obmV3TXNnLnNlbmRlcik7XHJcblxyXG4gICAgICAgIGlmICh1c2VyLm5ld01lc3NhZ2VQb3B1cCkge1xyXG4gICAgICAgICAgc2V0TmV3TWVzc2FnZVJlY2VpdmVkKHtcclxuICAgICAgICAgICAgLi4ubmV3TXNnLFxyXG4gICAgICAgICAgICBzZW5kZXJOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBzZW5kZXJQcm9maWxlUGljOiBwcm9maWxlUGljVXJsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHNob3dOZXdNZXNzYWdlTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld01zZ1NvdW5kKG5hbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC50aXRsZSA9IGBXZWxjb21lLCAke3VzZXIubmFtZS5zcGxpdChcIiBcIilbMF19YDtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiZGlzY29ubmVjdFwiKTtcclxuICAgICAgICBzb2NrZXQuY3VycmVudC5vZmYoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzaG93VG9hc3RyICYmIHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd1RvYXN0cihmYWxzZSksIDMwMDApO1xyXG4gIH0sIFtzaG93VG9hc3RyXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YU9uU2Nyb2xsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wb3N0c2AsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9LFxyXG4gICAgICAgIHBhcmFtczogeyBwYWdlTnVtYmVyIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID09PSAwKSBzZXRIYXNNb3JlKGZhbHNlKTtcclxuXHJcbiAgICAgIHNldFBvc3RzKHByZXYgPT4gWy4uLnByZXYsIC4uLnJlcy5kYXRhXSk7XHJcbiAgICAgIHNldFBhZ2VOdW1iZXIocHJldiA9PiBwcmV2ICsgMSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydChcIkVycm9yIGZldGNoaW5nIFBvc3RzXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChwb3N0cy5sZW5ndGggPT09IDAgfHwgZXJyb3JMb2FkaW5nKSByZXR1cm4gPE5vUG9zdHMgLz47XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXHJcbiAgICAgICAgXCJuZXdOb3RpZmljYXRpb25SZWNlaXZlZFwiLFxyXG4gICAgICAgICh7IG5hbWUsIHByb2ZpbGVQaWNVcmwsIHVzZXJuYW1lLCBwb3N0SWQgfSkgPT4ge1xyXG4gICAgICAgICAgc2V0TmV3Tm90aWZpY2F0aW9uKHsgbmFtZSwgcHJvZmlsZVBpY1VybCwgdXNlcm5hbWUsIHBvc3RJZCB9KTtcclxuXHJcbiAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uUG9wdXAodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtub3RpZmljYXRpb25Qb3B1cCAmJiBuZXdOb3RpZmljYXRpb24gIT09IG51bGwgJiYgKFxyXG4gICAgICAgIDxOb3RpZmljYXRpb25Qb3J0YWxcclxuICAgICAgICAgIG5ld05vdGlmaWNhdGlvbj17bmV3Tm90aWZpY2F0aW9ufVxyXG4gICAgICAgICAgbm90aWZpY2F0aW9uUG9wdXA9e25vdGlmaWNhdGlvblBvcHVwfVxyXG4gICAgICAgICAgc2hvd05vdGlmaWNhdGlvblBvcHVwPXtzaG93Tm90aWZpY2F0aW9uUG9wdXB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtzaG93VG9hc3RyICYmIDxQb3N0RGVsZXRlVG9hc3RyIC8+fVxyXG5cclxuICAgICAge25ld01lc3NhZ2VNb2RhbCAmJiBuZXdNZXNzYWdlUmVjZWl2ZWQgIT09IG51bGwgJiYgKFxyXG4gICAgICAgIDxNZXNzYWdlTm90aWZpY2F0aW9uTW9kYWxcclxuICAgICAgICAgIHNvY2tldD17c29ja2V0fVxyXG4gICAgICAgICAgc2hvd05ld01lc3NhZ2VNb2RhbD17c2hvd05ld01lc3NhZ2VNb2RhbH1cclxuICAgICAgICAgIG5ld01lc3NhZ2VNb2RhbD17bmV3TWVzc2FnZU1vZGFsfVxyXG4gICAgICAgICAgbmV3TWVzc2FnZVJlY2VpdmVkPXtuZXdNZXNzYWdlUmVjZWl2ZWR9XHJcbiAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8U2VnbWVudD5cclxuICAgICAgICA8Q3JlYXRlUG9zdCB1c2VyPXt1c2VyfSBzZXRQb3N0cz17c2V0UG9zdHN9IC8+XHJcblxyXG4gICAgICAgIDxJbmZpbml0ZVNjcm9sbFxyXG4gICAgICAgICAgaGFzTW9yZT17aGFzTW9yZX1cclxuICAgICAgICAgIG5leHQ9e2ZldGNoRGF0YU9uU2Nyb2xsfVxyXG4gICAgICAgICAgbG9hZGVyPXs8UGxhY2VIb2xkZXJQb3N0cyAvPn1cclxuICAgICAgICAgIGVuZE1lc3NhZ2U9ezxFbmRNZXNzYWdlIC8+fVxyXG4gICAgICAgICAgZGF0YUxlbmd0aD17cG9zdHMubGVuZ3RofVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgICAgIDxDYXJkUG9zdFxyXG4gICAgICAgICAgICAgIHNvY2tldD17c29ja2V0fVxyXG4gICAgICAgICAgICAgIGtleT17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgcG9zdD17cG9zdH1cclxuICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgIHNldFBvc3RzPXtzZXRQb3N0c31cclxuICAgICAgICAgICAgICBzZXRTaG93VG9hc3RyPXtzZXRTaG93VG9hc3RyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9JbmZpbml0ZVNjcm9sbD5cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wb3N0c2AsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxyXG4gICAgICBwYXJhbXM6IHsgcGFnZU51bWJlcjogMSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBwb3N0c0RhdGE6IHJlcy5kYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IGVycm9yTG9hZGluZzogdHJ1ZSB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5jb25zdCBnZXRVc2VySW5mbyA9IGFzeW5jIHVzZXJUb0ZpbmRJZCA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvY2hhdHMvdXNlci8ke3VzZXJUb0ZpbmRJZH1gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IG5hbWU6IHJlcy5kYXRhLm5hbWUsIHByb2ZpbGVQaWNVcmw6IHJlcy5kYXRhLnByb2ZpbGVQaWNVcmwgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0VXNlckluZm87XHJcbiIsImNvbnN0IG5ld01zZ1NvdW5kID0gc2VuZGVyTmFtZSA9PiB7XHJcbiAgY29uc3Qgc291bmQgPSBuZXcgQXVkaW8oXCIvbGlnaHQubXAzXCIpO1xyXG5cclxuICBzb3VuZCAmJiBzb3VuZC5wbGF5KCk7XHJcblxyXG4gIGlmIChzZW5kZXJOYW1lKSB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9IGBOZXcgbWVzc2FnZSBmcm9tICR7c2VuZGVyTmFtZX1gO1xyXG5cclxuICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJNZXNzYWdlc1wiO1xyXG4gICAgICB9LCA1MDAwKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdNc2dTb3VuZDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9