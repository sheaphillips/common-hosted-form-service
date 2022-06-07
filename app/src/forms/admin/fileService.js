const storageService = require('../file/storage/storageService');

const fileService = {
  create: async (imageData) => {
    return await storageService.uploadImage(imageData);
  }
};

module.exports = fileService;
