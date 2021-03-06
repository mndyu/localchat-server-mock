'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.groupsGET = function groupsGET (req, res, next) {
  Default.groupsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsGroup_idDELETE = function groupsGroup_idDELETE (req, res, next) {
  var group_id = req.swagger.params['group_id'].value;
  Default.groupsGroup_idDELETE(group_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsGroup_idGET = function groupsGroup_idGET (req, res, next) {
  var group_id = req.swagger.params['group_id'].value;
  Default.groupsGroup_idGET(group_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsGroup_idMembersGET = function groupsGroup_idMembersGET (req, res, next) {
  var group_id = req.swagger.params['group_id'].value;
  Default.groupsGroup_idMembersGET(group_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsGroup_idMembersUser_idDELETE = function groupsGroup_idMembersUser_idDELETE (req, res, next) {
  var group_id = req.swagger.params['group_id'].value;
  var user_id = req.swagger.params['user_id'].value;
  Default.groupsGroup_idMembersUser_idDELETE(group_id,user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsGroup_idMessagesPOST = function groupsGroup_idMessagesPOST (req, res, next) {
  var message = req.swagger.params['Message'].value;
  Default.groupsGroup_idMessagesPOST(message)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsGroup_idPUT = function groupsGroup_idPUT (req, res, next) {
  var group_id = req.swagger.params['group_id'].value;
  var group = req.swagger.params['group'].value;
  Default.groupsGroup_idPUT(group_id,group)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsPOST = function groupsPOST (req, res, next) {
  var group = req.swagger.params['group'].value;
  Default.groupsPOST(group)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesGET = function messagesGET (req, res, next) {
  Default.messagesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesMessage_idDELETE = function messagesMessage_idDELETE (req, res, next) {
  var message_id = req.swagger.params['message_id'].value;
  Default.messagesMessage_idDELETE(message_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesMessage_idGET = function messagesMessage_idGET (req, res, next) {
  var message_id = req.swagger.params['message_id'].value;
  Default.messagesMessage_idGET(message_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesMessage_idPUT = function messagesMessage_idPUT (req, res, next) {
  var message_id = req.swagger.params['message_id'].value;
  var message = req.swagger.params['message'].value;
  Default.messagesMessage_idPUT(message_id,message)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesPOST = function messagesPOST (req, res, next) {
  var message = req.swagger.params['Message'].value;
  Default.messagesPOST(message)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGET = function usersGET (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Default.usersGET(limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPOST = function usersPOST (req, res, next) {
  var user = req.swagger.params['User'].value;
  Default.usersPOST(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUser_idDELETE = function usersUser_idDELETE (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  Default.usersUser_idDELETE(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUser_idGET = function usersUser_idGET (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  Default.usersUser_idGET(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUser_idGroupsGET = function usersUser_idGroupsGET (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  Default.usersUser_idGroupsGET(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUser_idGroupsPOST = function usersUser_idGroupsPOST (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  var group = req.swagger.params['group'].value;
  Default.usersUser_idGroupsPOST(user_id,group)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUser_idMessagesGET = function usersUser_idMessagesGET (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  Default.usersUser_idMessagesGET(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUser_idPUT = function usersUser_idPUT (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  var user = req.swagger.params['User'].value;
  Default.usersUser_idPUT(user_id,user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
