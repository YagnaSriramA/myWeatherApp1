// var obj;
// fetch('http://api.weatherapi.com/v1/current.json?key=58bc9914b1014a4eab4110235232501&q=London')
//   .then((response) => response.json())
//   .then((data) => {obj=data;})
//   .then(() => {console.log(obj);});
  



function doSomething()
{
    var iput=document.getElementById("txtbox").value;
    var url='http://api.weatherapi.com/v1/current.json?key=58bc9914b1014a4eab4110235232501&q='+iput;
    async function fetchExam() {
        try 
        {
            const response = await fetch(url);
            const exam = await response.json();
            document.getElementById("temp").innerHTML=exam.current.temp_c+"° C";
            document.getElementById("temp").style.fontSize = "35px";
            document.getElementById("ctname").innerHTML=exam.location.name;
            document.getElementById("ctname").style.fontSize = "24px";
            document.getElementById("txtbox").value="";
            console.log(exam)
        } 
        catch (error) 
        {
            console.error(error);
        }
    }
    
    
    fetchExam();
}






















async function fetchExam() {
    try 
    {
        const response = await fetch(url);
        const exam = await response.json();
        // document.getElementById("baba").innerHTML=exam.current.temp_c;
        console.log(exam)
        console.log(exam.error['message']);  
        return exam;
    } 
    catch (error) 
    {
        console.error(error);
    }
}


fetchExam();