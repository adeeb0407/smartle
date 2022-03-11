import mysql from 'mysql';
import express, {Request, Response, urlencoded} from 'express';
import db from '../config/config';

export const getAllCourses =  ((req: Request, res: Response) => {

    let sql = `SELECT * from course`;

    db.query(sql, (err:any, result:any) =>{
        if(err){
            console.log(err);
        }

        const resultsPerPage = 3;
        const numOfResult = result.length;
        const numberOfPages = Math.ceil(numOfResult/resultsPerPage);

        let page = req.query.page ? Number(req.query.page) : 1;

        if(page > numberOfPages){
            res.redirect(`/?page=`+encodeURIComponent(numberOfPages));
        }else if(page < 1){
            res.redirect(`/?page=`+encodeURIComponent('1'));
        }

        const startingLimit = (page - 1) * resultsPerPage;
        sql = `SELECT * from course LIMIT ${startingLimit},${resultsPerPage}`;
        
        db.query(sql, (err:any, result:any) =>{
            if(err){
                console.log(err);
            }
            let iterator = (page - 5) < 1 ? 1 : page - 5;
            let endingLink = (iterator + 9) <= numberOfPages ? (iterator + 9) : page + 
            (numberOfPages - page);

            if(endingLink  < (page + 4)){
                iterator -= (page + 4) - numberOfPages;
            }

            res.send({result, page, iterator, numberOfPages});
        })
 
    })

});

export const getAllCoursesOnHome =  ((req: Request, res: Response) => {
    db.query('SELECT * from course', (err: any, rows: any) =>{
        if(err){
            console.log(err);
        }

        res.send(rows);
    });
});