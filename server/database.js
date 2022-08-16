const RocksDB = require("rocksdb");
const LevelUp = require("levelup");
const db = new LevelUp(new RocksDB("./dbfolder"));

const getCVsForUser = async (userId) => {
  try {
    const key = `user:${userId}:cvIds`;
    const cvs = await db.get(key);
    return JSON.parse(cvs);
  } catch (error) {
    return [];
  }
};

const addCVToUser = async (userId, cvId) => {
  const key = `user:${userId}:cvIds`;
  let data;
  try {
    data = await db.get(key);
  } catch (error) {
    data = "[]";
    console.log(error);
  }
  const dataToArray = JSON.parse(data);
  dataToArray.push(cvId);
  await db.put(key, JSON.stringify(dataToArray));
};

const storeCv = async (cvId, cv) => {
  try {
    await db.put(`cv:${cvId}`, JSON.stringify(cv));
  } catch (error) {
    console.log(error);
  }
};

const getCv = async (cvId) => {
  try {
    const data = await db.get(`cv:${cvId}`);
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

const removeCv = (cvId) => {};

module.exports = { storeCv, addCVToUser, getCv, getCVsForUser };
