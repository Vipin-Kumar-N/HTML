function check()
{
    var question1=document.Quiz.question1.value;
    var question2=document.Quiz.question2.value;
    var question3=document.Quiz.question3.value;
    var correct=0;
    if(question1=="Delhi")
    {
        correct++;
    }
    if(question2=="Thiruvanathapuram")
    {
        correct++;
    }
    if(question3=="Gandhinagar")
    {
        correct++;
    }
    if(correct==0)
    {
        alert("Study Well Your Score is "+correct);
    }
    if(correct>0&&correct<3)
    {
        alert("Your Score is "+correct);
    }
    if(correct==3)
    {
        alert("Great Job Your Score is "+correct);
    }
}