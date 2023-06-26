const express = require('express');
const router = express.Router();

const { getUsersWithRole, getAllRoles } = require('./RoleFunctions');

// Show all roles
router.get('/', async (request, response) => {
  let responseData = {};

  responseData = await getAllRoles();

  response.json({
    data: responseData
  });
});

// Show all users with a matching role
router.get("/:roleName", async (request, response) => {
  let responseData = {};

  responseData = await getUsersWithRole(request.params.roleName);

  response.json({
    data: responseData
  });
});

module.exports = router;