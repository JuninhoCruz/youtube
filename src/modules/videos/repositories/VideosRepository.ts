import { pool } from '../../../mysql';
import { v4 as uuidv4 } from 'uuid';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { request, Request, response, Response } from 'express';

class VideoRepository {
    create(request: Request, response: Response){
    const { title, description, user_id } = request.body;
        pool.getConnection((err: any, connection: any) => {
            connection.query(
                'INSERT INTO videos (video_id, user_id, title, description) VALUES (?,?,?,?)',
                [uuidv4(), user_id, title, description],
                (error: any, result: any, fields: any) => {
                    connection.release();
                if (error) {
                    return response.status(400).json(error)
                }
                response.status(200).json({message:"Vídeo criado com sucesso!"});
                }
            )
        })
    }
}

export { VideoRepository };