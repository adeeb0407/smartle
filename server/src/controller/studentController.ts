import mysql from 'mysql';
import express, {Request, Response} from 'express';
import db from '../config/config';

export const getAllStudents = ((req: Request, res: Response) => {
    
        db.query('SELECT * from student', (err: any, rows: any) =>{
            if(err){
                console.log(err);
            }
            res.send(rows);
        });
    
});


