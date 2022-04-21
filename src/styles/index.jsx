import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Inter', sans-serif;
}

:root{
 --color-primary: #FF577F;
 --color-primary-50: #FF427F;
 --color-primary-disable: #59323F;
 --grey-4: #121214;
 --grey-3: #212529;
 --grey-2: #343B41;
 --grey-1: #868E96;
 --grey-0: #F8F9FA;
 --sucess: #3FE864;
 --negative:#E83F5B;
}

body{
    background-color: var(--grey-4);
    color: var(--grey-0);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#root{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}
`