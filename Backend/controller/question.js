const Question = require('../models/question');
const Quiz = require('../models/quiz');
const QuizSubmission = require('../models/quizsubmission');
var mongoose = require('mongoose');

const check = (aa) =>{
         const date = new Date().toLocaleString();
         const a = new Date(aa).toLocaleString();
         console.log(date);
         console.log(a);
         const year = date.substring(6,10);
         const month = date.substring(3,5);
         const dt = date.substring(0,2);
         const hour = date.substring(12,14);
         const minute =date.substring(15,17);


         const year2 = a.substring(6,10);
         const month2 = a.substring(3,5);
         const dt2 = a.substring(0,2);
         const hour2 = a.substring(12,14);
         const minute2 =a.substring(15,17);



         console.log(dt,year,month,hour,minute);
         console.log(dt2,year2,month2,hour2,minute2)

         if(year2 < year) return false;
         if(year > year2) return true;

         if(year == year2){
           if(month2 < month) return false;
           if(month2 > month) return true;
           if(month == month2){
             if(dt2 < dt) return false;
             if(dt2 > dt) return true;
             
             if(hour2 < hour) return false;
             if(hour2 > hour) return true;

             if(minute2 < minute) return false;
             if(minute2 > minute) return true;


           }
         }

         return true;



}



exports.insertQuestion=(req,res)=>{
    
    const {question,op_a,op_b,op_c,op_d,ans,exp} = req.headers;


    if(question == null || op_a == null || op_b == null || op_c == null || op_d == null || ans == null) {
        res.status(400).json({Error: "All field must be filled"});
    }else{
     Question.countDocuments({question}, function (err, count){ 

         console.log(question,op_a,op_b,op_c,op_d,ans,exp);
         if(count>0){
                 res.status(403).json({Error: "Question Already Exist"}); 
         }
         else{
           const questions = new Question({question,op_a,op_b,op_c,op_d,ans,exp});
           questions.save(function(err,result){
             console.log(result);  
             res.status(200).json({id : result._id});
           });
         }
     });
    }
 }

 exports.fetchQuestion=(req,res)=>{
    
    const {question,op_a,op_b,op_c,op_d,ans,exp} = req.headers;


  
     Question.find({},function (err, result){
         
        console.log(result);
        res.status(200).json(result);

        
     });
    
 }

 exports.randomQuizCreation= async (req,res)=>{

  const {number,time} = req.body;
  console.log(number);

 //const number = 1;

 try{
 const result =  await  Question.aggregate( [{ $sample: { size: Number(number) } }]).exec();
 return res.status(200).json(result);
 }catch(err){
 return res.status(400).json(err);
 }
  
}

exports.insertQuiz = async (req,res) =>{


 console.log(req.body);
 const {title,startTime,runTime,questions} = req.body;

 const x  = new Date(startTime);
 console.log(x.toLocaleString());

 try{
 Quiz.countDocuments({title},function(err,count){
   if(count == 0){
     const quiz = new Quiz({title,startTime:x,runTime,questions});
     quiz.save(function(err,ress){
       res.status(200).json("Saved");
     })
   }else{
    res.status(400).json("ALready exists");
   }
 })
}
catch(err){
 console.log(err);
  res.status(400).json("ALready exists");
}

}



exports.getAllQuiz = async (req,res) =>{

  try{
     Quiz.find({},function(err,count){
    
     try{ 
     const x = count.map((obj)=>{
       obj.flag="ff";
       return obj;
     })
     res.status(200).json(x);
    }catch(err){
      console.log(x);
    }
     
  })
 }
 catch(err){
  console.log(err);
   res.status(400).json("ALready exists");
 }
 
 }

 exports.getSubmission = async (req,res) =>{

  const {quiz,stresp,title} = req.headers;
  const st_id = stresp;
  console.log(stresp);
  console.log(st_id);
  const data = {id:st_id};

  try{
   QuizSubmission.count({id:quiz},function(err,count){
     if(count == 0){
       const quizsubmission = new QuizSubmission({title,id:quiz,answer:data});
       quizsubmission.save(function(err,res){
         console.log(res);
       });
     }else{
      try{
        QuizSubmission.find({$and:[{id:quiz},{'answer.id':st_id}]},function(err,count){
       
         if(count != 0){
           console.log("COunt ",count);
           res.status(200).json(count);
         }else{
           QuizSubmission.updateOne({id:quiz},{$push:{answer:data}},function(err,res){
             console.log("Res",res);
             
           });
           res.status(400).json("ALready exists");
         }
        
     })
    }
    catch(err){
     console.log(err);
      res.status(400).json("ALready exists");
    }
     }
   })
  }catch(err){

  }


 
 
 }