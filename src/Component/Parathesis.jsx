const Parathesis = () => {

    const myName = 'Jia Jie';
    const multiply = (a,b) => a*b;
    const specialClass = "anythingIwant";

  return (
    <section>
            <p> 2+2 = {2*2}</p>
            <h1>{myName}</h1>
            <p>My Friends List: </p>
            <p> {["gsdgdrgdsr ","zgrgzdrgdrg ","zggdrgdrg ","zrgzrgzdrg "]}</p>
            <p>2*10 = {multiply(2,10)}</p>
            <p className={specialClass}>This is special class</p>

    </section>
  );
};

export default Parathesis

