import express from "express";
import mongoose from "mongoose";

import PostMessage from "../models/postMessage.js";

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostMessage.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const {
    name,
    email,
    phoneNumber,
    location,
    profilePicture,
    pricePerHour,
    technology,
    description,
    yearsOfExperience,
    nativeLanguage,
    linkedInUrl,
  } = req.body;

  const newPostMessage = new PostMessage({
    name,
    email,
    phoneNumber,
    location,
    profilePicture,
    pricePerHour,
    technology,
    description,
    yearsOfExperience,
    nativeLanguage,
    linkedInUrl,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    phoneNumber,
    location,
    profilePicture,
    pricePerHour,
    technology,
    description,
    yearsOfExperience,
    nativeLanguage,
    linkedInUrl,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = {
    name,
    email,
    phoneNumber,
    location,
    profilePicture,
    pricePerHour,
    technology,
    description,
    yearsOfExperience,
    nativeLanguage,
    linkedInUrl,
    _id: id,
  };

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};

export const hireDeveloper = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    phoneNumber,
    location,
    profilePicture,
    pricePerHour,
    technology,
    description,
    yearsOfExperience,
    nativeLanguage,
    linkedInUrl,
    hireStatus,
    startDate,
    endDate,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const hiredDeveloper = {
    name,
    email,
    phoneNumber,
    location,
    profilePicture,
    pricePerHour,
    technology,
    description,
    yearsOfExperience,
    nativeLanguage,
    linkedInUrl,
    hireStatus,
    startDate,
    endDate,
    _id: id,
  };

  await PostMessage.findByIdAndUpdate(id, hiredDeveloper, { new: true });

  res.json(hiredDeveloper);
};

export default router;
