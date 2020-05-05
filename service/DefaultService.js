'use strict';


/**
 * グループ内メンバー一覧取得
 *
 * group_id Integer グループID
 * returns List
 **/
exports.groupGroup_idMembersGET = function(group_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "id" : 0
}, {
  "name" : "name",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * グループ内のメンバー削除
 *
 * group_id Integer グループID
 * user_id Integer ユーザID
 * returns User
 **/
exports.groupGroup_idMembersUser_idDELETE = function(group_id,user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pc_name" : "pc_name",
  "name" : "name",
  "id" : 0,
  "ip_address" : "ip_address"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * グループ一覧取得
 *
 * returns List
 **/
exports.groupsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "pc_name" : "pc_name",
  "name" : "name",
  "id" : 0,
  "ip_address" : "ip_address"
}, {
  "pc_name" : "pc_name",
  "name" : "name",
  "id" : 0,
  "ip_address" : "ip_address"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * グループ削除
 *
 * group_id Integer グループID
 * returns Group
 **/
exports.groupsGroup_idDELETE = function(group_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * グループ取得
 *
 * group_id Integer グループID
 * returns Group
 **/
exports.groupsGroup_idGET = function(group_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * グループ更新
 *
 * group_id Integer グループID
 * returns Group
 **/
exports.groupsGroup_idPUT = function(group_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * グループ作成
 *
 * returns User
 **/
exports.groupsPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pc_name" : "pc_name",
  "name" : "name",
  "id" : 0,
  "ip_address" : "ip_address"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * メッセージ一覧取得
 *
 * returns List
 **/
exports.messagesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "author" : 6,
  "channel" : 1,
  "id" : 0,
  "text" : 5
}, {
  "author" : 6,
  "channel" : 1,
  "id" : 0,
  "text" : 5
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * メッセージの削除
 *
 * message_id Integer メッセージID
 * returns Message
 **/
exports.messagesMessage_idDELETE = function(message_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : 6,
  "channel" : 1,
  "id" : 0,
  "text" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * メッセージの取得
 *
 * message_id Integer メッセージID
 * returns Message
 **/
exports.messagesMessage_idGET = function(message_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : 6,
  "channel" : 1,
  "id" : 0,
  "text" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * メッセージの更新
 *
 * message_id Integer メッセージID
 * returns Message
 **/
exports.messagesMessage_idPUT = function(message_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : 6,
  "channel" : 1,
  "id" : 0,
  "text" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * メッセージの作成
 *
 * returns Message
 **/
exports.messagesPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : 6,
  "channel" : 1,
  "id" : 0,
  "text" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * ユーザ一覧
 *
 * limit Integer ページの要素数 (optional)
 * offset Integer ページ開始位置 (optional)
 * returns List
 **/
exports.usersGET = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "pc_name" : "pc_name",
  "name" : "name",
  "id" : 0,
  "ip_address" : "ip_address"
}, {
  "pc_name" : "pc_name",
  "name" : "name",
  "id" : 0,
  "ip_address" : "ip_address"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * １ユーザ削除
 *
 * user_id Integer ユーザID
 * returns User
 **/
exports.usersUser_idDELETE = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pc_name" : "pc_name",
  "name" : "name",
  "id" : 0,
  "ip_address" : "ip_address"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * １ユーザ取得
 *
 * user_id Integer ユーザID
 * returns User
 **/
exports.usersUser_idGET = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pc_name" : "pc_name",
  "name" : "name",
  "id" : 0,
  "ip_address" : "ip_address"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * ？？
 *
 * user_id Integer ユーザID
 * returns List
 **/
exports.usersUser_idGroupsGET = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "pc_name" : "pc_name",
  "name" : "name",
  "id" : 0,
  "ip_address" : "ip_address"
}, {
  "pc_name" : "pc_name",
  "name" : "name",
  "id" : 0,
  "ip_address" : "ip_address"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * ユーザのグループ参加
 *
 * user_id Integer ユーザID
 * returns User
 **/
exports.usersUser_idGroupsPOST = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pc_name" : "pc_name",
  "name" : "name",
  "id" : 0,
  "ip_address" : "ip_address"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * ユーザのメッセージ一覧取得
 *
 * user_id Integer ユーザID
 * returns List
 **/
exports.usersUser_idMessagesGET = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "pc_name" : "pc_name",
  "name" : "name",
  "id" : 0,
  "ip_address" : "ip_address"
}, {
  "pc_name" : "pc_name",
  "name" : "name",
  "id" : 0,
  "ip_address" : "ip_address"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * ユーザのメッセージ一送信
 *
 * user_id Integer ユーザID
 * returns User
 **/
exports.usersUser_idMessagesPOST = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pc_name" : "pc_name",
  "name" : "name",
  "id" : 0,
  "ip_address" : "ip_address"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * １ユーザ更新
 *
 * user_id Integer ユーザID
 * returns User
 **/
exports.usersUser_idPUT = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pc_name" : "pc_name",
  "name" : "name",
  "id" : 0,
  "ip_address" : "ip_address"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

