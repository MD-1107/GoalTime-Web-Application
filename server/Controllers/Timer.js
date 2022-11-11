export class Timer{


    displayTimer=function(req,res){

        console.log("sending pomo dets from backend ");
        
        console.log(pomodoroSessionDetails);
        
        let redir = {...pomodoroSessionDetails};

        return res.json(redir);
        
    
    
    }
}



