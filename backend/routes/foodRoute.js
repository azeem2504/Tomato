import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";
import path from "path"; 

const foodRouter = express.Router()

//Image storage engine
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const uploadFolder = path.join(__dirname, "../uploads");
const storage = multer.diskStorage({
    destination: uploadFolder,
    filename:(req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})
foodRouter.post("/add", upload.single("image"),addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood)

export default foodRouter
