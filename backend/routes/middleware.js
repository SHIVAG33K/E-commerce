import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import z from "zod"


const router = express.Router();
const prisma = new PrismaClient();


export const authMiddleware = async (req, res, next) => {

  const token = req.cookies['token'];

    if (!token)
      return res.status(401).json({
        success: false,
        message: "Unauthorised user!",
      });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "Unauthorised user!",
      });
    }
  };
