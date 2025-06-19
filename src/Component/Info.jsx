const Info = () => {
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
        {stuff.map(user => (
            <ul key={stuff}>
                <li>{user.username}</li>
                <li>{user.Password}</li>
                <li>{user.email}</li>
            </ul>

        ))}
    </main>
  );
};

export default Info