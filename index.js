const fun = async()=>{
    await axios.get("http://localhost:3000/all",).
    then(async(res)=>{
        console.log(res.data)

        let tbody = document.getElementById("tbody");

        let element = "";

        res.data.forEach((res,i)=>{
            element+= `<tr>
            <td>${i+1}</td>
            <td>${res.fname}</td>
            <td>${res.lname}</td>
            <td>${res.email}</td>
            <td>${res.dob}</td>
            <td>${res.gender}</td>
            <td>${res.city}</td>
            <td>${res.state_}</td>
            <td>${res.country}</td>
            <td>${res.mob}</td>
            <td>${res.zip}</td>
            </tr>`
        });
        tbody.innerHTML = element;
    })
   
}
fun();


const form = document.getElementById("form");

form.addEventListener("submit" , async (e)=>{
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const male = document.getElementById("male").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    const mob = document.getElementById("mob").value;
    const zip = document.getElementById("mob").value;

    const gender = male ? "male" : "female"



    if(fname === "")
    {
        document.getElementById("field1").innerText =
        "Please Enter Your First Name"
    }
    if(lname === "")
    {
        document.getElementById("field2").innerText =
        "Please Enter Your Last Name"
    }

    if(!email.includes("@"))
    {
        document.getElementById("field3").innerText =
        "Please Enter A Valid Email"
    }

    if(dob === "")
    {
        document.getElementById("field4").innerText =
        "Please Enter Your Date Of Birth"
    }
    if(gender === "")
    {
        document.getElementById("field5").innerText =
        "Please Select Your Gender"
    }

    if(city === "")
    {
        document.getElementById("field6").innerText =
        "Please Enter Your City Name"
    }
    if(state === "")
    {
        document.getElementById("field7").innerText =
        "Please Enter Your State Name"
    }
    if(country === "")
    {
        document.getElementById("field8").innerText =
        "Please Enter Your Country"
    }
    if(mob === "")
    {
        document.getElementById("field9").innerText =
        "Please Enter Your Mobile Number"
    }
    if(zip === "")
    {
        document.getElementById("field10").innerText =
        "Please Enter Your Zip Code"
    }

   const data = {
    fname : fname,
    lname : lname,
    email : email,
    dob : dob,
    gender : gender,
    city : city ,
    state : state,
    country : country,
    mob : mob,
    zip : zip,
   }

   await axios.post("http://localhost:3000" , data ).
   then((res)=> console.log(res));
fun();

})