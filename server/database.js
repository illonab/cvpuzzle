const RocksDB = require("rocksdb");
const LevelUp = require("levelup");
const { json } = require("express");
const db = new LevelUp(new RocksDB("./dbfolder"));

const getCVsForUser = async (userId) => {
  const cvs = await db.get(`user:${userId}:cvIds`);
  return JSON.parse(cvs);
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
  await db.put(`cv:${cvId}`, JSON.stringify(cv));
  console.log("CV stored");
};
const getCv = async (cvId) => {
  const data = await db.get(`cv:${cvId}`);
  return JSON.parse(data);
};
const removeCv = (cvId) => {};

module.exports = { storeCv, addCVToUser, getCv, getCVsForUser };
