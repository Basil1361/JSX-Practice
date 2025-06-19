const Info2 = () => {
const stuff = [

{
    username : "Admin" ,
    Password : "1234",
    email : "1@gmail.com",
},


{
    username : "Admin2" ,
    Password : "2345",
    email : "2@gmail.com",
},

{
    username : "Admin3" ,
    Password : "3456",
    email : "3@gmail.com",
},
];



  return (
    <main>
        {stuff.map(({username,Password,email}) => (
            <ul key={stuff}>
                <li>{username}</li>
                <li>{Password}</li>
                <li>{email}</li>
            </ul>

        ))}
    </main>
  );
};

export default Info2