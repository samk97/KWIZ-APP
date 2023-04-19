const Question = require('../models/question');
const Quiz = require('../models/quiz');
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

 try{
 Quiz.countDocuments({title},function(err,count){
   if(count == 0){
     const quiz = new Quiz({title,startTime,runTime,questions});
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
     res.status(200).json(count);
  })
 }
 catch(err){
  console.log(err);
   res.status(400).json("ALready exists");
 }
 
 }