import { pool } from '../../../mysql';
import { v4 as uuidv4 } from 'uuid';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { request, Request, response, Response } from 'express';

class UserRepository {
    create(request: Request, response: Response) {
        const { name, email, password } = request.body;

        pool.getConnection((err: any, connection: any) => {
            if (err) {
                return response.status(500).json({ error: "Erro ao conectar ao banco de dados." });
            }

            hash(password, 10, (err, hash) => {
                if (err) {
                    connection.release();
                    return response.status(500).json({ error: "Erro ao hash da senha." });
                }

                connection.query(
                    'INSERT INTO users (users_id, name, email, password) VALUES (?,?,?,?)',
                    [uuidv4(), name, email, hash],
                    (error: any, result: any, fields: any) => {
                        connection.release(); // Libere a conexão aqui
                        if (error) {
                            return response.status(400).json({ error: "Erro ao criar usuário." });
                        }
                        response.status(200).json({ message: "Usuário criado com sucesso" });
                    }
                );
            });
        });
    }

    login(request: Request, response: Response) {
        const { email, password } = request.body;

        pool.getConnection((err: any, connection: any) => {
            if (err) {
                return response.status(500).json({ error: "Erro ao conectar ao banco de dados." });
            }

            connection.query(
                'SELECT * FROM users WHERE email = ?',
                [email],
                (error: any, results: any, fields: any) => {
                    if (error) {
                        connection.release();
                        return response.status(400).json({ error: "Erro na sua autenticação!" });
                    }

                    if (results.length === 0) {
                        connection.release();
                        return response.status(400).json({ error: "Usuário não encontrado!" });
                    }

                    compare(password, results[0].password, (err, result) => {
                        connection.release(); // Libere a conexão aqui
                        if (err) {
                            return response.status(400).json({ error: "Erro na sua autenticação!" });
                        }

                        if (result) {
                            const token = sign({
                                id: results[0].users_id,
                                email: results[0].email
                            }, process.env.JWT_SECRET || 'default_secret', { expiresIn: "1d" }); // 'default_secret' é um valor padrão caso a variável esteja indefinida                            

                            return response.status(200).json({ token, message: "Autenticado com sucesso!" });
                        } else {
                            return response.status(400).json({ error: "Senha incorreta!" });
                        }
                    });
                }
            );
        });
    }
}

export { UserRepository };
