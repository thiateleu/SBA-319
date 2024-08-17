import React from 'react';
const DefaultLayout =({children, title}) => {
return (
    <html>
        <head>
            <title>{title || "My Mongodb App"}</title>
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
            <header>
                <h1>{title}</h1>
            </header>
            <main>
                {children}
            </main>
        </body>
    </html>
);
};


export default DefaultLayout;