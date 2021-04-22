
const Pet = (props)=>{
    return React.createElement("div",{},
    [React.createElement('h1',{},props.name),
    React.createElement('h1',{},props.animal),
    React.createElement('h1',{},props.breed)]);
};

const  App =()=> {

    return React.createElement("div", {id:"main-elm"},
    [React.createElement("h1",{},"Adopt Me!!"),
        React.createElement(Pet,{
            name:"Luna",
            animal:"Dog",
            breed:"havanease"

        }),
        React.createElement(Pet,{
            name:"Bella",
            animal:"Cat",
            breed:"Persian"
        }),
        React.createElement(Pet,{
            name:"birdy",
            animal:"Bird",
            breed:"Mixed"
        })
    ]);
};
ReactDOM.render(React.createElement(App),
document.getElementById("root"))