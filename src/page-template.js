// PROVIDED BY INSTRUCTOR 2022-09-09
// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class='card bg-info m-4' style="width: 27rem;">
            <div>
                <h2>${manager.getName()}</h2>
                <h3>
                    <i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}
                </h3>
            </div>
            <div>
                <ul>
                    <li>
                        ID: ${manager.getId()}
                    </li>
                    <li>
                        Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                    </li>
                    <li>
                        Office number: ${manager.getOfficeNumber()}
                    </li>
                </ul>
            </div>
        </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class='card bg-info m-4' style="width: 27rem;">
            <div>
                <h2>${engineer.getName()}</h2>
                <h3>
                    <i class="fas fa-glasses mr-2"></i>${engineer.getRole()}
                </h3>
            </div>
            <div>
                <ul>
                    <li>ID: ${engineer.getId()}</li>
                    <li>
                        Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                    </li>
                    <li>
                        GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a>
                    </li>
                </ul>
            </div>
        </div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class='card bg-info m-4' style="width: 27rem;">
    <div>
        <h2>${intern.getName()}</h2>
        <h3>
            <i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}
        </h3>
    </div>
    <div>
        <ul>
            <li>ID: ${intern.getId()}</li>
            Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
            <li>School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    </head>
    <body>
        <header class='container-fluid'>
            <div class='d-flex justify-content-center m-3 bg-danger'>
                <h1>My Team</h1>
            </div>
        </header>
        <main>
            <div class='container-fluid'>
                <div class='d-flex flex-wrap'>
                    ${generateTeam(team)}
                </div>
            </div>
        </main>
    </body>
</html>
    `;
};
