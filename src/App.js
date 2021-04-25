import React from 'react'
import { render } from 'react-dom'
//import Pet from './Pet';
import SearchParams from './searchParams'


const App = () => {
    // return React.createElement("div", { id: "main-elm" }, [
    //     React.createElement("h1", {}, "Adopt Me!!"),
    //     React.createElement("h1", {}, "Adopt Me!!"),
    //     React.createElement(Pet, {
    //         name: "Luna",
    //         animal: "Dog",
    //         breed: "havanease",
    //     }),
    //     React.createElement(Pet, {
    //         name: "Bella",
    //         animal: "Cat",
    //         breed: "Persian",
    //     }),
    //     React.createElement(Pet, {
    //         name: "birdy",
    //         animal: "Bird",
    //         breed: "Mixed",
    //     }),
    // ]);


    return (

        <div>
            <h1 id="main-div"> Adopt Me!!</h1>
            <SearchParams />

        </div>
    )



};
render(React.createElement(App), document.getElementById("root"));
