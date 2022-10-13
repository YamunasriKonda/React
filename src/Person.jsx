function Person() {
    const me = {
        name: "yamuna",
        surname: "Jakkampudi",
        age: 27,
        line1: "Analyst",
        line2: "learner",
        city: "Bournmouth",
        Zip: "BH1 3PJ"
    }
    return (
        <div>

            <p> Name: {me.name}</p>
            <p> surname : {me.surname }</p>
            <p> age: {me.age}</p>
            <p> line1: {me.line1}</p>
            <p> line2: {me.line2}</p>
            <p> city: {me.city}</p>
            <p> zip: {me.zip}</p>
            
            

        </div>
    )
}

export default Person;
